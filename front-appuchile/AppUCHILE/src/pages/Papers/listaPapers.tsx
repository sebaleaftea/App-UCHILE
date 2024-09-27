import Breadcrumb from "../../components/Breadcrumbs/Breadcrumbs";
import DefaultLayout from "../../layout/DefaultLayaout";
import PaperList from "../../components/Papers/ListaPapers";

const ListaPapers = () => {
    return(
        <DefaultLayout>
            <Breadcrumb pageName="Lista de Papers" />

            <PaperList />
        </DefaultLayout>
    );
};

export default ListaPapers;