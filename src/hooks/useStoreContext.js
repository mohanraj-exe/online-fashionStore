import { StoreContext } from "../context/StoreContext";
import { useContext } from "react";

export const useStoreContext = () =>{
    const context = useContext(StoreContext)

    if(!context){
        throw Error('useStoreContext must be used inside an StoreContext Provider')
    }
    return context
}