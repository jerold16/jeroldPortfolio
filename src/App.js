import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './Components/home.css'
import HomePage from './Pages/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ParticularProjectPage from './Pages/ParticularProjectPage';
function App() {
  return (
    <div className=" bg-black p-0 m-0 text-slate-50 ">
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<HomePage />} />
          <Route path='/project/:id' element={<ParticularProjectPage />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
