import React from 'react';
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component';
import {auth,createUserProfileDocument} from '../../firebase/firebase.utils';

class SignUp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            displayName: '',
            email:'',
            password:'',
            confirmPassword:''
        }
    }

    handleSubmit= async (event)=>{
        event.preventDefault();
        const{displayName,email,password,confirmPassword} = this.state;
        if(password!== confirmPassword){
            alert("password dont match");
            return;
        }
        try{
            const {user}= await auth.createUserWithEmailAndPassword(email,password);
            console.log(user);
           await createUserProfileDocument(user,{displayName});
           this.setState({
            displayName: '',
            email:'',
            password:'',
            confirmPassword:''
        })

        }
        catch(error){
            console.error(error)
        }
    }

    handleChange=(event)=>{
        const {name,value}=event.target;
        this.setState({[name]:value});
    }
    render(){
        const{displayName,email,password,confirmPassword} = this.state;
        return(
            <div className='sign-up'>
                <h2 className='title'>I do not have a account</h2>
                <span>Sign Up with your email and password.</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                <FormInput name='displayName' type='text' label='Display Name' value={displayName} required 
                handleChange={this.handleChange}/>
                <FormInput name='email' type='email' label='email' value={email} required 
                handleChange={this.handleChange}/>
                <FormInput name='password' type='password' label='Password' value={password} required 
                handleChange={this.handleChange}/>
                <FormInput name='confirmPassword' type='password' label='Confirm Password' 
                value={confirmPassword} required 
                handleChange={this.handleChange}/>
                <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        )

    }
}

export default SignUp;