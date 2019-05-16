import React, { Component } from 'react'
import { Button, Input, Required } from '../Utils/Utils'
import AuthApiService from '../../services/auth-api-service';
import './RegistrationForm.css';

export default class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {}
  }

  state = 
    { error: null,
      user_name: '',
      password: '' };


  handleUserNameChange = user_name =>{
    this.setState({user_name});
  }  

  handlePasswordChange = password =>{
    this.setState({password});
  }  
    
  handleSubmit = ev => {
    ev.preventDefault()
    this.setState({ error: null })
    const { user_name, password } = this.state;

    
    AuthApiService.postUser({
      user_name,
      password,
    })
      .then(user => {
        this.props.onRegistrationSuccess()
      })
      .catch(res => {
        this.setState({ error:res.error })
      })
  }

  render() {
    const { error } = this.state
    return (
      <form
        className='RegistrationForm'
        onSubmit={this.handleSubmit}
      >
        <div role='alert'>
          {error && <p className='red'>{error}}</p>}
        </div>
        <div className='user_name'>
          <label htmlFor='RegistrationForm__user_name'>
            User name <Required />
          </label>
          <Input
            onChange={(e)=>this.handleUserNameChange(e.target.value)}
            name='user_name'
            type='text'
            required
            id='RegistrationForm__user_name'>
          </Input>
        </div>
        <div className='password'>
          <label htmlFor='RegistrationForm__password'>
            Password <Required />
          </label>
          <Input
            onChange={(e)=>this.handlePasswordChange(e.target.value)}
            name='password'
            type='password'
            required
            id='RegistrationForm__password'>
          </Input>
        </div>
        <Button type='submit'>
          Register
        </Button>
      </form>
    )
  }
}
