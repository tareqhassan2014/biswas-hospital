import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TheLayout from './views/pages/TheLayout';

const theme = createTheme({
    palette: {
        primary: {
            main: '#74959A',
        },
        secondary: {
            main: '#495371',
        },
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <ToastContainer />
            <TheLayout />
        </ThemeProvider>
    );
}

export default App;
