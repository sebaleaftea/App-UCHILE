import  useState  from 'react';
import { DeletePaper } from '../../Api/apiPapers';

const DeletePaper = ({id , onDelete}) => {
    
    const handleOnDelete = async() => {
        try{
            await DeletePaper(id);
            console.log('El paper seleccionado ha sido eliminado');
            onDelete();
        } catch(error) {
            console.error('El paper no pudo ser eliminado');
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

export default DeletePaper;