export const getEmailVerification = () : boolean => {
    const isValidate : string | null = localStorage.getItem("email_validated");
    if(isValidate) return JSON.parse(isValidate);
    else return false;
};