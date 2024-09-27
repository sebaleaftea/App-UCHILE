import { useEffect, useState } from 'react';
import { getInventarios, UpdateInventario } from '../../Api/apiInventarios';  // Cambia la API para Inventarios
import { useParams } from 'react-router-dom';

const EditInventario = () => {
  const { id } = useParams();
  const [dataFormulario, setDataFormulario] = useState({
    nombre: '',
    cantidad: '',
    precio: '',
    categoria: '',
    descripcion: '',
  });

  useEffect(() => {
    const cargarDatosInventario = async () => {
      try {
        const inventarios = await getInventarios();
        const inventario = inventarios.find(item => item.id === parseInt(id));
        if (inventario) {
          setDataFormulario(inventario);
        }
      } catch (error) {
        console.error('Error al cargar los datos del inventario', error);
      }
    };
    cargarDatosInventario();
  }, [id]);

  const manejadorDeCambios = (event) => {
    const { name, value } = event.target;
    setDataFormulario({ ...dataFormulario, [name]: value });
  };

  const manejadorDeSubida = async (event) => {
    event.preventDefault();
    try {
      await UpdateInventario(id, dataFormulario);
      console.log('El inventario ha sido actualizado');
    } catch (error) {
      console.error('El inventario no pudo ser actualizado');
    }
  };

  return (
    <form onSubmit={manejadorDeSubida}>
      <div>
        <label htmlFor="nombre">Nombre del Ítem</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={dataFormulario.nombre}
          onChange={manejadorDeCambios}
          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <div>
        <label htmlFor="cantidad">Cantidad</label>
        <input
          type="number"
          id="cantidad"
          name="cantidad"
          value={dataFormulario.cantidad}
          onChange={manejadorDeCambios}
          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <div>
        <label htmlFor="precio">Precio</label>
        <input
          type="number"
          id="precio"
          name="precio"
          value={dataFormulario.precio}
          onChange={manejadorDeCambios}
          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <div>
        <label htmlFor="categoria">Categoría</label>
        <input
          type="text"
          id="categoria"
          name="categoria"
          value={dataFormulario.categoria}
          onChange={manejadorDeCambios}
          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <div>
        <label htmlFor="descripcion">Descripción</label>
        <textarea
          id="descripcion"
          name="descripcion"
          value={dataFormulario.descripcion}
          onChange={manejadorDeCambios}
          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center px-4 py-2 mt-3 text-sm font-medium text-green-500 bg-green-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700"
      >
        Guardar Cambios
      </button>
    </form>
  );
};

export default EditInventario;
