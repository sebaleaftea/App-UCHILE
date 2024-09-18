import React, { useState } from 'react';

const CrearUsuario: React.FC = () => {
  const [nombre, setNombre] = useState('');
  const [rut, setRut] = useState('');
  const [correo, setCorreo] = useState('');
  const [fono, setFono] = useState('');
  const [disponible, setDisponible] = useState(false);
  const [permisos, setPermisos] = useState('Usuario');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nuevoUsuario = {
      nombre,
      rut,
      correo,
      fono,
      disponible,
      permisos,
    };
    console.log(nuevoUsuario);
    setNombre('');
    setRut('');
    setCorreo('');
    setDisponible(false);
    setPermisos('Usuario');
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <div style={styles.formGroup}>
        <label>Nombre:</label>
        <input 
          type="text" 
          value={nombre} 
          onChange={(e) => setNombre(e.target.value)} 
          style={styles.input} 
          required 
        />
      </div>
      <div style={styles.formGroup}>
        <label>Rut:</label>
        <input 
          type="text" 
          value={rut} 
          onChange={(e) => setRut(e.target.value)} 
          style={styles.input} 
          required 
        />
      </div>
      <div style={styles.formGroup}>
        <label>Correo:</label>
        <input 
          type="email" 
          value={correo}
          onChange={(e) => setCorreo(e.target.value)} 
          style={styles.input} 
          required 
        />
      </div>
      <div style={styles.formGroup}>
        <label>Fono:</label>
        <input 
          type="number" 
          value={fono}
          onChange={(e) => setFono(e.target.value)} 
          style={styles.input} 
          required 
        />
      </div>
      <div style={styles.formGroup}>
        <label>Disponible:</label>
        <input 
          type="checkbox" 
          checked={disponible} 
          onChange={(e) => setDisponible(e.target.checked)} 
        />
      </div>
      <div style={styles.formGroup}>
        <label>Permisos:</label>
        <select 
          value={permisos} 
          onChange={(e) => setPermisos(e.target.value)} 
          style={styles.select}
        >
          <option value="Usuario">Usuario</option>
          <option value="Administrador">Administrador</option>
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
