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
      image: { avatar: true, src: 'https://www.shareicon.net/data/128x128/2015/10/07/652359_star_512x512.png' },
    },
    {
      text: 'Afternoon',
      value: 'Afternoon',
      image: { avatar: true, src: 'https://www.shareicon.net/data/128x128/2016/07/14/795832_cloud_512x512.png' },
    },
    {
      text: 'Evening',
      value: 'Evening',
      image: { avatar: true, src: 'https://www.shareicon.net/data/128x128/2016/10/05/839058_moon_512x512.png' },
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

            <Dropdown placeholder={<i className="clock outline icon"></i>}
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

export default VisitLogger
