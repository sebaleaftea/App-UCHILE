import React, { useState, useEffect } from 'react';
import { getEquipos, DelEquipo } from '../../Api/apiEquipos'; // Asegúrate de tener estas funciones
import { useNavigate, Link } from 'react-router-dom';

const EquipoList = () => {
  const [equipos, setEquipos] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchEquipos = async () => {
    setLoading(true);
    try {
      const data = await getEquipos();
      setEquipos(data);
    } catch (error) {
      console.error('Error fetching equipos:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEquipos();
  }, []);

  const RefreshPage = async () => {
    await fetchEquipos();
  };

  const handleCreateEquipo = () => {
    navigate('/ListaEquipos/añadirEquipo');  
  };

  const handleCreateCategoria = () => {
    navigate('/ListaEquipos/crearCategoria');  
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6 bg-transparent shadow-md rounded-lg">
      <div className="flex justify-between items-center mb-4">
        {/* Botón para crear un nuevo equipo */}
        <button
          onClick={handleCreateEquipo}
          className="bg-green-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Crear Equipo
        </button>
        <button
          onClick={handleCreateCategoria}
          className="bg-green-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Crear Categoría
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border-collapse border border-gray-300">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="w-1/4 px-4 py-2 border border-gray-300">Nombre</th>
              <th className="w-1/4 px-4 py-2 border border-gray-300">Tipo</th>
              <th className="w-1/4 px-4 py-2 border border-gray-300">Cantidad</th>
              <th className="w-1/4 px-4 py-2 border border-gray-300">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {equipos.map((equipo) => (
              <tr key={equipo.id} className="text-center">
                <td className="px-4 py-2 border border-gray-300">{equipo.nombre}</td>
                <td className="px-4 py-2 border border-gray-300">{equipo.tipo}</td>
                <td className="px-4 py-2 border border-gray-300">{equipo.cantidad}</td>
                <td className="px-4 py-2 border border-gray-300 flex justify-center gap-2">
                  <Link
                    to={`/Equipos/editarEquipo/${equipo.id}`}
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-3 rounded"
                  >
                    Editar
                  </Link>
                  <DelEquipo
                    id={equipo.id}
                    onDelete={RefreshPage}
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded"
                  >
                    Eliminar
                  </DelEquipo>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EquipoList;
