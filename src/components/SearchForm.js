import React from 'react'
// import { Form } from 'semantic-ui-react'

class SearchForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  handleChange = (e) => {
    e.persist()
    // console.log(e.target.name)
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    this.props.addPokemon(this.state)
    e.target.reset()
  }

  render() {
    return (
      <div>
        <h3>Filter Search</h3>
        <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
            <input label="Name" placeholder="Name" name="name" />
            <input label="hp" placeholder="hp" name="hp" />
            <input label="Front Image URL" placeholder="url" name="frontUrl" />
            <input label="Back Image URL" placeholder="url" name="backUrl" />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}
// <div>
// <h3>Filter Search</h3>
// <Form onChange={this.handleChange} onSubmit={this.handleSubmit}>
// <Form.Group widths="equal">
// <Form.Input fluid label="Name" placeholder="Name" name="name" />
// <Form.Input fluid label="hp" placeholder="hp" name="hp" />
// <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" />
// <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" />
// </Form.Group>
// <Form.Button>Submit</Form.Button>
// </Form>
// </div>

export default SearchForm
