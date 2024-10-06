import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:8080/'
})

export const getRoles = async () => {
    try {
        const response = await api.get('/roles');  
        return response.data;
    } catch (error) {
        console.error('Error al cargar roles', error);
        throw error;
    }
};

export const UpdateRoles = async (id, rolData) => {
    try {
        const response = await api.put(`/roles/${id}/`, rolData);    //por verse , mi tutifruti aun no lo hace
        return response.data;
    } catch (error) {
        console.error('Error al actualizar el rol', error);
        throw error;
    }
}

export const getRoleName = async (rolename) => {
    try {
        const response = await api.get(`/roles/${rolename}/`);
        return response.data;
    } catch (error) {
        console.error('Error al obtener rol por ID', error);
        throw error;
    }
};

export const AddRoles = async (rolData) => {
    try {
        const response = await api.post('/roles/', rolData);
        return response.data;
    } catch (error) {
        console.error('Error al añadir nuevo rol', error);
        throw error;
    }
}

export const DeleteRole = async (id) => {
    try {
        const response = await api.delete(`/roles/${id}/`);
        return response.data;
    } catch (error) {
        console.error('No se pudo eliminar el rol', error);
        throw error;
    }
}

export default api;