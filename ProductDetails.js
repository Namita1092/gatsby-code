import { useState, useEffect } from 'react';
import React from 'react';
import {useRouter} from "@gatsbyjs/reach-router";

export default function ProductDetails() {

    const [showProduct, setProduct] = useState([]);
    const router = useRouter();
    const { id } = router.query;
 

    useEffect(() => {
        showDetails();
    }, []);

    const showDetails = async () => {
        await fetch(`https://fakestoreapi.com/products/${id}`)
        .then(response => response.json())
        .then(response => setProduct(response))
        .catch(err => console.error(err));
    }

    return (
        <>
            <div className='Product-Page' >
                <div className='Product-Image'>
                    <img src={showProduct?.image} />
                </div>
                <div className='Product-Wrap'>
                    <div className='Product-Title'>
                        <span>{showProduct?.id}</span>
                        <h1>{showProduct?.title}</h1>
                        <div className='Product-Rating'>{showProduct?.rating?.rate} stars</div>
                        <div className='Product-Description'><h2>About This Item:</h2><p>{showProduct?.description}.</p></div>
                    </div>
                    <div className='Cart-Wrap'>
                        <h3 className='Product-Price'>${showProduct?.price}</h3>
                        <a className='Cart'>Add to Cart</a>
                    </div>
                </div>
            </div>
        </>
    )
}
