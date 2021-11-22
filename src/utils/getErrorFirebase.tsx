const USER_NOT_FOUND = "Firebase: Error (auth/user-not-found).";
const USER_EXIST_WITH_OTHER_ACCOUNT = "Firebase: Error (auth/account-exists-with-different-credential)";

export const getErrorFirebase = (err : string) => {
    switch(err) {
        case USER_NOT_FOUND:
            return "Unregistered user.";
        case USER_EXIST_WITH_OTHER_ACCOUNT:
            return "The user is registered with other credentials.";
        default:
            return "We seem to have trouble submitting the information.";
    }
}