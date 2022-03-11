import React, { Component } from "react";

class Details extends Component {
  render() {
    console.log("this.props.array :>> ", this.props.array);
    return (
      <table className="table table-striped m-2">
        <thead>
          <tr>
            <th>Name</th>
            <th>Enrollnment</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {this.props.array.length > 0 ? (
            this.props.array.map((c, index) => (
              <tr key={index}>
                <td>{c.name}</td>
                <td>{c.er_no}</td>
                <td>{c.email}</td>
                <td>{c.password}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td>No Data Found</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }
}

export default Details;
