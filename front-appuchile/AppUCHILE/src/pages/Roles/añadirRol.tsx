import DefaultLayout from "../../layout/DefaultLayaout.js";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumbs.js";
import CrearRol from "../../components/Roles/crearRol.js";
import ListaRoles from "../../components/Roles/listaRoles";

const AñadirRol = () => {
    return (
        <DefaultLayout>
            <Breadcrumb pageName="Añadir Rol" />

            <CrearRol />

            <Breadcrumb pageName="Lista de roles" />

            <ListaRoles />
        </DefaultLayout>
    )
}

export default AñadirRol;