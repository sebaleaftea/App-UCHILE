import DefaultLayout from "../../layout/DefaultLayaout.js";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumbs.js";
import CrearUsuario from "../../components/usuarios/CrearUsuario.js";

const Añadirusuario = () => {
    return (
        <DefaultLayout>
            <Breadcrumb pageName="Añadir Usuario" />

            <CrearUsuario />
        </DefaultLayout>
    )
}

export default Añadirusuario;