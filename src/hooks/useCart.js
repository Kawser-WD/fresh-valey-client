import { useEffect, useState } from "react"
import { getStoredCart } from "../utilities/fakedb";

const useCart = () => {
    const [cart, setCart] = useState([]);

    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('https://young-ridge-26718.herokuapp.com/allProduct')
        .then(res => res.json())
        .then(data =>{ 
            setProducts(data)
        })
        
    },[])


    useEffect(()=>{
        
        if(products.length){
            const savedCart = getStoredCart();
            const storedCart = []
            for (const id in savedCart){
                const addedProduct = products.find(pd => pd._id === id);
                if(addedProduct){
                const quantity = savedCart[id];
                addedProduct.quantity = quantity;
                storedCart.push(addedProduct)
            }
            }
            setCart(storedCart)
        }
  
    },[products])

    return [cart, setCart]
}

export default useCart;