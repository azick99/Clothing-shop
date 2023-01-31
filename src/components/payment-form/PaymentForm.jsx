import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import Button, { BUTTON_TYPE_CLASSES } from '../button/Button'
import { FormContainer, PaymentFormContainer } from './payment.styles'

const PaymentForm = () => {
  const stripe = useStripe()
  const elements = useElements()

  const paymentHanlder = async (e) => {
    e.preventDefault()

    if (!stripe || !elements) {
      return
    }
    const response = await fetch('/.netlify/functions/create-payment-intent', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: 10000 }),
    }).then((res) => res.json())

    const {
      paymentIntent: { client_secret },
    } = response

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: 'Azizbek Yunusaliev',
        },
      },
    })

    if (paymentResult.error) {
      alert(paymentResult.error)
    } else {
      if (paymentResult.paymentIntent.status === 'succeeded') {
        alert('Payment Saccessful')
      }
    }
  }
  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHanlder}>
        <h2>Credit Card Payments:</h2>
        <CardElement />
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>Pay now</Button>
      </FormContainer>
    </PaymentFormContainer>
  )
}

export default PaymentForm
