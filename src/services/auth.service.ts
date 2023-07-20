import axios from 'axios'

const API_URL = "https://www.pre-onboarding-selection-task.shop/"

export const register = (email: string, password: string) => {
    return axios.post(API_URL + "auth/signup", {
        email,
        password
    })
}

export const login = (email: string, password: string) => {
    return axios
        .post(API_URL + "auth/signin", {
            email,
            password,
        })
        .then((response) => {
            if (response.data.access_token) {
                localStorage.setItem("jwtToken", response.data.access_token)
            }

            return response.data
        })
}

export const logout = () => {
    localStorage.removeItem('jwtToken')
}

export const getCurrentUser = () => {
    const userStr = localStorage.getItem('jwtToken')
    if (userStr) return userStr

    return null
}