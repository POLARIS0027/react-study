import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.util"

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import Button from "../../components/button/button.component";

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };

    return (
        <div>
            <h1>이미 계정이 있어요</h1>
            <Button children='구글ID로 로그인' type="submit" onClick={logGoogleUser} buttonType='google' />
            <SignUpForm />
        </div>
    );
};

export default SignIn