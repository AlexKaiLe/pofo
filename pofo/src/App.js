// import logo from './logo.svg';
// import './App.css';
import Navbar from './Navbar';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fab);
library.add(faEnvelope);

function App() {
  return (
    // <div className="App">
    //   {/* <header className="App-header">
    //   </header> */}
    //   <Navbar/>
    // </div>
    <Navbar/>
  );
}

export default App;
