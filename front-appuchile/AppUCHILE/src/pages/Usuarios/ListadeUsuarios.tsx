import Breadcrumb from '../../components/Breadcrumbs/Breadcrumbs';
import DefaultLayout from '../../layout/DefaultLayaout';
import UserList from '../../components/usuarios/ListaUsuarios';

const ListadeUsuarios = () => {
    return (
        <DefaultLayout>
            <Breadcrumb pageName='Lista de Usuarios' />

            <UserList />
        </DefaultLayout>
    );
};

export default ListadeUsuarios;