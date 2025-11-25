import { toast } from 'react-toastify';

export function ToastAlerta(mensagem: string, tipo: string) {
    const configBase = {
        position: 'top-right' as const,
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        style: {
            background: 'white',
            color: '#333',
            borderRadius: '16px',
            border: '3px solid #000',
            boxShadow: '4px 4px 0px rgba(0, 0, 0, 1)',
            fontWeight: '600',
            fontSize: '15px',
            fontFamily: 'system-ui, -apple-system, sans-serif',
        },
        progressStyle: {
            background: '#FF69B4',
        },
        closeButton: true,
    };

    switch (tipo) {
        case 'sucesso':
            toast.success(mensagem, {
                ...configBase,
                icon: '💕',
                progressStyle: {
                    background: 'linear-gradient(90deg, #FF69B4 0%, #FFB6C1 100%)',
                },
                style: {
                    ...configBase.style,
                    borderColor: '#90EE90',
                },
            });
            break;

        case 'erro':
            toast.error(mensagem, {
                ...configBase,
                icon: '💔',
                progressStyle: {
                    background: 'linear-gradient(90deg, #FF69B4 0%, #FF1493 100%)',
                },
                style: {
                    ...configBase.style,
                    borderColor: '#FF69B4',
                },
            });
            break;

        case 'info':
        default:
            toast.info(mensagem, {
                ...configBase,
                icon: '💌',
                progressStyle: {
                    background: 'linear-gradient(90deg, #B4A7D6 0%, #D4C5F9 100%)',
                },
                style: {
                    ...configBase.style,
                    borderColor: '#B4A7D6',
                },
            });
            break;
    }
}