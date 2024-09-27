import axios from 'axios';

// Aca van los endpoints

const api = axios.create({
    baseURL: 'http://localhost:8080/' // aca chanten la weaita po oe
})

// Inicio de seccion de api usuarios

export const getEquipos = async () => {
    try {
        const response = await api.get('/equipos');  
        return response.data;
    } catch (error) {
        console.error('Error al cargar usuarios', error);
        throw error;
    }
};

export const UpdateEquipos = async (id, userData) => {
    try {
        const response = await api.put(`/equipos/${id}/`, userData);    //por verse , mi tutifruti aun no lo hace
        return response.data;
    } catch (error) {
        console.error('Error al actualizar usuario', error);
        throw error;
    }
}

export const getEquiporPorNombre = async (equipname) => {
    try {
        const response = await api.get(`/equipos/${equipname}/`);
        return response.data;
    } catch (error) {
        console.error('Error al obtener usuario por ID', error);
        throw error;
    }
};

export const AddEquipos = async (userData) => {
    try {
        const response = await api.post('/equipos/', userData);
        return response.data;
    } catch (error) {
        console.error('Error al añadir usuario', error);
        throw error;
    }
}

export const DelEquipo= async (id) => {
    try {
        const response = await api.delete(`/equipo/${id}/`);
        return response.data;
    } catch (error) {
        console.error('No se pudo eliminar equipo', error);
        throw error;
    }
}
// fin seccion api usuario

// Comienzo endpoints roles



export default api;
