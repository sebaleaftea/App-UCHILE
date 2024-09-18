import React from 'react';

const styles = {
  container: {
    maxWidth: '800px',
    margin: '50px auto',
    padding: '30px',
    backgroundColor: '#fff',
    boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
  },
  h2: {
    color: '#0d47a1',
    fontSize: '24px',
    marginTop: '0',
  },
  h3: {
    color: '#0d47a1',
    fontSize: '20px',
    fontWeight: 'bold',
  },
  historySection: {
    maxWidth: '800px',
    margin: '50px auto',
    padding: '30px',
    backgroundColor: '#fff',
    boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
  },
};

const PerfilUsuario: React.FC = () => {
  return (
    <>
      {/* Perfil de usuario */}
      <div style={styles.container}>
        <h2 style={styles.h2}>Perfil de Usuario</h2>
        <ul>
          <li><strong>Nombre:</strong> Usuario</li>
          <li><strong>Rut:</strong> 12.345.678-9</li>
          <li><strong>Correo Electrónico:</strong> Usuario1@example.com</li>
          <li><strong>Teléfono:</strong> +56 9 1234 5678</li>
          <li><strong>Dirección:</strong> Región/Comuna/Calle</li>
        </ul>
        <div className="info">
          <h2 style={styles.h2}>Permisos</h2>
          <ul>
            <li><strong>Permisos de Usuario:</strong> Descripción del Usuario1</li>
          </ul>
        </div>
      </div>

      {/* Proyectos y Papers recientes */}
      <div style={styles.historySection}>
        <h3 style={styles.h3}>Proyectos/Papers recientes</h3>
        <ul>
          <li><strong>Proyecto/Papers 1:</strong> Descripción del proyecto 1</li>
          <li><strong>Proyecto/Papers 2:</strong> Descripción del proyecto 2</li>
        </ul>
      </div>

      {/* Equipos utilizados recientemente */}
      <div style={styles.historySection}>
        <h3 style={styles.h3}>Equipos utilizados recientemente</h3>
        <ul>
          <li><strong>Laboratorio 13:</strong> Descripción del equipo 1</li>
          <li><strong>Equipo de reactivos: 4:</strong> Descripción del equipo 2</li>
        </ul>
      </div>
    </>
  );
};

export default PerfilUsuario;
