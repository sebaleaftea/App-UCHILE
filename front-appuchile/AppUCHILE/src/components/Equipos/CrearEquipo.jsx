import { useState } from 'react';
import { AddEquipos } from '../../Api/apiEquipos'; // Asegúrate de que esta función está correctamente implementada

const CrearEquipo = () => {
  const [dataFormulario, setDataFormulario] = useState({
    name: "",
    tipo: "",
    
  });

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setDataFormulario({ ...dataFormulario, [name]: value });
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    try {
      const nuevoEquipo = await AddEquipos(dataFormulario); // Cambié el nombre de la variable
      console.log('Equipo Creado', nuevoEquipo);
    } catch (error) {
      console.error('No se ha podido crear el nuevo equipo', error);
    }
  };

  return (
    <form onSubmit={handleOnSubmit} style={styles.form}>
      <div style={styles.formGroup}>
        <label>Nombre del Equipo:</label>
        <input 
          type="text" 
          id="name"
          name="name"
          value={dataFormulario.name} 
          onChange={handleOnChange} 
          style={styles.input} 
          required 
        />
      </div>
      <div style={styles.formGroup}>
        <label>Tipo:</label>
        <input 
          type="text" 
          id="tipo"
          name="tipo"
          value={dataFormulario.tipo} 
          onChange={handleOnChange} 
          style={styles.input} 
          required 
        />
      </div>
      <button type="submit" style={styles.submitButton}>Crear Equipo</button>
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
};

export default CrearEquipo;
