import DefaultLayout from "../../layout/DefaultLayaout.js";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumbs.js";
import CrearItemInventario from "../../components/Inventario/CrearItem";

const AñadirItem = () => {
    return (
        <DefaultLayout>
            <Breadcrumb pageName="Añadir Item" />

            <CrearItemInventario />
        </DefaultLayout>
    )
}

export default AñadirItem;