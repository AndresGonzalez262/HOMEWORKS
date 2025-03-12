import logo from './logo.svg';
import './App.css';
import App2 from './App2'
import FirstApp from './FirstApp';
import FirstApp2 from './FirstApp2';
import ComponentApp from './ComponentApp';
import UserList from './UserList';
import Parent from './Parent';
import Father from './Father';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import Home from './Home';
import PrivatePage from './PrivatePage';

function App() {

  return (
    
    <AuthProvider>
      <Router>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <FirstApp title = "My first App"/>
        <p><App2 />
          Edit <code>src/App.js</code> and save to reload.

          <FirstApp2 value = {0} />


          <ComponentApp />


          <UserList />


          <Parent /> 



          <Father /> 


    

        </p>

        <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/private" element={<PrivatePage />} />
        </Routes>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </Router>
    </AuthProvider>
  );
}


export default App;
