import axios from "../api/axios";

const allTags = async (setTags) => {
    let tags = []

    try {
        const response = await axios.get("/get-tags")
        if (response.data) {
            response.data.map(item => {
                tags.push(item)
            })
            setTags(tags);
        }
    } catch (error) {
        console.log(error)
    }
}

const searchTag = async (tagID, setTags) => {
    try {
        const response = await axios.get(`/get-tags${tagID}`)
        if (response.data) {
            setTags(response.data);
        }
    } catch (error) {
        console.log(error)
    }
}

export { allTags, searchTag }