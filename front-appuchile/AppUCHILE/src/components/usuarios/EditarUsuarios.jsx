import { useEffect, useState } from 'react';
import { getUsuarios, UpdateUsuarios } from '../../Api/apiUsuarios';
import { useParams } from 'react-router-dom';

const EditUsuario = () => {
  const { id } = useParams();
  const [dataFormulario, setDataFormulario] = useState({
    nombre_usuario: '',
    apellido_usuario: '',
    rut: '',
    correo: '',
    telefono: '',
    direccion: '',
    ciudad: '',
    comuna: '',
    
  });

  useEffect(() => {
    const cargarDatosUsuario = async () => {
      try {
        const usuarios = await getUsuarios();
        const usuario = usuarios.find(user => user.id === parseInt(id));
        if (usuario) {
          setDataFormulario(usuario);
        }
      } catch (error) {
        console.error('Error al cargar los datos del Usuario', error)
      }
    };
    cargarDatosUsuario();
  }, [id]);

  const manejadorDeCambios = (event) => {
    const { name, value } = event.target;
    setDataFormulario({ ...dataFormulario, [name]: value })
  };

  const manejadorDeSubida = async (event) => {
    event.preventDefault();
    try {
      await UpdateUsuarios(id, dataFormulario);
      console.log('El usuario ha sido actualizado');
    } catch (error) {
      console.error('El usuario no pudo ser actualizado');
    }
  }

  return (
    <form onSubmit={manejadorDeSubida}>
      <div>
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          name='nombre_usuario'
          value={dataFormulario.nombre_usuario}
          onChange={manejadorDeCambios}
          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <div>
        <label htmlFor="apellido">Apellido</label>
        <input
          type="text"
          id="apellido"
          name='apellido_usuario'
          value={dataFormulario.apellido_usuario}
          onChange={manejadorDeCambios}
          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <div>
        <label htmlFor="rut">Rut</label>
        <input
          type="text"
          id="rut"
          name='rut'
          value={dataFormulario.rut}
          onChange={manejadorDeCambios}
          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name='correo'
          value={dataFormulario.correo}
          onChange={manejadorDeCambios}
          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <div>
        <label htmlFor="fono">Telefono</label>
        <input
          type="number"
          id="fono"
          name='telefono'
          value={dataFormulario.telefono}
          onChange={manejadorDeCambios}
          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <div>
        <label htmlFor="direccion">Direccion</label>
        <input
          type="text"
          id="direccion"
          name='direccion'
          value={dataFormulario.direccion}
          onChange={manejadorDeCambios}
          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <div>
        <label htmlFor="ciudad">Ciudad</label>
        <input
          type="text"
          id="ciudad"
          name='ciudad'
          value={dataFormulario.ciudad}
          onChange={manejadorDeCambios}
          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <div>
        <label htmlFor="comuna">Comuna</label>
        <input
          type="text"
          id="comuna"
          name='comuna'
          value={dataFormulario.comuna}
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

export default EditUsuario;
