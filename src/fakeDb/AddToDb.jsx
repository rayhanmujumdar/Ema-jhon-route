const addToDb = (id) => {
    let shoppinCart = {}
    const storeCart = localStorage.getItem('shopping-cart');
    if(storeCart){
        shoppinCart = JSON.parse(storeCart)
    }
    const quantity = shoppinCart[id]
    if(quantity){
        shoppinCart[id] = quantity + 1;
    }
    else{
        shoppinCart[id] = 1;
    }
    localStorage.setItem('shopping-cart',JSON.stringify(shoppinCart))
}

const getCartDb = () => {
    let shoppinCart = {}
    const storeCart = localStorage.getItem('shopping-cart');
    if(storeCart){
        shoppinCart = JSON.parse(storeCart)
    }
    return shoppinCart;
}
export { addToDb, getCartDb } 