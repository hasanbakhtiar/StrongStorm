import React from 'react'
import data from './data'
import ProductItem from './ProductItem'

const Products = () => {
    return (
        <div>
            <h1 className='text-center'>All Products</h1>
            <section className='py-4 container'>
                <div className="row">
                    {data.productData.map((item,index)=>{
                        return(
                            <ProductItem 
                            img={item.img}
                            title={item.title}
                            desc={item.desc}
                            price={item.price}
                            item={item}
                            key={index}
                            />
                        )
                    })}
                </div>
            </section>
        </div>
    )
}

export default Products
