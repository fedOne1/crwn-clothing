import React, { Component } from 'react'
import CustomerButton from '../../components/customer-button/customer-button.component';
import FormInput from '../../components/form-input/form-input.component';
import './sign-in.styles.scss';
import {signInWithGoogle} from '../../firebase/firebase.utils';
 class SignIn extends Component {
     constructor(){
        super()
          this.state={
             email:'',
            password: ''
          }
     }

  handleSubmit= event =>{
      event.preventDefault();
      this.setState({emai:'', password:''})
  }

  handleOnchange= event =>{
      const {name,value}=event.target;

      this.setState({[name]:value});
  }

    render() {
        return (
            <div className='sign-in'>
             <h2> I already an accont</h2>
             <span> sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                <FormInput 
                        name='email'
                        type='email'
                        value={this.state.email}
                        handleChange={this.handleOnchange}
                        required
                        label='Email'
                        />
               
                 <FormInput name='password'
                        type='password' 
                        value={this.state.password} 
                        handleChange={this.handleOnchange}
                        label='Password'
                        required
                        
                       />
                    <div className='buttons'>
                           <CustomerButton type='submit'> Sign in</CustomerButton>  
                            <CustomerButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with google</CustomerButton>
                    </div>
                  
                </form>
            </div>
        )
    }
}

export default  SignIn;

