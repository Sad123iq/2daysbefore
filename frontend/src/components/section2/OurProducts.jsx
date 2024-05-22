import React, { useContext } from 'react'
import "./OurProducts.scss"
import Card from '../Card/Card';
import MainContext from '../../context/context';

const OurProducts = () => {
    
    const {data,setData} = useContext(MainContext)
  return (
    <div className='ourProducts'>
      <p></p>
      <h2>Our Products</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
        voluptatem laboriosam minima. Labore, ut voluptas aliquam temporibus sit
        dolorum voluptatum.
      </p>
      <div className="products">
        {
            data.map((item,index)=>(
                <Card key={index} item={item} />
            ))
        }
       
      </div>
    </div>
  );
}

export default OurProducts