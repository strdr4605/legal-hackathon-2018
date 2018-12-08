import React, { Component } from 'react';
import MyDatePicker from './components/MyDatePicker';
import Meeting from './components/Meeting';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
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
          <div>Caz: Străinu vs Spatari</div>
          <div>NR: 23-1-4250-24102018</div>
          { this.state.events && this.state.events.map(event => <Meeting time={event.toISOString()} />)}
          <MyDatePicker getCurrentDate={this.receiveDate.bind(this)}/>
        </header>
      </div>
    );
  }
}

export default App;
