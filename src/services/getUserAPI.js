import axios from "axios";

const responseUrl = "https://tuong-json-sever.herokuapp.com/api"
const getUserInfo = async () => {
    const res = await axios.get(`${responseUrl}/users`)
    return res
}

const addUserInfo = async (data) => {
    const res = await axios.post(`${responseUrl}/users`,data)
    return res
}

const userServices = {
    getUserInfo,
    addUserInfo
}

export default userServices;