import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:8080/'
})

export const getPermisos = async () => {
    try {
        const response = await api.get('/permisos');  
        return response.data;
    } catch (error) {
        console.error('Error al cargar los permisos D: ', error);
        throw error;
    }
};

export const UpdatePermisos = async (id, permisoData) => {
    try {
        const response = await api.put(`/permisos/${id}/`, permisoData);    //por verse , mi tutifruti aun no lo hace
        return response.data;
    } catch (error) {
        console.error('Error al actualizar el permiso', error);
        throw error;
    }
}

export const getPermissionName = async (permissionName) => {
    try {
        const response = await api.get(`/permisos/${permissionName}/`);
        return response.data;
    } catch (error) {
        console.error('Error al obtener permiso por ID', error);
        throw error;
    }
};

export const AddPermisos = async (permisoData) => {
    try {
        const response = await api.post('/permisos/', permisoData);
        return response.data;
    } catch (error) {
        console.error('Error al añadir nuevo permiso', error);
        throw error;
    }
}

export const DeletePermisos = async (id) => {
    try {
        const response = await api.delete(`/permisos/${id}/`);
        return response.data;
    } catch (error) {
        console.error('No se pudo eliminar el permiso', error);
        throw error;
    }
}