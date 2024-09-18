import React from 'react';
import DefaultLayout from '../layout/DefaultLayaout';
import PerfilUsuario from '../components/PerfilUsuario';

const Perfil: React.FC = () => {
  return (
    <DefaultLayout>
     <div>
       <PerfilUsuario />
     </div>
     </DefaultLayout>
  );
};

export default Perfil;
