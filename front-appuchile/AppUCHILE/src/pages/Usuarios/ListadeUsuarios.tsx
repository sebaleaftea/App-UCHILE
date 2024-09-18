import Breadcrumb from '../../components/Breadcrumbs/Breadcrumbs';
import DefaultLayout from '../../layout/DefaultLayaout';
import ListaUsuarios from '../../components/ListaUsuarios';

const UserList = () => {
    return (
        <DefaultLayout>
            <Breadcrumb pageName='Lista de Usuarios' />

            <ListaUsuarios />
        </DefaultLayout>
    );
};

export default UserList;