import React, { Component } from "react";
import Details from "./Details";

class Students extends Component {
  state = {
    moko: [],
    userData: {
      name: "",
      er_no: "",
      email: "",
      password: "",
    },
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      ...this.state,
      moko: [...this.state.moko, { ...this.state.userData }],
    });
    // console.log(this.state.userData.name);
    // console.log(this.state.userData.er_no);
    // console.log(this.state.userData.email);
    // console.log(this.state.userData.password);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label for="exampleInputText">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              id="exampleInputText"
              value={this.state.userData.name}
              placeholder="Enter your name"
              onChange={(e) =>
                this.setState({
                  ...this.state,
                  userData: {
                    ...this.state.userData,
                    name: e.target.value,
                  },
                })
              }
            />
          </div>

          <div className="form-group">
            <label for="exampleInputNumber">Enrollnment</label>
            <input
              type="number"
              name="enrollnment"
              className="form-control"
              id="exampleInputNumber"
              value={this.state.userData.er_no}
              placeholder="Enter your Enrollnment"
              onChange={(e) =>
                this.setState({
                  ...this.state,
                  userData: {
                    ...this.state.userData,
                    er_no: e.target.value,
                  },
                })
              }
            />
          </div>

          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={this.state.userData.email}
              placeholder="Enter your email"
              onChange={(e) =>
                this.setState({
                  ...this.state,
                  userData: {
                    ...this.state.userData,
                    email: e.target.value,
                  },
                })
              }
            />
          </div>

          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="exampleInputPassword1"
              value={this.state.userData.password}
              placeholder="Password"
              onChange={(e) =>
                this.setState({
                  ...this.state,
                  userData: {
                    ...this.state.userData,
                    password: e.target.value,
                  },
                })
              }
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>

        <Details array={this.state.moko} />
      </div>
    );
  }
}

export default Students;
