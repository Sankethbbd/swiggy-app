import axios from "../api/axios";

const detailsForBarista = async (officeID, orderStatusValue, setOrderDetails) => {
    try {
        const response = await axios.get(`/barista-display/${officeID}/${orderStatusValue}`);
        if (response.data) {
            setOrderDetails(response.data);
        }
    } catch (error) {
        console.log(error);
    }
}

export { detailsForBarista };