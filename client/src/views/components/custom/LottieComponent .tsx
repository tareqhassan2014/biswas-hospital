import Lottie from 'react-lottie';

const LottieComponent = ({
    animationData,
    height,
    width,
}: {
    animationData: any;
    height: number;
    width: number;
}) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return <Lottie options={defaultOptions} height={height} width={width} />;
};

export default LottieComponent;
