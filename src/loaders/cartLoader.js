import { getShoppingCart } from "../utilities/fakedb";

const cartProductLoader = async ()=>{
    const loadData = await fetch('products.json');
    const products = await loadData.json();

    // if cart data is in database, you have to use async + await
    const storedCart = getShoppingCart();
    const savedCart = [];
    for(const id in storedCart){
        const savedProduct = products.find(product => product.id == id);
        if(savedProduct){
            const quantity = storedCart[id];
            savedProduct.quantity = quantity;
            savedCart.push(savedProduct);
        }
    }
    // If you need the return multiple thing in javascript, you must use array or object. 3 Example below
    // return [savedCart, products]
    // return {savedCart, products}
    return {cart: savedCart, products}
}
export default cartProductLoader;