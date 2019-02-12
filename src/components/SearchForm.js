import React from 'react';
import { Form, Grid } from 'semantic-ui-react';

class SearchForm extends React.Component {
  constructor() {
    super()
    this.state = {
      searchTerm: ''
    }
  }

  handleSearchChange = (e) => {
    e.persist()
    // console.log(e.target.name)
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSearchSubmit = (e) => {
    console.log("attempting to submit")
    // this.props.addPokemon(this.state)
    // e.target.reset()
  }

  render() {
    
    return (
      <div>
        <Grid>
          <Grid.Row centered>
            <Form className="visit" onChange={this.handleSearchChange} onSubmit={this.handleSearchSubmit}>
              <Form.Group widths="equal">
                <Form.Input label="Filter by Title or Artist Name:" placeholder="Title or Artist Name" name="searchTerm" />
              </Form.Group>
              <Form.Button>Search</Form.Button>
            </Form>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}



export default SearchForm
