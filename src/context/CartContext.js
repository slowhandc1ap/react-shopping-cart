import { createContext, useContext,useReducer,useEffect} from "react" ;
import products from "../data/products" ;
import cartReducer from "../reducer/cartReducer"; 

//create context for storage data
const CartContext = createContext() ;

const initState = {
    products:products,
    total:0,
    amount:0
}
// main component
export const CartProvider=({children})=>{
    const[state,dispatch] = useReducer(cartReducer,initState)

    function formatMoney(money){
        return money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    function removeItem(id){
        console.log("Delete ID : ", id);
        dispatch({type:"REMOVE",payload:id})
    }
    function addQuantity(id) {
        console.log("Add Item ID : ",id);
        dispatch({type:"ADD",payload:id})
    }
    function subTractQuantity(id){
        console.log("Subtract ID : ", id);
        dispatch({type:"SUBTRACT",payload:id})
    }
    useEffect(()=>{
        console.log("cal!!");
        dispatch({type:"CALCURATE_TOTAL"})

    },[state.products])


    return(
        <CartContext.Provider value={{...state,formatMoney, removeItem,addQuantity, subTractQuantity}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart =()=> {

    //way to use context outsite  :>
    return useContext(CartContext)
}
