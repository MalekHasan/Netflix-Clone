import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route,Routes} from "react-router-dom"
import Home from './components/Home.js';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='' element={<Home/>}/>
        </Routes>
    </BrowserRouter>

  );
}

export default App;
