import React from 'react'
import './customer-button.styles.scss'


const CustomerButton=({children, ...otherProps}) =>(
    <button className='custom-button' {...otherProps}>
    {children}
    </button>
)

export default CustomerButton;

