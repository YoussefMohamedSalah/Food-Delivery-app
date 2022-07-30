import './App.css';
import MainLogin from './Pages/Log/MainLogin';
import { Routes, Route } from 'react-router-dom';
import SubSignIn from './Pages/Log/SubSignIn';
import SubSignUp from './Pages/Log/SubSignUp';
import Main from './Pages/Main/Main.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLogin />} />
        <Route path="/signup" element={<SubSignUp />} />
        <Route path="/signin" element={<SubSignIn />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
