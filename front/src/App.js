import './App.css';
import Header from './components/Header';
import Students from './components/Students';
import { Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Process from './components/Process';
import Lectures from './components/Lectures';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/students" element={<Students />} />
        <Route path="/lectures" element={<Lectures />} />
        <Route path="/process" element={<Process />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {/* <Author /> */}
    </div>
  );
}

export default App;
