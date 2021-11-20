import { GoogleAuthProvider, TwitterAuthProvider, getAuth, getRedirectResult, UserCredential } from "firebase/auth";
import { setAuthFailed, setAuthSuccess } from "src/redux/actions/AuthActions";
import { AppDispatch } from "src/redux/utils/AppDispatch";
import app from ".";

export const auth = getAuth(app)
export const providerGoogle = new GoogleAuthProvider();
export const providerTwitter = new TwitterAuthProvider();

getRedirectResult(auth)
  .then((result: UserCredential | null) => {
    if(result) {
      AppDispatch(setAuthSuccess(result.user));
    }
  }).catch((error) => {
    console.log("falla", error.message)
    AppDispatch(setAuthFailed(error.message));
  });
