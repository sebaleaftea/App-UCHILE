import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Loader from './common/loader';
import PageTitle from './components/Pagetitle';
//import CrearEquipo from './pages/Equipos/CrearEquipo';
import Calendar from './pages/Calendar';
import Añadirusuario from './pages/Usuarios/añadirUsuario';
import Login from './pages/Login';
import Perfil from './pages/Perfil';


function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>        
        <Route
          index // esto redirije a la parte principal de todas las rutas: /
          element={
            <>
              <PageTitle title="Login LMM U de Chile" />
              <Login />
            </>
          }
        />
        <Route
         path='/calendar'
         element={
          <>
            <PageTitle title='Calendario'/>
            <Calendar />
          </>
         }
        />
        <Route
        path='/profile' 
        element={
          <>
          <PageTitle title='Perfil de Usuario'/>
          <Perfil />
          </>
        } 
        />
        <Route
          path="/Usuarios/añadirUsuario"
          element={
            <>
              <PageTitle title="Añadir Usuario" />
              <Añadirusuario />
            </>
          }
        />


      </Routes>
    </>
  );
}

export default App;
