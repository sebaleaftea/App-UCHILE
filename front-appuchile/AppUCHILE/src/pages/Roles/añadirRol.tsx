import DefaultLayout from "../../layout/DefaultLayaout.js";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumbs.js";
import CrearRol from "../../components/crearRol.js";

const AñadirRol = () => {
    return (
        <DefaultLayout>
            <Breadcrumb pageName="Añadir Rol" />

            <CrearRol />
        </DefaultLayout>
    )
}

export default AñadirRol;