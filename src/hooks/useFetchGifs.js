import { useEffect, useState } from "react"
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {               //De este modo hacemos que la funcion getGifs() se renderice una sola vez
        getGifs(category).then(imgs => {
            setState({
                data: imgs,
                loading: false
            })
        });
    }, [category])                  //Dependencia

    return state;
}