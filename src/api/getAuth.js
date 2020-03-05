export const getAuth = () => {
    return JSON.parse(window.localStorage.getItem('isLogin'));
};