import React, { useState, useEffect } from 'react';
import { getUsuarios } from '../../Api/apiUsuarios';
import DelUsuario from '../../Api/apiUsuarios';
import { useNavigate, Link } from 'react-router-dom';

const UserList = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();  

  const fetchUsuarios = async () => {
    setLoading(true);
    try {
      const data = await getUsuarios();
      setUsuarios(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsuarios();
  }, []);

  const RefreshPage = async () => {
    await fetchUsuarios();
  };


  const handleCreateUser = () => {
    navigate('/Usuarios/listadeusuarios/añadirUsuario');  
  };

  const handleCreateRol = () => {
    navigate('/Usuarios/listadeusuarios/crearRol');  
  };

  const handleCreatePermiso = () => {
    navigate('/Usuarios/listadeusuarios/crearPermiso');  
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6 bg-transparent shadow-md rounded-lg">
      <div className="flex justify-between items-center mb-4">
        {/* Botón para crear un nuevo usuario */}
        <button
          onClick={handleCreateUser}  // Llama a la función de redirección al hacer clic
          className="bg-green-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Crear Usuario
        </button>
        <button
          onClick={handleCreatePermiso}  // Llama a la función de redirección al hacer clic
          className="bg-green-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Permisos
        </button>
        <button
          onClick={handleCreateRol}  // Llama a la función de redirección al hacer clic
          className="bg-green-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Roles
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border-collapse border border-gray-300">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="w-1/4 px-4 py-2 border border-gray-300">Nombre</th>
              <th className="w-1/4 px-4 py-2 border border-gray-300">Rut</th>
              <th className="w-1/4 px-4 py-2 border border-gray-300">Disponible</th>
              <th className="w-1/4 px-4 py-2 border border-gray-300">Permisos</th>
              <th className="w-1/4 px-4 py-2 border border-gray-300">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario) => (
              <tr key={usuario.id} className="text-center">
                <td className="px-4 py-2 border border-gray-300">{usuario.nombre_usuario}</td>
                <td className="px-4 py-2 border border-gray-300">Rut: {usuario.rut}</td>
                <td className="px-4 py-2 border border-gray-300">{usuario.disponible ? 'Activo' : 'Inactivo'}</td>
                <td className="px-4 py-2 border border-gray-300">{usuario.permisos}</td>
                <td className="px-4 py-2 border border-gray-300 flex justify-center gap-2">
                  <Link
                    to={`/Usuarios/editarUsuario/${usuario.id}`}
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-3 rounded"
                  >
                    Editar
                  </Link>
                  <DelUsuario
                    id={usuario.id}
                    onDelete={RefreshPage}
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded"
                  >
                    Eliminar
                  </DelUsuario>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
