import { useEffect, useState } from 'react';
import { getEquipos, UpdateEquipos } from '../../Api/apiEquipos'; // Asegúrate de que estas funciones están correctamente implementadas
import { useParams } from 'react-router-dom';

const EditEquipo = () => {
  const { id } = useParams();
  const [dataFormulario, setDataFormulario] = useState({
    nombre_equipo: '',
    tipo: '',
    cantidad: '',
    acciones: '',
  });

  useEffect(() => {
    const cargarDatosEquipo = async () => {
      try {
        const equipos = await getEquipos(); // Cambié la función a getEquipos
        const equipo = equipos.find(equipo => equipo.id === parseInt(id));
        if (equipo) {
          setDataFormulario(equipo);
        }
      } catch (error) {
        console.error('Error al cargar los datos del equipo', error);
      }
    };
    cargarDatosEquipo();
  }, [id]);

  const manejadorDeCambios = (event) => {
    const { name, value } = event.target;
    setDataFormulario({ ...dataFormulario, [name]: value });
  };

  const manejadorDeSubida = async (event) => {
    event.preventDefault();
    try {
      await UpdateEquipos(id, dataFormulario); // Cambié la función a UpdateEquipos
      console.log('El equipo ha sido actualizado');
    } catch (error) {
      console.error('El equipo no pudo ser actualizado', error);
    }
  };

  return (
    <form onSubmit={manejadorDeSubida} style={styles.form}>
      <div style={styles.formGroup}>
        <label htmlFor="nombre_equipo">Nombre del Equipo</label>
        <input
          type="text"
          id="nombre_equipo"
          name='nombre_equipo'
          value={dataFormulario.nombre_equipo}
          onChange={manejadorDeCambios}
          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="tipo">Tipo</label>
        <input
          type="text"
          id="tipo"
          name='tipo'
          value={dataFormulario.tipo}
          onChange={manejadorDeCambios}
          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="cantidad">Cantidad</label>
        <input
          type="number"
          id="cantidad"
          name='cantidad'
          value={dataFormulario.cantidad}
          onChange={manejadorDeCambios}
          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="acciones">Acciones</label>
        <input
          type="text"
          id="acciones"
          name='acciones'
          value={dataFormulario.acciones}
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

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
};

export default EditEquipo;
