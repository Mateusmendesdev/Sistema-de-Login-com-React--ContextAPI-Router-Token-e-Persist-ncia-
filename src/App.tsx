import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Private } from './pages/Private/Private';
import { RequireAuth } from './contexts/Auth/RequireAuth';
import { AuthContext } from './contexts/Auth/AuthContext';
import { useContext } from "react"



function App() {

  const auth = useContext(AuthContext);

  return (
    <div className="App">
      <h1>Header do Site</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/private">Pagina Privada</Link>
        {auth.user && <a href="javascript:;">Sair</a>}
      </nav>
      <hr />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/private" element={<RequireAuth><Private/></RequireAuth>}/>
      </Routes>
    </div>
  );
}

export default App;
