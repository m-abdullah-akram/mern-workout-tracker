import {BrowserRouter , Routes  , Route} from 'react-router-dom'
import Home from "../src/pages/Home";

// importing the links
import Navbar from '../src/components/navbar'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className='pages'>
          <Routes>
            <Route
              path='/' 
              element ={<Home />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
