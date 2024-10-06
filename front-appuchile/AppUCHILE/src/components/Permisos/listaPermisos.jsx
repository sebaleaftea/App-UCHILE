import React, { useState, useEffect } from 'react';
import  getPermisos, {DeletePermisos}  from '../../Api/apiPermisos';


const ListaPermisos = () => {
  const [permisos, setPermisos] = useState([]);
  const [loading, setLoading] = useState(true);
 

  const fetchPermisos = async () => {
    setLoading(true);
    try {
      const data = await getPermisos();
      setPermisos(data);
    } catch (error) {
      console.error('Error fetching Permissions:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPermisos();
  }, []);

  const RefreshPage = async () => {
    await fetchPermisos();
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6 bg-transparent shadow-md rounded-lg">
      <div className="flex justify-between items-center mb-4">
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border-collapse border border-gray-300">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="w-1/4 px-4 py-2 border border-gray-300">Nombre</th>
              <th className="w-1/4 px-4 py-2 border border-gray-300">Descripcion</th>
              <th className="w-1/4 px-4 py-2 border border-gray-300">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {permisos.map((permiso) => (
              <tr key={permiso.id} className="text-center">
                <td className="px-4 py-2 border border-gray-300">{permiso.nombre}</td>
                <td className="px-4 py-2 border border-gray-300">{permiso.descripcion}</td>
                <td className="px-4 py-2 border border-gray-300 flex justify-center gap-2">
                  <Link
                    to={`/crearPermiso/editarPermiso/${permiso.id}`}
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-3 rounded"
                  >
                    Editar
                  </Link>
                  <DeletePermisos
                    id={permiso.id}
                    onDelete={RefreshPage}
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded"
                  >
                    Eliminar
                  </DeletePermisos>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListaPermisos;
