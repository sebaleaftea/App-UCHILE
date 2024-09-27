import React, { useState, useEffect } from 'react';
import { getPapers } from '../../Api/apiPapers';  // Cambia el nombre del archivo de la API
import DelPaper from '../../Api/apiPapers';  // Cambia también para la funcionalidad de eliminar
import { useNavigate, Link } from 'react-router-dom';

const PaperList = () => {
    const [papers, setPapers] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();  
  
    const fetchPapers = async () => {
      setLoading(true);
      try {
        const data = await getPapers();  // Llama a la función que obtiene los papers
        setPapers(data);
      } catch (error) {
        console.error('Error fetching papers:', error);
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      fetchPapers();
    }, []);
  
    const RefreshPage = async () => {
      await fetchPapers();
    };
  
    const handleCreatePaper = () => {
      navigate('/Papers/listaPapers/añadirPaper');  // Cambia la ruta para crear Paper
    };
  
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    return (
      <div className="p-6 bg-transparent shadow-md rounded-lg">
        <div className="flex justify-between items-center mb-4">
          {/* Botón para crear un nuevo paper */}
          <button
            onClick={handleCreatePaper}  // Llama a la función de redirección al hacer clic
            className="bg-green-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Crear Paper
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border-collapse border border-gray-300">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="w-1/4 px-4 py-2 border border-gray-300">Título</th>
                <th className="w-1/4 px-4 py-2 border border-gray-300">Autor</th>
                <th className="w-1/4 px-4 py-2 border border-gray-300">Publicado</th>
                <th className="w-1/4 px-4 py-2 border border-gray-300">Permisos</th>
                <th className="w-1/4 px-4 py-2 border border-gray-300">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {papers.map((paper) => (
                <tr key={paper.id} className="text-center">
                  <td className="px-4 py-2 border border-gray-300">{paper.titulo}</td>
                  <td className="px-4 py-2 border border-gray-300">Autor: {paper.autor}</td>
                  <td className="px-4 py-2 border border-gray-300">{paper.publicado ? 'Sí' : 'No'}</td>
                  <td className="px-4 py-2 border border-gray-300">{paper.permisos}</td>
                  <td className="px-4 py-2 border border-gray-300 flex justify-center gap-2">
                    <Link
                      to={`/Papers/editarPaper/${paper.id}`}
                      className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-3 rounded"
                    >
                      Editar
                    </Link>
                    <DelPaper
                      id={paper.id}
                      onDelete={RefreshPage}
                      className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded"
                    >
                      Eliminar
                    </DelPaper>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default PaperList;