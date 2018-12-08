import React, { Component} from "react";

export default class Meeting extends Component {
    constructor(props) {
      super(props);
      this.state = {
        time: new Date(props.time)
      };
    }
   
    render() {
      return (
        <div className="meeting">
            <div>Sedință Planificată</div>
            <div>Data și ora: {this.state.time.toUTCString()}</div>
            <div className="alert">Citații expediate</div>
        </div>
      );
    }
  }