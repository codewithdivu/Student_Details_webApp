import React, { Component } from "react";
import { addUser, deleteUser, updateUser } from "../Services/apiService";
import Details from "./Details";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../config";

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
    const q = query(collection(db, "users"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const cities = [];
      querySnapshot.forEach((doc) => {
        cities.push(doc.data());
      });
      console.log("cities", cities);
      this.setState({ ...this.state, moko: cities });
      // console.log("Current cities in CA: ", cities.join(", "));
    });
  }

  handleValidation = (data) => {
    let inValid = [];
    Object.keys(data).forEach((value) => {
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
      // let copyData = [...this.state.moko];
      // copyData = copyData.map((item, index) => {
      //   return index === this.state.isEditMode
      //     ? { ...this.state.userData }
      //     : item;
      // });
      // localStorage.setItem("tableData", JSON.stringify(copyData));
      const isUserUpdated = await updateUser(this.state.userData);
      if (isUserUpdated) {
        this.setState({
          ...this.state,
          isEditMode: false,
          userData: {
            name: "",
            er_no: "",
            email: "",
            password: "",
          },
        });
      }
    } else {
      const isUserAdded = await addUser(this.state.userData);
      if (isUserAdded) {
        this.setState({
          isEditMode: false,
          userData: {
            name: "",
            er_no: "",
            email: "",
            password: "",
          },
        });
      }
    }
  };

  handleEdit = (editId) => {
    let editDate = this.state.moko.find((user) => user.id === editId);
    console.log("editDate :>> ", editDate);
    this.setState({
      ...this.state,
      isEditMode: editId,
      userData: { ...editDate },
    });
  };

  handleDelete = async (deleteId) => {
    await deleteUser(deleteId);
  };

  render() {
    return (
      <div className="container-fluid">
        <h1 className="text-center mt-2">Student Details WebApp</h1>
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

          <button type="submit" className="btn btn-primary mt-3">
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
