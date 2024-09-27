import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Loader from './common/loader';
import PageTitle from './components/Pagetitle';
import ListaPapers from './pages/Papers/listaPapers';
import AñadirPaper from './pages/Papers/añadirPaper';
import ListadeUsuarios from "./pages/Usuarios/listadeUsuarios";
import Añadirusuario from './pages/Usuarios/añadirUsuario';
import AñadirRol from './pages/Roles/añadirRol';
import AñadirPermiso from './pages/Permisos/añadirPermiso';
import ListadeInventario from './pages/Inventarios/listaInventario';
import AñadirItem from './pages/Inventarios/añadirItem';
import ListadeEquipos from './pages/Equipos/listadeEquipos';
import AñadirEquipo from './pages/Equipos/añadirEquipo';
import Calendar from './pages/Calendar';
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
          path="/Usuarios/listadeusuarios/añadirUsuario"
          element={
            <>
              <PageTitle title="Añadir Usuario" />
              <Añadirusuario />
            </>
          }
        />
        <Route
          path="/Usuarios/listadeusuarios/crearRol"
          element={
            <>
              <PageTitle title="Crear Rol" />
              <AñadirRol />
            </>
          }
        />
        <Route
          path="/Usuarios/listadeusuarios/crearPermiso"
          element={
            <>
              <PageTitle title="Crear Permiso" />
              <AñadirPermiso />
            </>
          }
        />
        <Route
          path="/Usuarios/listadeusuarios"
          element={
            <>
              <PageTitle title="Lista de Usuarios" />
              <ListadeUsuarios />
            </>
          }
        />
        <Route
          path="/Papers/listaPapers"
          element={
            <>
              <PageTitle title="Lista de Papers" />
              <ListaPapers />
            </>
          }
        />
        <Route
          path="/Papers/listaPapers/añadirPaper"
          element={
            <>
              <PageTitle title="Añadir Paper" />
              <AñadirPaper />
            </>
          }
        />
        <Route
          path="/ListaInventario"
          element={
            <>
              <PageTitle title="Lista de Inventario" />
              <ListadeInventario />
            </>
          }
        />
        <Route
          path="/listadeinventario/añadirItem"
          element={
            <>
              <PageTitle title="Añadir Item" />
              <AñadirItem />
            </>
          }
        />
        <Route
          path="/ListaEquipos"
          element={
            <>
              <PageTitle title="Lista de Equipos" />
              <ListadeEquipos />
            </>
          }
        />
        <Route
          path="/ListaEquipos/añadirEquipo"
          element={
            <>
              <PageTitle title="Añadir Equipo" />
              <AñadirEquipo />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
