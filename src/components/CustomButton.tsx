
import state from '@/store';
import {useSnapshot} from 'valtio'

type CustomButtonProps = {
    type: 'filled' | 'outlined';
    //accepts a string for the type prop
    title: string;
    //accepts a string for the title prop
    onClick?: () => void;
    //optional click handler
    children? : React.ReactNode;
    //optional button conent
    customStyle?: string;
    //optional custom tailwind styles
}


const generateStyle = (type: 'filled' | 'outlined') => {

    const snap = useSnapshot(state)

    if (type === 'filled') {
        return {
            backgroundColor: snap.color,
            color: '#fff',
            padding: '0.5rem 1rem',
            borderRadius: '0.25rem',
        }
    } else if (type === 'outlined') {
        return {
            backgroundColor: 'transparent',
            color: '#000',
            padding: '0.5rem 1rem',
            borderRadius: '0.25rem',
        }
    }
    return {}
}

const CustomButton: React.FC<CustomButtonProps> = ({type, title, onClick, customStyle = '', children}) => {

    return (
        <button style={generateStyle(type)} className={`rounded ${customStyle}`} onClick={onClick} title={title}>
            {children || title}
        </button>
    )
}

export default CustomButton