const USER_NOT_FOUND = "Firebase: Error (auth/user-not-found).";
const EMAIL_IN_USE = "Firebase: Error (auth/email-already-in-use).";
const USER_EXIST_WITH_OTHER_ACCOUNT = "Firebase: Error (auth/account-exists-with-different-credential).";
const INCOMPETE_AUTH = "Firebase: Error (auth/incomplete).";
const ACCOUNT_NO_VALIDATED = "Firebase: Error (auth/email-n--validated).";

export const getErrorFirebase = (err : string) => {
    switch(err) {
        case USER_NOT_FOUND:
            return "Unregistered user.";
        case EMAIL_IN_USE:
            return "This account is already registered.";
        case ACCOUNT_NO_VALIDATED:
            return "The account needs to be validated.";
        case USER_EXIST_WITH_OTHER_ACCOUNT:
            return "The user is registered with other credentials.";
        case INCOMPETE_AUTH:
            return "You did not complete the authentication.";
        default:
            return "We seem to have trouble submitting the information.";
    }
}