import { useState, useEffect } from 'react';
import React from 'react';
import Link from "gatsby-link";

export default function Home() {
  const [addData, setData] = useState([]);
  
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=10")
      .then(response => response.json())
      .then(data => setData(data))
  }, []);

  return (
    <>
      {addData.map((el,index) => {
        return (
          <div className='Main-Container' key={index}>
            <div className="Image"> <img src={el.image} />
            </div>
              <div className='Wrap'>
                <div className='Title'>{el.title}
                </div>
              <span className='Price'>${el.price}</span>
              <div className='Card-Detail'>
              <Link to={"/Product"} as={`/product?id=${el.id}`}><span>View Product</span></Link>
              </div>
            </div>
          </div>
        )
      })
      }
    </>
  )
  
}
