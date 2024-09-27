import DefaultLayout from "../../layout/DefaultLayaout";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumbs";
import CrearPaper from "../../components/Papers/CrearPaper";

const AñadirPaper = () => {
    return (
        <DefaultLayout>
            <Breadcrumb pageName="Añadir Paper" />

            <CrearPaper />
        </DefaultLayout>
    )
}

export default AñadirPaper;