import { useState } from 'react'


import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword
} from '../../utils/firebase/firebase.util';
import FormInput from '../form-input/form-input.component';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { SignInContainer, ButtonsContainer } from './sign-in-form.style';


const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    };


    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const { user } = await signInAuthUserWithEmailAndPassword(email, password);
            console.log(user);
            resetFormFields();
        } catch (error) {
            if (error.code === "auth/invalid-credential") {
                alert('로그인 정보가 잘못되었습니다')
            }
            console.log(error);
        };
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value })
    };

    return (
        <SignInContainer>
            <h2>이미 계정이 있어요</h2>
            <span>이메일로 로그인하기</span>
            <form className='group' onSubmit={handleSubmit}>
                <FormInput label='이메일' onChange={handleChange} name="email" value={email} required type='email' />
                <FormInput label='비밀번호' onChange={handleChange} name="password" value={password} required type='password' />
                <ButtonsContainer>
                    <Button children='로그인' type="submit" />
                    <Button buttonType={BUTTON_TYPE_CLASSES.google} type='button' onClick={signInWithGoogle} children='구글 로그인' />
                </ButtonsContainer>
            </form>
        </SignInContainer>
    );
};

export default SignInForm;