import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import Content from './Content';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

library.add(fab);
library.add(faEnvelope);

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className="wrapper">
      <Navbar className="navbar" darkMode={darkMode} setDarkMode={setDarkMode} handleThemeChange={handleThemeChange}/>
      <Content className="content"/> 
    </div>
  );
}

export default App;

// import React, { useState } from 'react';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import { CssBaseline, Switch, Container, Typography, Paper } from '@mui/material';
// import { css, ThemeProvider as EmotionThemeProvider } from '@emotion/react';


// const ThemeSwitcher = () => {
//   const [darkMode, setDarkMode] = useState(false);

//   const theme = createTheme({
//     palette: {
//       mode: darkMode ? 'dark' : 'light',
//       primary: {
//         main: darkMode ? '#64b5f6' : '#2196f3', // Adjust primary color
//       },
//       secondary: {
//         main: darkMode ? '#ff8a65' : '#f50057', // Adjust secondary color
//       },
//     },
//   });

//   const handleThemeChange = () => {
//     setDarkMode(!darkMode);
//   };

//   // Define Emotion styles for non-Material-UI divs
//   const coloredBlockStyle = css`
//     padding: 10px;
//     margin-top: 20px;
//     color: white;
//   `;

//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <Container component="main" maxWidth="xs">
//         <Paper elevation={3} style={{ padding: '20px', marginTop: '100px' }}>
//           <Typography variant="h5" gutterBottom>
//             Theme Switcher
//           </Typography>
//           <Switch
//             checked={darkMode}
//             onChange={handleThemeChange}
//             color="primary"
//             name="themeSwitch"
//             inputProps={{ 'aria-label': 'toggle dark mode' }}
//           />
//           <Typography variant="body1">
//             {darkMode ? 'Dark Mode' : 'Light Mode'}
//           </Typography>

//           {/* Material-UI colored blocks */}
//           <div
//             style={{
//               backgroundColor: theme.palette.primary.main,
//               ...coloredBlockStyle,
//             }}
//           >
//             Primary Block
//           </div>

//           <div
//             style={{
//               backgroundColor: theme.palette.secondary.main,
//               ...coloredBlockStyle,
//             }}
//           >
//             Secondary Block
//           </div>

//           {/* Non-Material-UI colored blocks */}
//           <div
//             css={css`
//               background-color: ${theme.palette.primary.main};
//               ${coloredBlockStyle}
//             `}
//           >
//             Custom Block 1
//           </div>

//           <div
//             css={css`
//               background-color: ${theme.palette.secondary.main};
//               ${coloredBlockStyle}
//             `}
//           >
//             Custom Block 2
//           </div>
//         </Paper>
//       </Container>
//     </ThemeProvider>
//   );
// };

// export default ThemeSwitcher;
