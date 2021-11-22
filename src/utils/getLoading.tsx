export const getLoading = () : boolean => {
    const loading : string | null = localStorage.getItem("auth_loading");
    if(loading) return JSON.parse(loading);
    else return false;
};