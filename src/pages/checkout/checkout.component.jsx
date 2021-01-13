import React from 'react';
import './checkout.styles.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItems,selectCartTotal} from '../../redux/cart/cart.selector';
import CheckoutItem from '../../component/checkout-item/checkout-item.component';
import CartItem from '../../component/cart-item/cart-item.component';
import StripeCheckoutButton from '../../component/stripe-button/stripe-button.component'

const CheckoutPage = ({cartItems, total})=>(
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem=>(<CheckoutItem key={cartItem.id} cartItem={cartItem}/>))
        }
        <div className='total'>
            <span>TOTAL: ${total}</span>
           
        </div>
        <div className='test-warning'>
            *Please use the following test card for Payments*
            <br/>
            4242 4242 4242 4242 - Exp: 05/24 -CVV-123
        </div>
        <StripeCheckoutButton price={total}/>
    </div>
)
 const mapStateToProps =createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})
export default connect(mapStateToProps)(CheckoutPage);