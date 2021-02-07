import React, {Component} from 'react'
import SignIn from '../sign-in/sign-in.component'

class SignInAndSignUpPage extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            
        }
       
    }
    render(){
        return (
            <div className='sign-in-and-sign-up'>
            <SignIn />
            </div>
        )
    }
}
export default SignInAndSignUpPage;
