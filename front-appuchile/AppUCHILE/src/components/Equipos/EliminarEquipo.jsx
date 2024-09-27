import  useState  from 'react';
import { DeleteEquipo } from '../../Api/apiEquipos';


const DelEquipo = ({id , onDelete}) => {
    
    const handleOnDelete = async() => {
        try{
            await DeleteEquipo(id);
            console.log('El equipo seleccionado ha sido eliminado');
            onDelete();
        } catch(error) {
            console.error('El equipo no pudo ser eliminado');
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

export default DelEquipo;