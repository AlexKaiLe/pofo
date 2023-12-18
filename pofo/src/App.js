import './App.css';
import Navbar from './Navbar';
import Content from './Content';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fab);
library.add(faEnvelope);

function App() {
  return (
    <div className="wrapper">
      <Navbar/>
      <Content/> 
    </div>
  );
}

export default App;