import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Problems from './pages/Problems';
import About from './pages/About';
import SignIn from './pages/SignIn';
import DashBoard from './pages/DashBoard';
import SignUp from './pages/SignUp';
import Header from './components/Header';
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute';

export default function App() {
  return (
    <div className="flex flex-col h-screen">
      <BrowserRouter>
        <Header /> {/* Header takes its place */}
        <div className="flex-grow overflow-auto">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/sign-in' element={<SignIn />} />
            <Route path='/sign-up' element={<SignUp />} />
            <Route element={<PrivateRoute />}>
              <Route path='/dashboard' element={<DashBoard />} />
            </Route>
            <Route path='/problems' element={<Problems />} />
          </Routes>
        </div>
        <Footer /> {/* Footer takes its place */}
      </BrowserRouter>
    </div>
  );
}