import { useState } from 'react';
import { AddInventario } from '../../Api/apiInventario';  // Cambia la API a la de Inventario

const CrearItemInventario = () => {
  const [dataFormulario, setDataFormulario] = useState({
    nombre: "",
    cantidad: "",
    precio: "",
    categoria: "",
    descripcion: "",
  });

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setDataFormulario({ ...dataFormulario, [name]: value });
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    try {
      const nuevoItem = await AddInventario(dataFormulario);
      console.log('Item Creado', nuevoItem);
    } catch (error) {
      console.error('No se ha podido crear el nuevo ítem');
    }
  };

  return (
    <form onSubmit={handleOnSubmit} style={styles.form}>
      <div style={styles.formGroup}>
        <label>Nombre del Ítem:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={dataFormulario.nombre}
          onChange={handleOnChange}
          style={styles.input}
          required
        />
      </div>
      <div style={styles.formGroup}>
        <label>Cantidad:</label>
        <input
          type="number"
          id="cantidad"
          name="cantidad"
          value={dataFormulario.cantidad}
          onChange={handleOnChange}
          style={styles.input}
          required
        />
      </div>
      <div style={styles.formGroup}>
        <label>Precio:</label>
        <input
          type="number"
          id="precio"
          name="precio"
          value={dataFormulario.precio}
          onChange={handleOnChange}
          style={styles.input}
          required
        />
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
      <div style={styles.formGroup}>
        <label>Descripción:</label>
        <textarea
          id="descripcion"
          name="descripcion"
          value={dataFormulario.descripcion}
          onChange={handleOnChange}
          style={styles.textarea}
        />
      </div>
      <button type="submit" style={styles.submitButton}>Crear Ítem</button>
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
      flexDirection: 'column' 
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

export default CrearItemInventario;
