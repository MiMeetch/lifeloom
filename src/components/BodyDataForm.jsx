import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const defaultTheme = createTheme();

export default function BodyDataForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const [activityLevel, setactivityLevel] = React.useState('');

  const handleChange = (event) => {
    setactivityLevel(event.target.value);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Body Data Page
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="off"
                  name="Weight"
                  required
                  fullWidth
                  id="weight"
                  label="Weight"
                  autoFocus
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">lbs</InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="off"
                  name="Height"
                  required
                  fullWidth
                  id="height"
                  label="height"
                  autoFocus
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">in</InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="activityLevel">Activity Level</InputLabel>
                  <Select
                    labelId="activityLevel"
                    id="activityLevel"
                    value={activityLevel}
                    label="activityLevel"
                    onChange={handleChange}
                  >
                    <MenuItem value={1.2}>Little or None</MenuItem>
                    <MenuItem value={1.375}>Light Exercise</MenuItem>
                    <MenuItem value={1.55}>Moderate Exercise</MenuItem>
                    <MenuItem value={1.725}>Heavy Exercise</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Calculate My Macros
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
