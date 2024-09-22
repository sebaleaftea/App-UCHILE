import { useState } from 'react';
import { AddPermisos } from '../Api/apiPermisos';

const CrearPermiso = () => {
  const [dataFormulario, setdataFormulario] = useState({
    nombre_permiso: "",
  });

  const handleOnChange = (event) => {
    const {name, value} = event.target;
    setdataFormulario({...dataFormulario, [name] : value });
  };

  const handleOnSubmit = async(event) => {
    event.preventDefault();
    try {
      const nuevoPermiso = await AddPermisos(dataFormulario);
      console.log('Permiso creado', nuevoPermiso)
    } catch(error){
      console.error('No se ha podido cargar el nuevo permiso')
    }
  }

  return (
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
  select: {
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
};

export default CrearPermiso;
