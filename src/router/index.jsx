import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../components/Home'
import Erro from '../components/Erro'
import MovieDetail from '../components/Movies/Detail'
import Header from '../components/Header';

function Router() { 
  return (
    <BrowserRouter>
      <Header/>
      <Routes> 
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<Erro/>}/>
        <Route path="/movie/:id" element={<MovieDetail/>}/>
        <Route path="/favorites" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;