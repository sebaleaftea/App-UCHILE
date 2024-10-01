import { useState } from 'react';
import { AddPermisos } from '../Api/apiPermisos';

const CrearPermiso = () => {
  const [dataFormulario, setDataFormulario] = useState({
    nombre_permiso: "",
  });
  const [mensaje, setMensaje] = useState<string | null>(null);  // Para almacenar el mensaje
  const [error, setError] = useState<string | null>(null);      // Para manejar errores

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setDataFormulario({ ...dataFormulario, [name]: value });
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    setMensaje(null);  // Limpiar el mensaje anterior
    setError(null);    // Limpiar el error anterior

    try {
      const nuevoPermiso = await AddPermisos(dataFormulario);
      setMensaje('Permiso creado exitosamente!');   // Mostrar mensaje de éxito
      setDataFormulario({ nombre_permiso: "" });    // Limpiar formulario después de la creación
    } catch (error) {
      setError('No se ha podido crear el nuevo permiso');  // Mostrar mensaje de error
    }
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label>Nombre:</label>
          <input 
            type="text" 
            id="nombre_permiso"
            name="nombre_permiso"
            value={dataFormulario.nombre_permiso} 
            onChange={handleOnChange} 
            style={styles.input} 
            required 
          />
        </div>
        <button type="submit" style={styles.submitButton}>Crear Permiso</button>
      </form>

      {/* Mensaje de éxito o error */}
      {mensaje && <p style={styles.successMessage}>{mensaje}</p>}
      {error && <p style={styles.errorMessage}>{error}</p>}
    </div>
  );
};

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '15px',
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column' as const,
  },
  input: {
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  submitButton: {
    backgroundColor: '#28a745',
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  successMessage: {
    color: 'green',
    marginTop: '10px',
  },
  errorMessage: {
    color: 'red',
    marginTop: '10px',
  },
};

export default CrearPermiso;
