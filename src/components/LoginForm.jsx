import React from 'react'
import { Grid, Segment, Form, Button } from "semantic-ui-react"
import { connect } from "react-redux";
import auth from "../modules/auth";

const LoginForm = (props) => {
  const authenticate = async (event) => {
    event.preventDefault();
    try {
      let response = await auth.signIn(
        event.target.email.value,
        event.target.password.value
      );
      props.dispatch({
        type: "AUTHENTICATE",
        payload: {
          currentUser: { email: response.data.email },
          
        }
      })
    } catch (error) {
      props.dispatch({
        type: "FAIL_AUTHENTICATE",
        payload: {
          errorMessage: error.response.data.errors[0]
        }
      })
    }
  }
  return (
    <div>
      <Segment placeholder>
      <h3 id='portal' >Admin Login</h3>
      <Grid columns={1}>
        <Grid.Column>
            <Form data-cy="login-form" onSubmit={authenticate}>
              <Form.Group>
            <Form.Input
              data-cy="email"
              icon='user'
              iconPosition='left'
              label='Email'
              placeholder='Email'
            />
            <Form.Input
              data-cy="password"
              icon='lock'
              iconPosition='left'
              label='Password'
              placeholder='Password'
              type='password'
                />
                <Button content='Login' data-cy="button" />
              </Form.Group> 
               <p>{props.errorMessage}</p>
          </Form>
        </Grid.Column>
        </Grid>
       
    </Segment>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    errorMessage: state.errorMessage,
  };
};

export default connect(mapStateToProps)(LoginForm)