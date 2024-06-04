import "./Item.css"
import { useCart } from "../context/CartContext";

export default function Item(props) {
  const { id, name, price, image, quantity } = props;
  const {formatMoney,removeItem,addQuantity,subTractQuantity} = useCart() ;

  return (
    <div className="card">
      <img src={image} alt="id" />
      <div className="product">
        <p className="name">Name : {name} </p>
        <p>price : {formatMoney(price)} ฿</p>
      </div>
      <div className="quantity">
            <button onClick={()=>addQuantity(id)}>+</button>
            <input type="text" value={quantity} disabled/>
            <button onClick={()=> subTractQuantity(id)}>-</button>
      </div>
      <div className="total-price">{formatMoney(quantity*price)}</div>
      <button onClick={()=>removeItem(id)}>Delete Order</button>
    </div>
  );
}
