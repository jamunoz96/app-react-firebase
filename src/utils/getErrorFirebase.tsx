const USER_NOT_FOUND = "Firebase: Error (auth/user-not-found).";

export const getErrorFirebase = (err : string) => {
    switch(err) {
        case USER_NOT_FOUND:
            return "Unregistered user.";
        default:
            return "We seem to have trouble submitting the information.";
    }
}