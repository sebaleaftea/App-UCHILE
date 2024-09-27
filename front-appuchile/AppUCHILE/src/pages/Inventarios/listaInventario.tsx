import Breadcrumb from '../../components/Breadcrumbs/Breadcrumbs';
import DefaultLayout from '../../layout/DefaultLayaout';
import InventarioList from '../../components/Inventario/ListaInventario';

const ListadeInventario = () => {
    return (
        <DefaultLayout>
            <Breadcrumb pageName='Lista de Inventario' />

            <InventarioList />
        </DefaultLayout>
    );
};

export default ListadeInventario;