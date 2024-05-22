import React, { useContext } from 'react'
import MainContext from '../../../context/context'

const Basket = () => {
    const {basket} = useContext(MainContext);
  return (
    <div className="basket">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">TITLE</th>
            <th scope="col">IMG</th>
            <th scope="col">PRICE</th>
            <th scope="col">COUNT</th>
            <th scope="col">TOTAL</th>
          </tr>
        </thead>
        <tbody>
          {basket.map((item, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{item.title}</td>
              <td>
                <img src={item.image} width="60px" alt="" />
              </td>
              <td>{item.price}</td>
              <td>{item.count}</td>
              <td>{item.totalPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Basket