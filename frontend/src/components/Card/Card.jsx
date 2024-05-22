import React, { useContext } from 'react'
import "./Cards.scss"
import MainContext from '../../context/context';
import { Link } from 'react-router-dom';

const Card = ({item}) => {
    const {data,basket,setBasket} = useContext(MainContext)
    function addToBasket(id) {
        const targetOfBasket = basket.find((x)=>x._id == id);
        if(targetOfBasket){
            targetOfBasket.count++;
            targetOfBasket.totalPrice += targetOfBasket.price
        } else {
            const targetOfDataBase = data.find((x) => x._id == id);
            basket.push(targetOfDataBase)
        }
        setBasket([...basket])
        console.log(basket)
    }

  return (
    <div className="card">
      <div className="cardImg">
        <img src={item.image} alt="" />
      </div>
      <div className="cardBody">
        <h3>{item.title} </h3>
        <div className="rating">
          <div>
            <i class="fa-solid fa-star"></i> <span>5</span>
          </div>
          <div>
            <i class="fa-solid fa-heart"></i> <span>17</span>
          </div>
        </div>
        <p>{item.desc}</p>
      </div>
      <div className="cardBtns">
        <button onClick={()=>{
            addToBasket(item._id)
        }}>Add To Cart</button>
        <Link to={`detail/${item._id}`}>View</Link>
      </div>
      <div className="cardPrice">
        <p>Price: {item.price} $</p>
      </div>
    </div>
  );
}

export default Card