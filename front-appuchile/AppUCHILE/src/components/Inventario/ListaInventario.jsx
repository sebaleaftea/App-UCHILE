import React, { useState, useEffect } from 'react';
import { getInventarios } from '../../Api/apiInventario';  // Cambia la API para Inventarios
import DelInventario from '../../Api/apiInventario';  // Componente para eliminar inventarios
import { useNavigate, Link } from 'react-router-dom';

const InventarioList = () => {
  const [inventarios, setInventarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchInventarios = async () => {
    setLoading(true);
    try {
      const data = await getInventarios();  // Llamada a la API para obtener el inventario
      setInventarios(data);
    } catch (error) {
      console.error('Error fetching inventory:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInventarios();
  }, []);

  const RefreshPage = async () => {
    await fetchInventarios();
  };

  const handleCreateItem = () => {
    navigate('/listadeinventario/añadirItem');  // Ruta para agregar un nuevo ítem
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6 bg-transparent shadow-md rounded-lg">
      <div className="flex justify-between items-center mb-4">
        {/* Botón para crear un nuevo ítem */}
        <button
          onClick={handleCreateItem}  // Llama a la función de redirección al hacer clic
          className="bg-green-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Crear Ítem
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border-collapse border border-gray-300">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="w-1/4 px-4 py-2 border border-gray-300">Nombre del Ítem</th>
              <th className="w-1/4 px-4 py-2 border border-gray-300">Cantidad</th>
              <th className="w-1/4 px-4 py-2 border border-gray-300">Precio</th>
              <th className="w-1/4 px-4 py-2 border border-gray-300">Categoría</th>
              <th className="w-1/4 px-4 py-2 border border-gray-300">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {inventarios.map((item) => (
              <tr key={item.id} className="text-center">
                <td className="px-4 py-2 border border-gray-300">{item.nombre}</td>
                <td className="px-4 py-2 border border-gray-300">{item.cantidad}</td>
                <td className="px-4 py-2 border border-gray-300">${item.precio}</td>
                <td className="px-4 py-2 border border-gray-300">{item.categoria}</td>
                <td className="px-4 py-2 border border-gray-300 flex justify-center gap-2">
                  <Link
                    to={`/ListaInventario/editarItem/${item.id}`}
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-3 rounded"
                  >
                    Editar
                  </Link>
                  <DelInventario
                    id={item.id}
                    onDelete={RefreshPage}
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded"
                  >
                    Eliminar
                  </DelInventario>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InventarioList;
