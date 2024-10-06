import DefaultLayout from "../../layout/DefaultLayaout.js";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumbs.js";
import CrearPermiso from "../../components/Permisos/crearPermiso.js";
import ListaPermisos from "../../components/Permisos/listaPermisos";

const AñadirPermiso = () => {
    return (
        <DefaultLayout>
            <Breadcrumb pageName="Añadir Permiso" />

            <CrearPermiso />
            <Breadcrumb pageName="Lista de Permisos" />
            <ListaPermisos />
           
        </DefaultLayout>
    )
}

export default AñadirPermiso;