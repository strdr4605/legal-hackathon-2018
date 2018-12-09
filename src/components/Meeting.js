import React, { Component} from "react";
import publish from "../pubnub";

export default class Meeting extends Component {
    constructor(props) {
      super(props);
      this.state = {
        time: new Date(props.time),
        success: [],
      };

      let message = {
        "pn_apns": {
          "aps": {
            "alert": {
              "title": "Citație nouă ",
              "body": "Deschideți în aplicația pentru a vedea conținutul",
            },
            "badge" : 1,
            "sound" : "bingbong.aiff"
          },
          "case": props.case,
          "caseNumber": props.caseNum,
          "date": props.time,
        }
      }
      publish(message, (name) => {
        if(this.state.success.indexOf(name) === -1) {
          this.setState(prevState => ({
            success: [...prevState.success, name]
          }))
        }
      });
    }

    render() {
      return (
        <div className="meeting">
            <div>Sedință Planificată</div>
            <div>Data și ora: {this.state.time.toString()}</div>
            <div className="alert">Citații expediate</div>
            { (() => {
              if (this.state.success && this.state.success.length)
                return this.state.success.map(name => <div className="success" key={new Date().getTime()}>Citație confirmată de {name}</div>)
              })()
            }
        </div>
      );
    }
  }
