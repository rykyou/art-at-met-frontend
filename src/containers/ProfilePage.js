import React, { Component } from 'react';
import FavoritesList from './FavoritesList';
import { Button, Checkbox, Form, Grid, Header, Image } from 'semantic-ui-react'

class ProfilePage extends Component {
  render() {
    return (
      <div>
        <h1>Profile</h1>
          <Grid divided='vertically'>
            <Grid.Row columns={2}>
              <Grid.Column>
                <FavoritesList currentUser={this.props.currentUser}/>
              </Grid.Column>
              <Grid.Column>
                <Form>
                  <Header as='h2' block>
                    Edit Profile
                  </Header>
                  <Header as='h3'>
                    <Image circular src='https://react.semantic-ui.com/images/avatar/large/molly.png' /> Robin Kim
                    </Header>
                  <Form.Field>
                    <label>First Name</label>
                    <input placeholder='Robin' />
                  </Form.Field>
                  <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Kim' />
                  </Form.Field>
                  <Form.Field>
                    <label>Email</label>
                    <input placeholder='beansss@gmail.com' />
                  </Form.Field>
                  <Form.Field>
                    <label>Username</label>
                    <input placeholder='rkim' />
                  </Form.Field>
                  <Form.Field>
                    <label>Password</label>
                    <input placeholder='************' />
                  </Form.Field>

                  <Button type='submit'>Submit</Button>
                </Form>
              </Grid.Column>
            </Grid.Row>
          </Grid>
      </div>
    );
  }
}

export default ProfilePage;
