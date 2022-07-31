import './App.css';
import { useState } from 'react';
import MainLogin from './Pages/Log/MainLogin';
import { Routes, Route } from 'react-router-dom';
import SubSignIn from './Pages/Log/SubSignIn';
import SubSignUp from './Pages/Log/SubSignUp';
import Main from './Pages/Main/Main.jsx';
import { SideNavContext } from './Contexts/SideNavContext';
import Orders from './Pages/Orders/Orders';

function App() {
  const [sideNav, setSideNav] = useState('none');
  const handleTogleNav = () => {
    setSideNav((curr) => (curr === 'block' ? 'none' : 'block'));
  };

  return (
    <SideNavContext.Provider value={{ sideNav, setSideNav, handleTogleNav }}>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLogin />} />
          <Route path="/signup" element={<SubSignUp />} />
          <Route path="/signin" element={<SubSignIn />} />
          <Route path="/main" element={<Main />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </div>
    </SideNavContext.Provider>
  );
}

export default App;
