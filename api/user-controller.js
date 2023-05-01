import axios from "axios"

//config global
axios.defaults.baseURL = "http://localhost:1234"
axios.defaults.headers.common["Accept"] = "application/json"
axios.defaults.headers.post["Content-Type"] = "application/json"
axios.defaults.headers.put["Content-Type"] = "application/json"

//interceptor
axios.interceptors.response.use((response) => {
    console.log(response.status)
    console.log(response.data)
    return response
}, (error) => {
    console.log(error.response.status)
    console.log(error.response.data)
    return error.response
})

const createUser = (requestBody) => {
    return axios.post('/v1/users',requestBody)
}

const getUsers = (name) => {
    return axios.get(`/v1/users?name=${name}`)
}

const getUsersByID = (id) => {
    return axios.get(`/v1/users/${id}`)
}

const deleteAlluser = () => {
    return axios.delete("/v1/users/removeAll")
}

const userControllerAPI = {
    createUser,
    getUsers,
    deleteAlluser,
    getUsersByID
}

export default userControllerAPI