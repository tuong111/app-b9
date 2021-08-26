import axios from "axios";

const responseUrl = "http://localhost:3000/api"
const getUserInfo = async () => {
    const res = await axios.get(`http://localhost:3000/api/users`)
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