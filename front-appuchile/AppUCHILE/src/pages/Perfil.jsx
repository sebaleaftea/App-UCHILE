import DefaultLayout from '../layout/DefaultLayaout';
import Breadcrumb from '../components/Breadcrumbs/Breadcrumbs';

const Perfil = () => {
    return (
        <DefaultLayout>
            <div className="mx-auto max-w-270">
                <Breadcrumb pageName="Perfil de Usuario" />

            </div>
        </DefaultLayout>
    )
}

export default Perfil;