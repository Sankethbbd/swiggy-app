import axios from "../api/axios"

const allLocation = async (setOffices) => {
    let locations = []

    try {
        const response = await axios.get("/office/list-all-office")
        if (response.data) {
            response.data.map(item => {
                locations.push(item)
            })
            setOffices(locations);
        }
    } catch (error) {
        console.log(error)
    }
}

export {allLocation}