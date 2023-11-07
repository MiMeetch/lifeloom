import "./App.css";
import Form from "./components/common/Form";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import { app } from './firebase-config';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'

const navigate = useNavigate();

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAction = (id) => {
    const authentication = getAuth();
    if (id === 2) {
      createUserWithEmailAndPassword(authentication, email, password)
      .then((res) => {
        sessionStorage.setItem('Auth Token', res._tokenResponse.refreshToken)
        navigate('/home')
      })
    }
  }

  return (
    <Router>
      <div className="App">
        <>
          <Routes>
            <Route
              path="/login"
              element={
                <Form
                  title="Login"
                  setEmail={setEmail}
                  setPassword={setPassword}
                  handleAction={() => handleAction(1)}
                />
              }
            />
            <Route
              path="/register"
              element={
                <Form
                  title="Register"
                  setEmail={setEmail}
                  setPassword={setPassword}
                  handleAction={() => handleAction(2)}
                />
              }
            />
          </Routes>
        </>
      </div>
    </Router>
  );
}

export default App;
