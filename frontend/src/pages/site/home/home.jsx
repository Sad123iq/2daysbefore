
import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
import MainContext from '../../../context/context'
import ShopWithUs from '../../../components/section1/ShopWithUs'
import OurProducts from '../../../components/section2/OurProducts'
    
    const Home = () => {
        const {data,setdata} = useContext(MainContext)
        return (
        <>
                <Helmet>
                    <title>Home</title>
                </Helmet>
                <div>
                    <ShopWithUs/>
                    <OurProducts/>
                </div>
        </>
        )
    }
    
    export default Home
        