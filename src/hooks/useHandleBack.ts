import {useNavigate} from 'react-router-dom';

export const useHandleBack = () => {
    const navigate = useNavigate();
    const handleBack = () => {
        if (window.history.length > 1) {
            navigate(-1);
        } else {
            navigate('/');
        }
    };
    return {handleBack};
};
