import { useState } from 'react';
import {AddRoles} from "../../Api/apiRoles";

const CrearRol = () => {
  const [dataFormulario, setdataFormulario] = useState({
    nombre_rol: "",
    id: "",
  });

  const handleOnChange = (event) => {
    const {name, value} = event.target;
    setdataFormulario({...dataFormulario, [name] : value });
  };

  const handleOnSubmit = async(event) => {
    event.preventDefault();
    try {
      const nuevoRol = await AddRoles(dataFormulario);
      console.log('Rol Creado', nuevoRol)
    } catch(error){
      console.error('No se ha podido cargar el nuevo rol')
    }
  }

  return (
    <form onSubmit={handleOnSubmit} style={styles.form}>
      <div style={styles.formGroup}>
        <label>Nombre:</label>
        <input 
          type="text" 
          id="nombre_rol"
          name="nombre_rol"
          value={dataFormulario.nombre_rol} 
          onChange={handleOnChange} 
          style={styles.input} 
          required 
        />
      </div>
      <div style={styles.formGroup}>
        <label>Username:</label>
        <input 
          type="text" 
          id="id"
          name="id"
          value={dataFormulario.id} 
          onChange={handleOnChange} 
          style={styles.input} 
          required 
        />
      </div>
      
      <button type="submit" style={styles.submitButton}>Crear Rol</button>
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

export default CrearRol;
