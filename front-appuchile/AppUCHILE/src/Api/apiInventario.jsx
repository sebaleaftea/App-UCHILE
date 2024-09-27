import axios from 'axios';

// Aca van los endpoints

const api = axios.create({
    baseURL: 'http://localhost:8080/' // aca chanten la weaita po oe
})

// Inicio de seccion de api usuarios

export const getInventarios= async () => {
    try {
        const response = await api.get('/inventario');  
        return response.data;
    } catch (error) {
        console.error('Error al cargar inventario', error);
        throw error;
    }
};

export const UpdateInventario = async (id, userData) => {
    try {
        const response = await api.put(`/inventario/${id}/`, userData);    //por verse , mi tutifruti aun no lo hace
        return response.data;
    } catch (error) {
        console.error('Error al actualizar inventario', error);
        throw error;
    }
}

export const getInventarioPorNombre = async (name) => {
    try {
        const response = await api.get(`/inventario/${name}/`);
        return response.data;
    } catch (error) {
        console.error('Error al obtener usuario por ID', error);
        throw error;
    }
};

export const AddInventario = async (userData) => {
    try {
        const response = await api.post('/inventario/', userData);
        return response.data;
    } catch (error) {
        console.error('Error al añadir item', error);
        throw error;
    }
}

export const DelInventario = async (id) => {
    try {
        const response = await api.delete(`/inventario/${id}/`);
        return response.data;
    } catch (error) {
        console.error('No se pudo eliminar item', error);
        throw error;
    }
}
// fin seccion api usuario

// Comienzo endpoints roles



export default api;
