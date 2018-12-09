import React, { Component} from "react";
import publish from "../pubnub";

export default class Meeting extends Component {
    constructor(props) {
      super(props);
      this.state = {
        time: new Date(props.time),
        success: false,
      };

      let message = {
        "pn_apns": {
          "aps": {
            "alert": {
              "title": "Citație nouă ",
              "body": "Deschideți în aplicația pentru a vedea conținutul",
            }
          },
          "case": props.case,
          "caseNumber": props.caseNum,
          "data": props.time,
        }
      }
      publish(message, (success) => {
        this.setState({
          success: success
        })
      });
    }

    render() {
      return (
        <div className="meeting">
            <div>Sedință Planificată</div>
            <div>Data și ora: {this.state.time.toUTCString()}</div>
            {this.state.success ? <div className="success">Citații confirmată</div> : <div className="alert">Citații expediate</div> }
        </div>
      );
    }
  }
