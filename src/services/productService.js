import axios from "../api/axios"

const allproductService = async (setMenu) => {
    let products = []

    try {
        const response = await axios.get("/products/get-all-products")
        if (response.data) {
            response.data.map(item => {
                products.push(item)
            })
            setMenu(products);
        }
    } catch (error) {
        console.log(error)
    }
}

const productDetails = async (productID, setProduct) => {
    try {
        const response = await axios.get(`/products/search-product/${productID}`)
        if (response.data) {
            setProduct(response.data);
        }
    } catch (error) {
        console.log(error)
    }
}

const productsAvailable = async (officeID, setMenu) => {
    let products = []

    try {
        const response = await axios.get(`/products/office-inventory/${officeID}`)
        if (response.data) {
            response.data.map(item => {
                products.push(item)
            })
            setMenu(products);
        }
    } catch (error) {
        console.log(error)
    }
}

export {allproductService, productDetails, productsAvailable};