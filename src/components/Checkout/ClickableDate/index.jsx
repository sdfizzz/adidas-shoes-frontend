import React from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import TimePicker from 'rc-time-picker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';
import 'rc-time-picker/assets/index.css';
import './time-picker.css';
import './react-datepicker.css';

const Container = styled.span`
  display: inline;
  font-family: AvenirNext-Reg;
`;

const StyledDate = styled(DatePicker)`
  cursor: pointer;
  text-decoration: underline;
  border: none;
  outline: none;
  width: 100%;
  color: blue;
  font-family: AvenirNext-Reg;
`;

const StyledTime = styled(TimePicker)`
  cursor: pointer;
  text-decoration: underline;
  border: none;
  outline: none;
  color: blue;
`;

export default class ClickableDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: moment(), startTime: moment('8am'), endTime: moment('6pm') };
    this.handleChange = this.handleChange.bind(this);
    this.handleEndTimeChanged = this.handleEndTimeChanged.bind(this);
    this.handleStartTimeChanged = this.handleStartTimeChanged.bind(this);
  }

  handleStartTimeChanged(time) {
    this.setState(() => ({ startTime: time }));
  }

  handleEndTimeChanged(time) {
    this.setState(() => ({ endTime: time }));
  }

  handleChange(date) {
    this.setState(() => ({ date }));
  }

  render() {
    return (
      <Container>
        <StyledDate
          selected={this.state.date}
          locale="en-gb"
          minDate={moment()}
          onChange={this.handleChange}
          dateFormat="dddd D MMMM, "
        />
        <StyledTime
          defaultValue={moment({ hour: 8, minute: 0 })}
          format="HH:00"
          onChange={this.handleStartTimeChanged}
          showSecond={false}
          showMinute={false}
        />
        –
        <StyledTime
          defaultValue={moment({ hour: 18, minute: 0 })}
          format="HH:00"
          onChange={this.handleEndTimeChanged}
          showSecond={false}
          showMinute={false}
        />
      </Container>
    );
  }
}
