import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { link } from 'react-router-dom';

const TablaUsuarios: React.FC = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const fetchusuarios = async () => {
        setLoading(true);
        try {
            const data = await getUsuarios();
            setUsuarios(data);            
        } catch (error) {
            console.error('Error al cargar clientes:', error)
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchusuarios();
    }, []);

    const RefreshPage = async () => {
        await fetchusuarios(); 
      };

    const handleCrearUsuario = () => {
        navigate('añadirusuario');
    };

    if (loading) {
        return <div>Loading...</div>
    }

  return (
    <div className="content" style={styles.content}>
      <button onClick={handleCrearUsuario} style={styles.createUserButton}>Crear Usuario</button>
      <div className="table-container" style={styles.tableContainer}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Nombre</th>
              <th style={styles.th}>Rut</th>
              <th style={styles.th}>Disponible</th>
              <th style={styles.th}>Permisos</th>
              <th style={styles.th}>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Daniel</td>
              <td style={styles.td}>12.345.678-9</td>
              <td style={styles.td}>Activo</td>
              <td style={styles.td}>Administrador</td>
              <td style={styles.td}>
                <div style={styles.actionButtons}>
                  <button style={styles.createButton}>EDITAR</button>
                  <button style={styles.deleteButton}>ELIMINAR</button>
                </div>
              </td>
            </tr>
            {/* Repite esto para otros usuarios */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const styles = {
  content: {
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '10px',
    marginTop: '20px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  createUserButton: {
    backgroundColor: '#3b73e0',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  tableContainer: {
    marginTop: '20px',
    overflowX: 'auto',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse' as const,
    textAlign: 'left' as const,
    border: '1px solid #ddd', // Añadir borde para visibilidad
  },
  th: {
    padding: '12px',
    backgroundColor: '#f8f8f8',
    borderBottom: '1px solid #ddd',
    textAlign: 'center' as const, // Centramos el contenido
    fontWeight: 'bold' as const,
  },
  td: {
    padding: '12px',
    borderBottom: '1px solid #ddd',
    textAlign: 'center' as const, // Centramos el contenido
  },
  actionButtons: {
    display: 'flex',
    justifyContent: 'center', // Centramos los botones
    gap: '10px',
  },
  createButton: {
    backgroundColor: '#28a745',
    color: 'white',
    padding: '5px 10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  deleteButton: {
    backgroundColor: '#dc3545',
    color: 'white',
    padding: '5px 10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default TablaUsuarios;
