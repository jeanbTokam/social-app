
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Homepage from './pages/Home';
import Profile from './pages/Profile';
import Addpost from './pages/Addpost';


function App() {
  return (
    <div className="App">

          <BrowserRouter>
              <Routes>
                      <Route path="/" exact element={<Homepage />} />
                      <Route path="/profile"   exact  element={<Profile />} />
                      <Route path="/addpost"  exact element={<Addpost />} />
              </Routes>
          </BrowserRouter>

    </div>
  );
}

export default App;
