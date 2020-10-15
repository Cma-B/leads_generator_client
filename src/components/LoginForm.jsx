import React from 'react'
import { Grid, Segment, Form, Button } from "semantic-ui-react"

const LoginForm = () => {
  return (
    <div>
      <Segment placeholder>
      <h3 id='portal' >Admin Login</h3>
      <Grid columns={1}>
        <Grid.Column>
          <Form id="login-form">
            <Form.Input
              id="email"
              icon='user'
              iconPosition='left'
              label='Email'
              placeholder='Email'
            />
            <Form.Input
              id="password"
              icon='lock'
              iconPosition='left'
              label='Password'
              placeholder='Password'
              type='password'
            />
            <Button content='Login' id="login-button"/>
          </Form>
        </Grid.Column>
      </Grid>
    </Segment>
    </div>
  )
}

export default LoginForm