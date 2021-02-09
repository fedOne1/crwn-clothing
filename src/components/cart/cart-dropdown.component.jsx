import React from 'react';
import CustomerButton from '../customer-button/customer-button.component';
import './cart-dropdown.styles.scss';

const CartDropDown=()=> (
    <div className='cart-dropdown'>
       <div className='cart-items'> </div>
       <CustomerButton> GO TO CHECKOUT </CustomerButton>
    </div>
)

export default CartDropDown;