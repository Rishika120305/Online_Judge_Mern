import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import DashBoard from './pages/DashBoard';
import CodeEditor from './pages/CodeEditor';

export default function App() {
  return (
   <BrowserRouter>

<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/sign-in" element={<SignIn/>}/>
  <Route path="/sign-up" element={<SignUp/>}/>
  <Route path="/dashboard" element={<DashBoard/>}/>
  <Route path="/code-editor" element={<CodeEditor/>}/>
</Routes>
   </BrowserRouter>
  
  )
}
