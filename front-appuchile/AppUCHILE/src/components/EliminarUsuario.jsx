import { useState } from 'react';
import { DeleteUsuario } from '../api';


const DelUsuario = ({id , onDelete}) => {
    
    const handleOnDelete = async() => {
        try{
            await DeleteUsuario(id);
            console.log('El usuario seleccionado ha sido eliminado');
            onDelete();
        } catch(error) {
            console.error('El usuario no pudo ser eliminado');
        }
    };
    return (
        <button
            onClick={handleOnDelete} 
            className="text-red-500 hover:text-red-700"
        >
            Eliminar
        </button>
    )
}

export default DelUsuario;