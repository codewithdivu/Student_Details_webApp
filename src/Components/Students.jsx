import React, { Component } from "react";
import Details from "./Details";

class Students extends Component {
  state = {
    moko: [],
    isEditMode: false,
    userData: {
      name: "",
      er_no: "",
      email: "",
      password: "",
    },
  };

  componentDidMount() {
    if (localStorage.getItem("tableData")) {
      this.setState({
        ...this.state,
        moko: JSON.parse(localStorage.getItem("tableData")),
      });
    }
  }

  handleValidation = (data) => {
    let inValid = [];
    Object.keys(data).forEach((value, index) => {
      if (!data[value]) {
        inValid.push(value);
      }
    });
    return inValid.length > 0 ? inValid : "";
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const isInvalid = await this.handleValidation(this.state.userData);

    if (isInvalid) return alert(`${isInvalid?.toString()} is invalid`);

    if (this.state.isEditMode) {
      let copyData = [...this.state.moko];
      copyData = copyData.map((item, index) => {
        return index === this.state.isEditMode
          ? { ...this.state.userData }
          : item;
      });
      localStorage.setItem("tableData", JSON.stringify(copyData));
      this.setState({
        isEditMode: false,
        moko: [...copyData],
        userData: {
          name: "",
          er_no: "",
          email: "",
          password: "",
        },
      });
    } else {
      localStorage.setItem(
        "tableData",
        JSON.stringify([...this.state.moko, { ...this.state.userData }])
      );
      this.setState({
        isEditMode: false,
        moko: [...this.state.moko, { ...this.state.userData }],
        userData: {
          name: "",
          er_no: "",
          email: "",
          password: "",
        },
      });
    }
  };

  handleEdit = (editIndex) => {
    let editDate = this.state.moko[editIndex];
    this.setState({
      ...this.state,
      isEditMode: editIndex,
      userData: { ...editDate },
    });
  };

  handleDelete = (tabIndex) => {
    let arr = [...this.state.moko];
    arr = arr.filter((item, index) => index !== tabIndex);
    localStorage.setItem("tableData", JSON.stringify(arr));
    this.setState({
      ...this.state,
      moko: arr,
    });
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
            {this.state.isEditMode ? "Update" : "Add"}
          </button>
        </form>

        <Details
          array={this.state.moko}
          onDelete={this.handleDelete}
          onEdit={this.handleEdit}
        />
      </div>
    );
  }
}

export default Students;
