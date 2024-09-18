// Login.tsx
import React, { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; 

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

// Credenciales correctas
  const correctUsername = 'admin';
  const correctPassword = 'password123';

// 

  const styles = {
    wrapper: {
      margin: 0,
      padding: 0,
      boxSizing: 'border-box' as const,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/3/32/Laboratorio_Qu%C3%ADmica_Anal%C3%ADtica_UCH.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    },
    form: {
      display: 'flex',
      flexDirection: 'column' as const,
      background: '#fff',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    },
    h1: {
      fontFamily: 'Poppins, sans-serif',
      color: '#333',
      marginBottom: '20px',
    },
    inputBox: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '20px',
    },
    input: {
      fontFamily: 'Poppins, sans-serif',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      flex: 1,
      marginRight: '10px',
    },
    icon: {
      color: '#333',
    },
    button: {
      padding: '10px',
      border: 'none',
      borderRadius: '4px',
      background: '#333',
      color: '#fff',
      fontFamily: 'Poppins, sans-serif',
      cursor: 'pointer',
    },
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Verifica las credenciales correctas
    if (username === correctUsername && password === correctPassword) {
      navigate('/calendar');  // Redirige a la página del calendario si las credenciales son correctas
    } else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <div style={styles.wrapper}>
      <form style={styles.form} onSubmit={handleLogin}>
        <h1 style={styles.h1}>Bienvenido al Admin</h1>
        <div style={styles.inputBox}>
          <input
            style={styles.input}
            type="text"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <FaUser style={styles.icon} />
        </div>
        <div style={styles.inputBox}>
          <input
            style={styles.input}
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <FaLock style={styles.icon} />
        </div>
        <button style={styles.button} type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
