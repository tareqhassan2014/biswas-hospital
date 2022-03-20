import { useLocation } from 'react-router-dom';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import Main from '../components/common/Main';

const TheLayout = () => {
    const ShowDashboard = !useLocation().pathname.includes('/dashboard');

    return (
        <>
            {ShowDashboard && <Header />}
            <Main />
            {ShowDashboard && <Footer />}
        </>
    );
};

export default TheLayout;
