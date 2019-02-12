import React from 'react';
import { Form, Dropdown, Grid, Header } from 'semantic-ui-react';
import { DateInput } from 'semantic-ui-calendar-react';

class VisitLogger extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
      timeOfDay: 'Morning'
    };
  }

  handleDateChange = (event, {name, value}) => {
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value });
    }
  }

  handleTimeChange = (event, data) => {
    this.setState({timeOfDay: data.value});
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.createVisit(this.state)
    e.target.reset()
  }

  timeOptions = [
    {
      text: 'Morning',
      value: 'Morning',
      image: { avatar: true, src: 'https://www.shareicon.net/data/2016/06/18/596415_sun_512x512.png' },
    },
    {
      text: 'Afternoon',
      value: 'Afternoon',
      image: { avatar: true, src: 'https://www.shareicon.net/data/2016/06/18/596415_sun_512x512.png' },
    },
    {
      text: 'Evening',
      value: 'Evening',
      image: { avatar: true, src: 'http://cdn.onlinewebfonts.com/svg/img_312366.png' },
    }
  ]

  render() {
    return (
      <div>
        <Header as='h1'>Log a Visit:</Header>
        <Grid>
          <Grid.Row centered>
            <Form className="visit" onSubmit={(e) => this.handleSubmit(e)}>
              <DateInput
                name="date"
                placeholder="Date"
                value={this.state.date}
                iconPosition="left"
                onChange={this.handleDateChange}
              />

            <Dropdown placeholder={<i class="clock outline icon"></i>}
                fluid
                selection
                options={this.timeOptions}
                onChange={this.handleTimeChange}
              />

              <Form.Button>Submit</Form.Button>
            </Form>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

// options={friendOptions}
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

export default VisitLogger
