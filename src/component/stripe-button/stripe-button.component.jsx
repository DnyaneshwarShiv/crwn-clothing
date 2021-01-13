import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton=({price})=>{
    const priceForStripe =price*100;
    const publishableKey='pk_test_51I9BwuGcJHDCEx4yqoRpgCfoqlprNWWJ4BGmYTNAbBnXCwgLzXmRW6i9lZuqrVGHkC4WXJ9X5yrRVsFbJuw1vQz500496O9wQb';
    const onToken =(token)=>{
        console.log(token);
        alert('Payment successful')
    }
    return(
        <StripeCheckout
            currency='USD'
            label='Pay Now'
            name ='Lockdown shop Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amountt={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}
export default StripeCheckoutButton;