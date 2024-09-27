import  useState  from 'react';
import { DelInventario } from '../../Api/apiInventario';

const DelInventario = ({id , onDelete}) => {
    
    const handleOnDelete = async() => {
        try{
            await DeleteInventario(id);
            console.log('El item seleccionado ha sido eliminado');
            onDelete();
        } catch(error) {
            console.error('El item no pudo ser eliminado');
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

export default DelInventario;