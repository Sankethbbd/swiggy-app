import axios from "../api/axios";

const allMilkType = async (setMilkType) => {
    let milkType = []
    try {
        const response = await axios.get("/get-milk-types")
        if (response.data) {
            response.data.map(item => {
                milkType.push(item)
            })
            setMilkType(milkType);
        }
    } catch (error) {
        console.log(error)
    }
}

const searchMilkType = async (type, setSelected) => {
    try {
        const response = await axios.get(`/get-milk-types/${type.milkTypeID}`)
        if (response.data) {
            setSelected({milkTypeID: response.data[0].milkTypeID, milkTypeValue: response.data[0].milkTypeValue});
        }
    } catch (error) {
        console.log(error)
    }
}

export { allMilkType, searchMilkType }