export const authUser = (payload) => {
    let response;

    if (payload.login === 'Admin' && payload.password === '12345') {
        window.localStorage.setItem('isLogin', true);
        response = true;
    } else {
        response = false;
    }

    return response;
};