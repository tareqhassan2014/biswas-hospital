import Box from '@mui/material/Box';
import loading from '../../../assets/lottieJson/loading.json';
import LottieComponent from './LottieComponent ';

const LoadingComponent = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                width: '100vw',
            }}
        >
            <LottieComponent animationData={loading} height={400} width={600} />
        </Box>
    );
};

export default LoadingComponent;
