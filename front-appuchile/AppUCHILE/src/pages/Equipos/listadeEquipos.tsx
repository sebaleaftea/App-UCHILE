import Breadcrumb from '../../components/Breadcrumbs/Breadcrumbs';
import DefaultLayout from '../../layout/DefaultLayaout';
import EquipoList from '../../components/Equipos/ListaEquipos';

const ListadeEquipos = () => {
    return (
        <DefaultLayout>
            <Breadcrumb pageName='Lista de Equipos' />

            <EquipoList />
        </DefaultLayout>
    );
};

export default ListadeEquipos;