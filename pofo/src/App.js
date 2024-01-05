import './App.css';
import Navbar from './Navbar';
import Content from './Content';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

library.add(fab);
library.add(faEnvelope);

function App() {

  return (
    <div className="wrapper">
      <Navbar className="navbar"/>
      <Content className="content"/> 
    </div>
  );
}

export default App;
