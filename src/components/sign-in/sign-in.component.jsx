import React, { Component } from "react";

export class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with you email and password</span>

        <form action="" onSubmit={this.handleSubmit}>
          <input
            name="email"
            value={this.state.email}
            required
            type="email"
            onChange={this.handleChange}
          />
          <label>Email</label>
          <input
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            required
            type="password"
          />
          <label>Password</label>

          <input type="submit" value="Submit form" />
        </form>
      </div>
    );
  }
}
