import "./Header.css"
import { useCart } from "../context/CartContext"
export default function Header() {
    const {amount} = useCart() 
    return(
        <header>
            <p>Shopping Cart</p>
            <p>สินค้าในตระกล้า : {amount}</p>
        </header>
    )
}