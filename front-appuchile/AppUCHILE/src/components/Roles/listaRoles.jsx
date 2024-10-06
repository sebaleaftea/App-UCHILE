import React, { useState, useEffect } from "react";
import { DeleteRole, getRoles } from "../../Api/apiRoles";

const ListaRoles = () =>{
    const[roles,setRoles] = useState([]);
    const[loading, setLoading] = useState(true);

    const fetchRoles = async() => {
        setLoading(true);
        try {
            const data = await getRoles();
            setRoles(data);           
        } catch (error){
            console.error('Error fetching Roles:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRoles();
    }, []);

    const RefreshPage = async() => {
        await fetchRoles();
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="p-6 bg-transparent shadow-md rounded-lg">
          <div className="flex justify-between items-center mb-4">
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border-collapse border border-gray-300">
              <thead>
                <tr className="bg-blue-500 text-white">
                  <th className="w-1/4 px-4 py-2 border border-gray-300">Nombre</th>
                  <th className="w-1/4 px-4 py-2 border border-gray-300">Descripcion</th>
                  <th className="w-1/4 px-4 py-2 border border-gray-300">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {roles.map((roles) => (
                  <tr key={rol.id} className="text-center">
                    <td className="px-4 py-2 border border-gray-300">{rol.nombre}</td>
                    <td className="px-4 py-2 border border-gray-300">{rol.descripcion}</td>
                    <td className="px-4 py-2 border border-gray-300 flex justify-center gap-2">
                      <Link
                        to={`/crearRol/editarRol/${rol.id}`}
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-3 rounded"
                      >
                        Editar
                      </Link>
                      <DeleteRole
                        id={rol.id}
                        onDelete={RefreshPage}
                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded"
                      >
                        Eliminar
                      </DeleteRole>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
    );
};

export default ListaRoles;