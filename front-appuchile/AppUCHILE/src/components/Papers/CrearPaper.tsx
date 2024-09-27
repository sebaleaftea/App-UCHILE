import { useState } from 'react';
import { AddPapers } from '../../Api/apiPapers';  // Cambia la importación para Papers

const CrearPaper = () => {
  const [dataFormulario, setdataFormulario] = useState({
    titulo: "",
    autor: "",
    publicado: false,
    categoria: "",
  });

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setdataFormulario({ ...dataFormulario, [name]: value });
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    try {
      const nuevoPaper = await AddPapers(dataFormulario);  // Llama la función para agregar Papers
      console.log('Paper Creado', nuevoPaper);
    } catch (error) {
      console.error('No se ha podido crear el nuevo paper');
    }
  };

  return (
    <form onSubmit={handleOnSubmit} style={styles.form}>
      <div style={styles.formGroup}>
        <label>Título:</label>
        <input 
          type="text" 
          id="titulo"
          name="titulo"
          value={dataFormulario.titulo} 
          onChange={handleOnChange} 
          style={styles.input} 
          required 
        />
      </div>
      <div style={styles.formGroup}>
        <label>Autor:</label>
        <input 
          type="text" 
          id="autor"
          name="autor"
          value={dataFormulario.autor} 
          onChange={handleOnChange} 
          style={styles.input} 
          required 
        />
      </div>
      <div style={styles.formGroup}>
        <label>Publicado:</label>
        <select
          id="publicado" 
          name="publicado"
          value={dataFormulario.publicado} 
          onChange={handleOnChange} 
          style={styles.select}
        >
          <option value={true}>Sí</option>
          <option value={false}>No</option>
        </select>
      </div>
      <div style={styles.formGroup}>
        <label>Categoría:</label>
        <input 
          type="text" 
          id="categoria"
          name="categoria"
          value={dataFormulario.categoria}
          onChange={handleOnChange} 
          style={styles.input} 
          required 
        />
      </div>
      <button type="submit" style={styles.submitButton}>Crear Paper</button>
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

export default CrearPaper;
