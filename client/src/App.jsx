import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} /> {/* Fixed path */}
        <Route path="/about" element={<About />} />     {/* Added slash */}
         <Route element={<PrivateRoute />} />
        <Route path="/profile" element={<Profile />} /> {/* Added slash */}
      </Routes>
    </BrowserRouter>
  );
}
