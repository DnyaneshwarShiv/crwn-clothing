import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

import './sign-in.styles.scss';
import {signInWithGoogle,auth} from '../../firebase/firebase.utils';

class SignIn extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            email:'',
            password:''
        }
    }
    handleSubmit= async (event)=>{
        event.preventDefault();
        const {email,password}=this.state;
        try{
            await auth.signInWithEmailAndPassword(email,password);
        }
        catch(error){
            console.error(error);
        }
        this.setState({email:'',password:''});
    }
    handleChange=(event)=>{
        const {value,name}=event.target;
        this.setState({[name]:value});
    }
    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' label='email' value={this.state.email} required handleChange={this.handleChange}/>
                    <FormInput name='password' type='password' label='password' value={this.state.password} required handleChange={this.handleChange}/>
                   <div className='buttons'>
                        <CustomButton type='Submit'> Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign In with Google</CustomButton>
                   </div>
                </form>
            </div>
        )
    }
}

export default SignIn;