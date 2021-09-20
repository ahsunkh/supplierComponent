import React from "react";
// import { Form, Input, Button, Checkbox } from "antd";

function Supplier() {
  // const onFinish = (values) => {
  //   console.log("Success:", values);
  // };
  // const onFinishFailed = (errorInfo) => {
  //   console.log("Failed:", errorInfo);
  // };

  return (
    // <div className="form ">

    //     <lable className="lable_name">User Name</lable>
    //     <input className="input_name" placeholder="User Name"></input>

    //     <lable className="label_password">Password</lable>
    //     <input className="input_password" placeholder="User Name"></input>
    //  </div>
    <div>
      <nav className="navbar navbar-expand-sm navbar navbar-dark bg-danger fixed -top">
        <a href="/" className="navbar-brand navbar-text ">
          Restulator
        </a>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse ml-auto"
          id="collapsibleNavbar"
        >
          <ul className="navbar-nav  ">
            <li className="nav-item">
              {" "}
              <a href="/" className="nav-link">
                {" "}
                New Order
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-2  " style={{ margin: "0px", padding: "0px" }}>
            <div className="sidebar">
              <h6 className="sidebarHeading">Navigation</h6>
              <a href="login.html" className="active">
                Dashboard
              </a>
              {/* // eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href={"/"}>Reports</a>
              <a href="/" className="dropdown-btn">
                Kitchen
                <i className="fa fa-angle-right" />{" "}
              </a>
              <div className="dropdown-container">
                <a href="/">Live Kitchen</a>
              </div>
              <a href="/" className="dropdown-btn">
                Orders
                <i className="fa fa-angle-right" />{" "}
              </a>
              <div className="dropdown-container">
                <a href="/">New Order</a>
                <a href="/">All Order</a>
                <a href="/">Non-Paid Order</a>
              </div>
              <a href="supplier.html">Supplier</a>
              <a href="/" className="dropdown-btn">
                Accounting <i className="fa fa-angle-right" />
              </a>
              <div className="dropdown-container">
                <a href="/" className="dropdown-btn">
                  {" "}
                  Expense <i className="fa fa-angle-right" />
                </a>
                <div className="dropdown-container">
                  <a href="/">Add Expense</a>
                  <a href="/">All Expense</a>
                </div>
                <a href="/">Income</a>
              </div>
              <a href="/">Table Management</a>
              <a href="/" className="dropdown-btn">
                Stock Management
                <i className="fa fa-angle-right" />
              </a>
              <div className="dropdown-container">
                <a href="/">New Purses</a>
                <a href="/">All Purses</a>
                <a href="addItem.html">Add Item</a>
                <a href="/">All Stock</a>
              </div>
              <a href="/" className="dropdown-btn">
                Dish
                <i className="fa fa-angle-right" />
              </a>
              <div className="dropdown-container">
                <a href="/">Add dish</a>
                <a href="/">All Dish</a>
              </div>
              <h6 className="sidebarHeading">More</h6>
              <a href="/" className="dropdown-btn">
                Employee
                <i className="fa fa-angle-right" />
              </a>
              <div className="dropdown-container">
                <a href="/addEmployee.html">Add Employee</a>
                <a href="/allEmployee.html">All Employee</a>
              </div>
              <a href="/" className="dropdown-btn">
                Setings
                <i className="fa fa-angle-right" />
              </a>
            </div>
          </div>
          <div
            className="col-sm-8 offset-2 "
            style={{ marginLeft: "55px", marginTop: "10px" }}
          >
            <div className="container">
              <form id="formSupplier" action="#">
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputSupplierName">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputSupplierName"
                      placeholder="Supplier/Company Name"
                      required
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputSupplierCnic">CNIC</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputSupplierCnic"
                      minLength={15}
                      maxLength={15}
                      placeholder="XXXXX-XXXXXXX-X"
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputSupplierMobile">Mobile</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputSupplierMobile"
                      minLength={11}
                      maxLength={11}
                      placeholder="XXXX-XXXXXXX"
                      required
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputSupplierTelephone">Telephone</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputSupplierTelephone"
                      minLength={11}
                      maxLength={11}
                      placeholder="XXXX-XXXXXXX"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="inputSupplierDesc">Address</label>
                  <textarea
                    className="form-control"
                    id="inputSupplierAddress"
                    rows={3}
                    placeholder="Detailed Address of the Supplier/Company"
                    required
                    defaultValue={""}
                  />
                </div>
                <div className="col text-center">
                  <button id="btn" type="submit" className="btn btn-primary">
                    Add Supplier
                  </button>
                </div>
                <div
                  id="alert-success"
                  className="alert alert-success alert-dismissible"
                >
                  <button type="button" className="close" data-dismiss="alert">
                    ×
                  </button>
                  <strong>Supplier Successfully Inserted!</strong>
                </div>
                <div
                  id="alert-danger"
                  className="alert alert-danger alert-dismissible"
                >
                  <button type="button" className="close" data-dismiss="alert">
                    ×
                  </button>
                  <strong>
                    Supplier could not be Inserted, Check your connection and
                    try again!
                  </strong>
                </div>
              </form>
              <table
                id="dataTable"
                className="display"
                style={{ width: "100%" }}
              >
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Name</th>
                    <th>CNIC</th>
                    <th>Mobile</th>
                    <th>Telephone</th>
                    <th>Address</th>
                    <th>Action</th>
                    <th>View</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="confirm-delete"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h3>Delete Suppplier</h3>
            </div>
            <div className="modal-body">
              <p id="delete-body">
                Are you sure you want to delete supplier named:{" "}
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                id="cancal-btn"
                className="btn btn-default"
                data-dismiss="modal"
              >
                Cancel
              </button>
              <a href="/" className="btn btn-danger btn-ok" id="delete-btn">
                Delete
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade modalEditClass"
        id="myModal"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header text-center">
              <h4 className="modal-title w-100 font-weight-bold text-secondary ml-5">
                Edit Supplier Details
              </h4>
              <button
                type="button"
                className="close text-secondary"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body mx-3 modal-inputs">
              <form
                id="editSuppForm"
                method="PUT"
                encType="multipart/form-data"
              >
                <div className="md-form mb-5">
                  <label
                    data-error="wrong"
                    data-success="right"
                    htmlFor="formNameEdit"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="formNameEdit"
                    className="form-control validate"
                    required
                  />
                </div>
                <div className="md-form mb-5">
                  <label
                    data-error="wrong"
                    data-success="right"
                    htmlFor="formnicEdit"
                  >
                    CNIC
                  </label>
                  <input
                    type="text"
                    id="formNicEdit"
                    className="form-control validate"
                    minLength={15}
                    maxLength={15}
                    required
                  />
                </div>
                <div className="md-form mb-5">
                  <label
                    data-error="wrong"
                    data-success="right"
                    htmlFor="formMobileEdit"
                  >
                    Mobile
                  </label>
                  <input
                    type="text"
                    id="formMobileEdit"
                    className="form-control validate"
                    minLength={11}
                    maxLength={11}
                    required
                  />
                </div>
                <div className="md-form mb-5">
                  <label
                    data-error="wrong"
                    data-success="right"
                    htmlFor="formTelephoneEdit"
                  >
                    Telephone
                  </label>
                  <input
                    type="text"
                    id="formTelephoneEdit"
                    className="form-control validate"
                    minLength={11}
                    maxLength={11}
                    required
                  />
                </div>
                <div className="md-form mb-5">
                  <label
                    data-error="wrong"
                    data-success="right"
                    htmlFor="formAddressEdit"
                  >
                    Address
                  </label>
                  <textarea
                    type="text"
                    rows={2}
                    id="formAddressEdit"
                    className="form-control validate"
                    required
                    defaultValue={""}
                  />
                </div>
                <div className="modal-footer">
                  <input
                    id="editEmp"
                    formMethod="PUT"
                    type="submit"
                    className="btn btn-outline-secondary btn-block editInside"
                    data-dismiss="modal"
                    defaultValue="Edit Supplier"
                  />
                  <i className="far fa-paper-plane ml-1" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="suppliesModal"
        style={{ width: "95%" }}
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4>Supplies</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-hidden="true"
              >
                ×
              </button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div
                  className="responsive-table"
                  style={{ width: "100%", margin: "30px" }}
                >
                  <table
                    className="table table-bordered"
                    style={{ marginBottom: "2em" }}
                    id="suppliesTable"
                  >
                    <thead>
                      <tr>
                        <th>No.</th>
                        <th>Supplier</th>
                        <th>Date</th>
                        <th>Bill</th>
                        <th>Paid</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody></tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Supplier;
