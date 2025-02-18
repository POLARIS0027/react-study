// stripe에서 제공하는 카드 입력값
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { PaymentFormContainer, FormContainer } from "./payment-form.styles";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const paymentHandler = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ amount: 12345 }),
        }).then(res => res.json());

        console.log(response);
    };

    return (
        <PaymentFormContainer>
            <h2>신용카드 결제</h2>
            <FormContainer onSubmit={paymentHandler}>
                <CardElement />
                <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>결제하기</Button>
            </FormContainer>
        </PaymentFormContainer>
    );
};

export default PaymentForm;