import "./App.css";
import LoginForm from "./components/LogInForm";
import SignUpForm from "./components/SignUpForm";
import BodyDataForm from "./components/BodyDataForm";
import { Routes, Route, useNavigate } from "react-router-dom";
import React, { useEffect } from 'react'
import { useState } from "react";
import './firebase-config';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from './firebase-config'


function App() {

  useEffect(() => {
    console.log(auth.currentUser)
  },[])

  // useEffect(() => {
  //   let authToken = sessionStorage.getItem('Auth Token')

  //   if (authToken) {
  //     navigate('/')
  //   }
  // }, [])

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [password, setPassword] = useState("");
  // const [password, setPassword] = useState("");


  const navigate = useNavigate();

  const handleAction = (id) => {
    const authentication = getAuth();
    if (id === 2) {
      createUserWithEmailAndPassword(authentication, email, password)
      .then((res) => {
        navigate('/register')
        sessionStorage.setItem('Auth Token', res._tokenResponse.refreshToken)
      })
    }
    if (id === 1) {
      signInWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          navigate('/register')
          sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
        })
    }
  }


  return (
    
      <div className="App">
        <>
          <Routes>
            <Route
              path="/login"
              element={
                <LoginForm
                  title="Login"
                  setEmail={setEmail}
                  setPassword={setPassword}
                  handleAction={() => handleAction(1)}
                />
              }
            />
            <Route
              path="/signup"
              element={
                <SignUpForm
                  title="Register"
                  setEmail={setEmail}
                  setPassword={setPassword}
                  handleAction={() => handleAction(2)}
                />
              }
            />
            <Route
            path='/register'
            element={
              <BodyDataForm />}
            />
          </Routes>
          
        </>
      </div>
  
  );
}

export default App;
