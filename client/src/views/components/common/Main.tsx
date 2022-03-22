import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAuth } from '../../../Hooks/useAuth';
import { openRoutes, protectedRoutes } from '../../../routes/routes';
import PrivateRoute from '../../../utilities/PrivateRoute';
import LoadingComponent from '../custom/LoadingComponent ';

const Main = () => {
    const { user } = useAuth();

    const filteredRouters = protectedRoutes.filter((router) =>
        router.role.includes(user.role || 'user')
    );

    return (
        <Suspense fallback={<LoadingComponent />}>
            <Routes>
                {openRoutes.map((route, idx) => {
                    return (
                        route.element && (
                            <Route
                                key={idx}
                                path={route.path}
                                element={<route.element />}
                            />
                        )
                    );
                })}
                {filteredRouters.map((route, idx) => {
                    return (
                        route.element && (
                            <Route
                                path="/*"
                                key={idx}
                                element={<PrivateRoute />}
                            >
                                <Route
                                    path={route.path}
                                    element={<route.element />}
                                />
                            </Route>
                        )
                    );
                })}
            </Routes>
        </Suspense>
    );
};

export default Main;
