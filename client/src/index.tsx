import { CssBaseline } from '@mui/material';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import { persistor, store } from './app/store';

ReactDOM.render(
    <BrowserRouter>
        <PersistGate loading={null} persistor={persistor}>
            <Provider store={store}>
                <CssBaseline />
                <App />
            </Provider>
        </PersistGate>
    </BrowserRouter>,
    document.getElementById('root')
);
