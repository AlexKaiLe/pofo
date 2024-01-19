import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import Content from './Content';

import { ThemeProvider, createTheme } from '@mui/material/styles';


import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


library.add(fab);
library.add(faEnvelope);

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const handleThemeChange = () => {
    setDarkMode(!darkMode);
    console.log("Dark mode", darkMode)
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      navbar: {
        main: darkMode ? '#333333' : '#d3d3d3', 
      },
      navbar_buttons: {
        main: darkMode ? '#d3d3d3' : '#333333', 
      },
      content: {
        main: darkMode ? '#333333' : '#d3d3d3', 
      },
      dark_light: {
        main: darkMode ? '#000000' : '#ffffff', 
      },
      light_dark: {
        main: darkMode ? '#ffffff' : '#000000',
      },
    },
    background: {
      default: darkMode ? '#303030' : '#fafafa',
    },
  });

  return (
    <div className="wrapper">
      <Navbar className="navbar" darkMode={darkMode} handleThemeChange={handleThemeChange} theme={theme}/>
      <Content className="content" theme={theme}/> 
    </div>
  );
}

export default App;

// import React, { useState } from 'react';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import { CssBaseline, Switch, Paper } from '@mui/material';

// const ThemeSwitcher = () => {
//   const [darkMode, setDarkMode] = useState(false);

//   const theme = createTheme({
//     palette: {
//       mode: darkMode ? 'dark' : 'light',
//       block_1: {
//         main: darkMode ? '#64b5f6' : '#2196f3', // Adjust primary color
//       },
//       block_2: {
//         main: darkMode ? '#ff8a65' : '#f50057', // Adjust secondary color
//       },
//     },
//     background: {
//       default: darkMode ? '#303030' : '#fafafa', // Adjust default background color
//     },
//   });

//   const handleThemeChange = () => {
//     setDarkMode(!darkMode);
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       {/* <CssBaseline /> */}
//       <Switch
//         checked={darkMode}
//         onChange={handleThemeChange}
//         color="primary"
//         name="themeSwitch"
//         inputProps={{ 'aria-label': 'toggle dark mode' }}
//       />
//       <Paper elevation={3} style={{ padding: '20px', marginTop: '100px', background: theme.background.default }}>
//          <div
            // style={{
            //   backgroundColor: theme.palette.block_1.main
            // }}
//           >
//             Primary Block
//           </div>

//           <div
//             style={{
//               backgroundColor: theme.palette.block_2.main
//             }}
//           >
//             Secondary Block
//           </div>
//       </Paper>
//     </ThemeProvider>
//   );
// };

// export default ThemeSwitcher;

