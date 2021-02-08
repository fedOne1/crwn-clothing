import React from 'react'
import './customer-button.styles.scss'


const CustomerButton=({children,isGoogleSignIn, ...otherProps}) =>(
    <button className={`${isGoogleSignIn ? 'google-sign-in' :''} custom-button`} 
    {...otherProps}>
    {children}
    </button>
)

export default CustomerButton;

