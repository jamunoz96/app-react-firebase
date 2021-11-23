import { GoogleAuthProvider, GithubAuthProvider, getAuth, 
    getRedirectResult, UserCredential, sendEmailVerification, User } from "firebase/auth";
import { setAuthFailed, setAuthSuccess } from "src/redux/actions/AuthActions";
import { AppDispatch } from "src/redux/utils/AppDispatch";
import { getLoading } from "src/utils/getLoading";
import app from ".";

export const auth = getAuth(app)
export const providerGoogle = new GoogleAuthProvider();
export const providerGithub = new GithubAuthProvider();

getRedirectResult(auth)
.then((result: UserCredential | null) => {
    if(result)
      AppDispatch(setAuthSuccess(result.user));
    else if(getLoading())
      throw new Error("Firebase: Error (auth/incomplete).");
  }).catch((error) => {
    AppDispatch(setAuthFailed(error.message));
  });

export const sendEmail = (user: User) => {
  sendEmailVerification(user)
}