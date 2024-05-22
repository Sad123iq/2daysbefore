import React, { useContext } from 'react'
import MainContext from '../../../context/context'
import { useParams } from 'react-router'
import "./DetailPage.scss"

const DetailPage = () => {
    const {id} = useParams()
    const {data} =  useContext(MainContext)
    const target = data.find((x)=>x._id == id)
  return (
    <div className="detailPage">
      <div className="cardDetail">
        <img src={target.image} alt="" />
        <div className="cardDetailBody">
          <h2>{target.title} </h2>
          <p>{target.desc} </p>
          <p>Price {target.price} $</p>
        </div>
      </div>
    </div>
  );
}

export default DetailPage