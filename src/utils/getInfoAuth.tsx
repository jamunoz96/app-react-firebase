export const getInfoAuth = () => {
    const user : string | null = localStorage.getItem("auth_user");
    if(user) return JSON.parse(user);
    else return null;
}