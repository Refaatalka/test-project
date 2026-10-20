import Cookies from 'js-cookie';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import PathConstants from '../../routes/pathConstants';
import environment from '../../environment';

const PrivateRoutes = () => {
    const location = useLocation();
    const isAuthorized = Cookies.get(environment.TOKEN_KEY);

    return isAuthorized ? (
        <Outlet />
    ) : (
        <Navigate
            to={PathConstants.LOGIN}
            state={{ from: location }}
            replace
        />
    );
};

export default PrivateRoutes;