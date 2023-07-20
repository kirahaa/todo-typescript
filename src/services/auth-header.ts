const authHeader = () => {
    const userStr = localStorage.getItem('jwtToken');
    let user = null;

    if (userStr) {
        user = JSON.parse(userStr)
    }

    if (user && user.accessToken) {
        return { Authorization: 'Bearer ' + user.accessToken }
    } else {
        return { Authorization: '' }
    }
}

export default authHeader