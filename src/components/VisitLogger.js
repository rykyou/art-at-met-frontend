import React from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class VisitLogger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      timeOfDay: 'Morning'
    };
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleDateChange(date) {
    this.setState({
      date: date
    });
  }

  handleTimeChange(event) {
    event.persist()
    this.setState({
      timeOfDay: event.target.value
    });
  }

  // handleTimeChange = (e) => {
  //   e.persist()
  //   // console.log(e.target.name)
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   })
  // }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.createVisit(this.state)
    e.target.reset()
  }

  render() {
    return (
      <div>
        <h3>Filter Search</h3>

        <DatePicker
        selected={this.state.date}
        onChange={this.handleDateChange}
        />

        <form onSubmit={this.handleSubmit}>
          <select value={this.state.timeOfDay} onChange={this.handleTimeChange}>
            <option value="morning">Morning</option>
            <option value="afternoon">Afternoon</option>
            <option value="evening">Evening</option>
          </select>

          <button>Log!</button>
        </form>
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
