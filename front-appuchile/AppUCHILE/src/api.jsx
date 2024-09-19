import axios from 'axios';

// Aca van los endpoints

const api = axios.create({
    baseURL: 'https://tu-backend-url.com/' // aca chanten la weaita po oe
})

// Inicio de seccion de api usuarios

export const getUsuarios = async () => {
    try {
        const response = await api.get('Usuario/api/usuarios');  //la ruta propuesta por su servidor big tulon sebastian 
        return response.data;
    } catch (error) {
        console.error('Error al cargar usuarios', error);
        throw error;
    }
};

export const UpdateUsuarios = async (id, userData) => {
    try {
        const response = await api.put(`Usuario/api/usuario/${id}/update/`, userData);
        return response.data;
    } catch (error) {
        console.error('Error al actualizar usuario', error);
        throw error;
    }
}

export const getUserPorID = async (id) => {
    try {
        const response = await api.get(`Usuario/api/usuario/${id}/`);
        return response.data;
    } catch (error) {
        console.error('Error al obtener usuario por ID', error);
        throw error;
    }
};

export const AddUsuarios = async (userData) => {
    try {
        const response = await api.post('Usuario/api/usuarios/', userData);
        return response.data;
    } catch (error) {
        console.error('Error al añadir usuario', error);
        throw error;
    }
}

export const DeleteUsuario = async (id) => {
    try {
        const response = await api.delete(`Usuario/api/usuario/${id}/delete/`);
        return response.data;
    } catch (error) {
        console.error('No se pudo eliminar usuario', error);
        throw error;
    }
}
// fin seccion api usuario

export default api;
