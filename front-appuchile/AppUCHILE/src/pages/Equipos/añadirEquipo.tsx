import DefaultLayout from "../../layout/DefaultLayaout.js";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumbs.js";
import CrearEquipo from "../../components/Equipos/CrearEquipo";

const AñadirEquipo = () => {
    return (
        <DefaultLayout>
            <Breadcrumb pageName="Añadir Equipo" />

            <CrearEquipo />
        </DefaultLayout>
    )
}

export default AñadirEquipo;