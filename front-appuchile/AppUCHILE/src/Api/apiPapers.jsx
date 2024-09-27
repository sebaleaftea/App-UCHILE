import axios from 'axios';

// Aca van los endpoints

const api = axios.create({
    baseURL: 'http://localhost:8080/' // aca chanten la weaita po oe
})

// Inicio de seccion de api paper

export const getPapers = async () => {
    try {
        const response = await api.get('/papers');  
        return response.data;
    } catch (error) {
        console.error('Error al cargar papers', error);
        throw error;
    }
};

export const UpdatePapers = async (id, userData) => {
    try {
        const response = await api.put(`/papers/${id}/`, userData);    //por verse , mi tutifruti aun no lo hace
        return response.data;
    } catch (error) {
        console.error('Error al actualizar paper', error);
        throw error;
    }
}

export const getPaperPorTitulo = async (titulo) => {
    try {
        const response = await api.get(`/paper/${titulo}/`);
        return response.data;
    } catch (error) {
        console.error('Error al obtener paper por ID', error);
        throw error;
    }
};

export const AddPapers = async (userData) => {
    try {
        const response = await api.post('/papers/', userData);
        return response.data;
    } catch (error) {
        console.error('Error al añadir papers', error);
        throw error;
    }
}

export const DeletePaper = async (id) => {
    try {
        const response = await api.delete(`/paper/${id}/`);
        return response.data;
    } catch (error) {
        console.error('No se pudo eliminar paper', error);
        throw error;
    }
}
// fin seccion api paper

export default api;
