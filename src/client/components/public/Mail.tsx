import * as React from "react";
import { RouteComponentProps } from "react-router-dom";

export default class Mail extends React.Component<IMailProps, IMailState> {
  constructor(props: IMailProps) {
    super(props);
    this.state = {
      email: "",
      subject: "",
      message: ""
    };
  }

  onSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await fetch("/mail", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(this.state)
      });
      this.setState({ email: "", subject: "", message: "" });
    } catch (e) {
      throw e;
    }
  };

  render() {
    return (
      <main className="container">
        <form
          className="form-group mt-5 border border-primary rounded p-3 shadow-lg bg-info"
          onSubmit={this.onSubmit}
        >
          <label>Email</label>
          <input
            type="text"
            value={this.state.email}
            className="input-group my-1 p-1"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              this.setState({ email: e.target.value })
            }
          />
          <label>Subject</label>
          <input
            type="text"
            value={this.state.subject}
            className="input-group my-1 p-1"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              this.setState({ subject: e.target.value })
            }
          />
          <label>Message</label>
          <input
            type="text"
            value={this.state.message}
            className="input-group my-1 p-1"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              this.setState({ message: e.target.value })
            }
          />
          <button className="btn btn-secondary mt-2 shadow">Email Me!</button>
        </form>
      </main>
    );
  }
}

interface IMailProps extends RouteComponentProps<{}> {}

interface IMailState {
  email: string;
  subject: string;
  message: string;
}
