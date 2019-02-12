import React, { Component } from 'react';
import AllArtworksList from './AllArtworksList';
import { Form, Grid } from 'semantic-ui-react';

class SearchContainer extends Component {
  constructor() {
    super()
    this.state = {
      searchTitle: '',
      searchArtist: ''
    }
  }

  handleSearchChange = (e) => {
    // e.persist()
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    let filteredArtworks = this.props.artworkArray.filter(artwork => artwork.title.toLowerCase().includes(this.state.searchTitle.toLowerCase()))
    filteredArtworks = filteredArtworks.filter(artwork => artwork.artist_name.toLowerCase().includes(this.state.searchArtist.toLowerCase()))

    return (
      <div>
        <h1>SearchContainer</h1>
        <Grid>
          <Grid.Row centered>
            <Form className="visit" onChange={this.handleSearchChange} onSubmit={this.handleSubmit}>
              <Form.Group widths="equal">
                <Form.Input label="Filter by Title:" placeholder="Artist Name" name="searchTitle" />
                <Form.Input label="Filter by Artist Name:" placeholder="Artist Name" name="searchArtist" />
              </Form.Group>
            </Form>
          </Grid.Row>
        </Grid>
        
        <h3>All art:</h3>
        <div className="horizontal-scroll">
          <AllArtworksList
            artworkArray={filteredArtworks}
            handleArtworkClick={this.props.handleArtworkClick}
          />
        </div>
      </div>
    );
  }
}

export default SearchContainer;
