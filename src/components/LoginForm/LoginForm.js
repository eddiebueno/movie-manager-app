import React, { Component } from 'react';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';
import UserService from '../../services/user-service';
import { Button, Input } from '../Utils/Utils';
import './LoginForm.css';

export default class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  }

  state = 
    { error: null,
      user_name:'',
      password:'' };

  handleUserNameChange = user_name =>{
    this.setState({user_name});
  }  

  handlePasswordChange = password =>{
    this.setState({password});
  } 

  handleSubmitJwtAuth = ev => {
    ev.preventDefault();
    this.setState({ error: null });
    const { user_name, password } = this.state;
    console.log()
    AuthApiService.postLogin({
      user_name,
      password
    })
      .then(res => {
        TokenService.saveAuthToken(res.authToken);
        UserService.saveUserId(res.userId);
        this.props.onLoginSuccess();
        
      })
      .catch(res => {
        this.setState({ error:res.error});
      });
  }

  handleSubmitBasicAuth = ev => {
    ev.preventDefault()
    const { user_name, password } = ev.target

    TokenService.saveAuthToken(
      TokenService.makeBasicAuthToken(user_name.value, password.value)
    )
      .catch(error=>{
        this.setState({error})
      });

    user_name.value = ''
    password.value = ''
    this.props.onLoginSuccess()
  }

  render() {
    const { error } = this.state;
    return (
      <form
        className='LoginForm'
        onSubmit={this.handleSubmitJwtAuth}
      >
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <div className='user_name'>
          <label htmlFor='LoginForm__user_name'>
            User name
          </label>
          <Input
            onChange={(e)=>this.handleUserNameChange(e.target.value)}
            required
            name='user_name'
            id='LoginForm__user_name'>
          </Input>
        </div>
        <div className='password'>
          <label htmlFor='LoginForm__password'>
            Password
          </label>
          <Input
            onChange={(e)=>this.handlePasswordChange(e.target.value)}
            required
            name='password'
            type='password'
            id='LoginForm__password'>
          </Input>
        </div>
        <Button type='submit'>
          Login
        </Button>
      </form>
    )
  }
}
