import {useState, useEffect} from 'react';
import { ToastContainer, toast } from 'react-toastify';

function ButtonFavorite(props) {

    const {id} = props;
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect( () => {
        let favorites = localStorage.getItem('favorites');  

        if (favorites) {
            favorites = JSON.parse(favorites);
            if (favorites.includes(id)) {
                setIsFavorite(true);
            }
        }

    }, [])

    const handleClick = () => {
        if (!id) return;

        let favorites = localStorage.getItem('favorites');
        favorites = favorites ? JSON.parse(favorites) : [];

        if (isFavorite) {
            if (favorites) { 
                favorites = favorites.filter( item => item !== id);
                localStorage.setItem('favorites', JSON.stringify(favorites));
            }
            setIsFavorite(false);
            toast("desfavoritado com sucesso!", { type: "success" });
        } else {
            localStorage.setItem('favorites', JSON.stringify([...favorites, id]));
            setIsFavorite(true);
            toast("favoritado com sucesso!", { type: "success" });
        }  
    }

    return (
        <>
            <button className="btnFavorite" onClick={handleClick}>{isFavorite ? 'Desfavoritar' : 'Favoritar'}</button>
            <ToastContainer />
        </>
    );
}

export default ButtonFavorite;