import DefaultLayout from "../../layout/DefaultLayaout.js";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumbs.js";
import CrearPermiso from "../../components/crearPermiso.js";

const AñadirPermiso = () => {
    return (
        <DefaultLayout>
            <Breadcrumb pageName="Añadir Permiso" />

            <CrearPermiso />
        </DefaultLayout>
    )
}

export default AñadirPermiso;