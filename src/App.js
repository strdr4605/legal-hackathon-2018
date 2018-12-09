import React, { Component } from 'react';
import MyDatePicker from './components/MyDatePicker';
import Meeting from './components/Meeting';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      case: "Străinu vs Spatari",
      caseNum: "23-1-4250-24102018"
    };
  }

  receiveDate(value) {
    this.setState(prevState => ({
      events: [...prevState.events, value]
    }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>Caz: {this.state.case}</div>
          <div>NR: {this.state.caseNum}</div>
          {this.state.events && this.state.events.map(event =>
          <Meeting
            key={event.getTime()}
            case={this.state.case}
            caseNum={this.state.case}
            time={event.toISOString()}
          />)}
          <MyDatePicker getCurrentDate={this.receiveDate.bind(this)}/>
        </header>
      </div>
    );
  }
}

export default App;
