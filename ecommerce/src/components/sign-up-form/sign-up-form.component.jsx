import { useState } from 'react'

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.util';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import './sign-up-form.style.scss';


const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password != confirmPassword) {
            alert('패스워드가 일치하지 않습니다');
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(
                email,
                password,
            );
            await createUserDocumentFromAuth(user, { displayName });
            resetFormFields();
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('이메일이 이미 사용중입니다');
            }
            console.log('user creation error', error);
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value })
    };

    return (
        <div className='sign-up-container'>
            <h2>계정이 없으세요?</h2>
            <span>이메일로 회원 가입하기</span>
            <form classname='group' onSubmit={handleSubmit}>
                <FormInput label='닉네임' onChange={handleChange} name="displayName" value={displayName} required />
                <FormInput label='이메일' onChange={handleChange} name="email" value={email} required />
                <FormInput label='비밀번호' onChange={handleChange} name="password" value={password} required />
                <FormInput label='비밀번호(확인)' onChange={handleChange} name="confirmPassword" value={confirmPassword} required />
                <Button children='제출' type="submit" />
            </form>
        </div>
    )
}

export default SignUpForm;