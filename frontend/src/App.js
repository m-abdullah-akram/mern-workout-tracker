import {BrowserRouter , Routes  , Route , Navigate} from 'react-router-dom'
import { useAuthContext } from './hooks/AuthContext';
import Home from "../src/pages/Home";

// importing the links
import Navbar from '../src/components/navbar'
import Login from './pages/Login';
import SignUp from './pages/SignUp';


function App() {
  const { user } = useAuthContext();
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className='pages'>
          <Routes>
            <Route
              path='/' 
              element ={user ? <Home /> : <Navigate to="/login" />}
            />
            <Route
              path='/login' 
              element ={!user ? <Login /> : <Navigate to="/" />}
            />
            <Route
              path='/signup' 
              element ={!user ? <SignUp /> : <Navigate to="/" />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
