import axios from "../api/axios";

const progressStatus = async (orderID) => {
    try {
        const response = await axios.patch(`/order-list/update-status/${orderID}`)
        if (response.data) {
            console.log(response.status)
        }
    } catch (error) {
        console.log(error)
    }
}

const cancelOrders = async (orderID) => {
    try {
        const response = await axios.patch(`/cancel-order/${orderID}`)
        if (response.data) {
            console.log(response.status)
        }
    } catch (error) {
        console.log(error)
    }
}

export { progressStatus, cancelOrders }