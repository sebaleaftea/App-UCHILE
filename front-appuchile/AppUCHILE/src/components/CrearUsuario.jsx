import {useState} from 'react';
i/* mport {AddUsuarios} from '../api'; */

const CrearCliente = () => {
    const [dataFormulario, setdataFormulario] = useState({
        nombre_usuario : "",
        apellido_usuario: "",
        correo: "",
        telefono: "",
        direccion: "",
        ciudad: "",
        comuna: "",
        rut: "",
        giro: "",
    });
    const manejadorDeCambios = (event) => {
        const {name, value} = event.target;
        setdataFormulario({...dataFormulario, [name] : value });
    };
    const manejadorDeSubida = async(event) => {
        event.preventDefault();
        try {
            const nuevoCliente = await AddClientes(dataFormulario);
            console.log('Cliente Creado', nuevoCliente)
        } catch(error){
            console.error('No se ha podido cargar nuevo cliente')
        }
    };
    return (
        <form onSubmit={manejadorDeSubida}>
          <div>
            <label htmlFor="nombre">Nombre Cliente</label>
            <input
              type="text"
              id="nombre"
              name="nombre_cliente"
              value={dataFormulario.nombre_cliente}
              onChange={manejadorDeCambios}
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label htmlFor="apellido">Apellido Cliente</label>
            <input
              type="text"
              id="apellido"
              name = "apellido_cliente"
              value={dataFormulario.apellido_cliente}
              onChange={manejadorDeCambios}
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label htmlFor="email">Correo</label>
            <input
              type="email"
              id="email"
              name = "correo"
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
              name = "telefono"
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
              name = "direccion"
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
              name = "ciudad"
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
              name = "comuna"
              value={dataFormulario.comuna}
              onChange={manejadorDeCambios}
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label htmlFor="rut">Rut</label>
            <input
              type="text"
              id="rut"
              name = "rut"
              value={dataFormulario.rut}
              onChange={manejadorDeCambios}
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label htmlFor="giro">giro</label>
            <input
              type="text"
              id="giro"
              name = "giro"
              value={dataFormulario.giro}
              onChange={manejadorDeCambios}
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 mt-3 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700">
            Guardar Cambios
          </button>
        </form>
      );
};
export default CrearCliente;