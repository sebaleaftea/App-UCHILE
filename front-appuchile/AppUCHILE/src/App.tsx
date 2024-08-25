import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Loader from './common/loader';
import PageTitle from './components/Pagetitle';
import Laboratorio from './pages/Dashboard/Laboratorio';
import Calendar from './pages/Calendar';
import Añadirusuario from './pages/Usuarios/añadirUsuario';


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
          index
          element={
            <>
              <PageTitle title="Panel de control lab. U Chile" />
              <Laboratorio />
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
