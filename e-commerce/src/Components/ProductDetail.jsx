import React from 'react'
import { useParams } from 'react-router-dom'
import { items} from './Data'
import {useState,useEffect} from 'react'

const ProductDetail = () => {
    const {id} = useParams()

    const[product, setProduct]=useState({})

    useEffect(() => {
       const filterProduct = items.filter((product)=>product.id == id)
    //    console.log(filterProduct)
    setProduct(filterProduct[0])
    }, [id])
  return (
    <>
     <div className='container'>
        <div className='img'>
            <img src={product.imgsrc} alt=''/>
        </div>
        <div>
            <h1></h1>
        </div>
     </div>
    </>
  )
}

export default ProductDetail
