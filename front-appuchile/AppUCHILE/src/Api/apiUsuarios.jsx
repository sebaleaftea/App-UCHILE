import axios from 'axios';

// Aca van los endpoints

const api = axios.create({
    baseURL: 'http://localhost:8080/' // aca chanten la weaita po oe
})

// Inicio de seccion de api usuarios

export const getUsuarios = async () => {
    try {
        const response = await api.get('/usuarios');  
        return response.data;
    } catch (error) {
        console.error('Error al cargar usuarios', error);
        throw error;
    }
};

export const UpdateUsuarios = async (id, userData) => {
    try {
        const response = await api.put(`/usuarios/${id}/`, userData);    //por verse , mi tutifruti aun no lo hace
        return response.data;
    } catch (error) {
        console.error('Error al actualizar usuario', error);
        throw error;
    }
}

export const getUserPorNombre = async (username) => {
    try {
        const response = await api.get(`/usuario/${username}/`);
        return response.data;
    } catch (error) {
        console.error('Error al obtener usuario por ID', error);
        throw error;
    }
};

export const AddUsuarios = async (userData) => {
    try {
        const response = await api.post('/usuarios/', userData);
        return response.data;
    } catch (error) {
        console.error('Error al añadir usuario', error);
        throw error;
    }
}

export const DeleteUsuario = async (id) => {
    try {
        const response = await api.delete(`/usuario/${id}/`);
        return response.data;
    } catch (error) {
        console.error('No se pudo eliminar usuario', error);
        throw error;
    }
}
// fin seccion api usuario

// Comienzo endpoints roles



export default api;
