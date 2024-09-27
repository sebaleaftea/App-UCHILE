import { useState } from 'react';
import {AddUsuarios} from '../../Api/apiUsuarios';

const CrearUsuario = () => {
  const [dataFormulario, setdataFormulario] = useState({
    nombre_usuario: "",
    username: "",
    contraseña: "",
    rol: "",
  });

  const handleOnChange = (event) => {
    const {name, value} = event.target;
    setdataFormulario({...dataFormulario, [name] : value });
  };

  const handleOnSubmit = async(event) => {
    event.preventDefault();
    try {
      const nuevoUsuario = await AddUsuarios(dataFormulario);
      console.log('Usuario Creado', nuevoUsuario)
    } catch(error){
      console.error('No se ha podido cargar el nuevo usuario')
    }
  }

  return (
    <form onSubmit={handleOnSubmit} style={styles.form}>
      <div style={styles.formGroup}>
        <label>Nombre:</label>
        <input 
          type="text" 
          id="nombre"
          name="nombre_usuario"
          value={dataFormulario.nombre_usuario} 
          onChange={handleOnChange} 
          style={styles.input} 
          required 
        />
      </div>
      <div style={styles.formGroup}>
        <label>Username:</label>
        <input 
          type="text" 
          id="username"
          name="username"
          value={dataFormulario.username} 
          onChange={handleOnChange} 
          style={styles.input} 
          required 
        />
      </div>
      <div style={styles.formGroup}>
        <label>Contraseña:</label>
        <input 
          type="text" 
          id="contraseña"
          name="contraseña"
          value={dataFormulario.contraseña}
          onChange={handleOnChange} 
          style={styles.input} 
          required 
        />
      </div>
      <div style={styles.formGroup}>
        <label>Rol:</label>
        <select
          id="rol" 
          name="rol"
          value={dataFormulario.rol} 
          onChange={handleOnChange} 
          style={styles.select}
        >
          <option value="Administrador">Administrador</option>
          <option value="Sub-Administrador">Sub-Administrador</option>
          <option value="Usuario">Usuario</option>
        </select>
      </div>
      <button type="submit" style={styles.submitButton}>Crear Usuario</button>
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

export default CrearUsuario;
