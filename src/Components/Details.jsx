import React, { Component } from "react";

class Details extends Component {
  render() {
    return (
      <div className="table-responsive mt-2">
        <table className="table table-striped m-2">
          <thead className="">
            <tr>
              <th>Name</th>
              <th>Enrollnment</th>
              <th>Email</th>
              <th>Password</th>
              <th></th>
              <th></th>
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
                  <td>
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => this.props.onEdit(index)}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => this.props.onDelete(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td>No Data Found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Details;
