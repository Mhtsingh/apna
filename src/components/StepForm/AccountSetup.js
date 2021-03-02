import React, { Component } from "react";
import "./Design.css";
import { Form, Col } from "react-bootstrap";
import { NavBtnLink } from "./Confirm";

export class AccountSetup extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeState = this.onChangeState.bind(this);

    this.state = {
      client_name: "",
      client_email: "",
      client_phone: "",
      client_state: "",
    };
  }

  onChangeName(e) {
    this.setState({
      client_name: e.target.value,
    });
  }

  onChangeEmail(e) {
    this.setState({
      client_email: e.target.value,
    });
  }
  onChangePhone(e) {
    this.setState({
      client_phone: e.target.value,
    });
  }
  onChangeState(e) {
    this.setState({
      client_state: e.target.value,
    });
  }

  render() {
    const { values, inputChange } = this.props;

    return (
      <div className="container form-wrap">
        <h1 className="mb-5 title">INVENTOR INFORMATION</h1>
        <Form>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label className="form_label">Name*</Form.Label>
            <Form.Control
              type="text"
              name="client_name"
              placeholder="Your Name"
              value={this.state.name}
              onChange={this.onChangeName}
            />
            <Form.Control.Feedback type="invalid">
              Please provide your name.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label className="form_label">Email*</Form.Label>
            <Form.Control
              type="email"
              name="client_email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label className="form_label">Phone*</Form.Label>
            <Form.Control
              type="tel"
              name="client_phone"
              placeholder="Number"
              value={this.state.phone}
              onChange={this.onChangeNumb}
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label className="form_label">Your State</Form.Label>
            {/* <Form.Control type="text"  name="client_state" placeholder="State" value={this.state.state} onChange={this.onChangeState}/> */}
            <Form.Control
              id="promade"
              name="client_state"
              placeholder="State"
              value={this.state.state}
              onChange={this.onChangeState}
              as="select"
              defaultValue="Choose..."
            >
              <option>Choose...</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Andaman and Nicobar Islands">
                Andaman and Nicobar Islands
              </option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Bihar">Bihar</option>
              <option value="Chandigarh">Chandigarh</option>
              <option value="Chhattisgarh">Chhattisgarh</option>
              <option value="Dadar and Nagar Haveli">
                Dadar and Nagar Haveli
              </option>
              <option value="Daman and Diu">Daman and Diu</option>
              <option value="Delhi">Delhi</option>
              <option value="Lakshadweep">Lakshadweep</option>
              <option value="Puducherry">Puducherry</option>
              <option value="Goa">Goa</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Haryana">Haryana</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Jammu and Kashmir">Jammu and Kashmir</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Kerala">Kerala</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Manipur">Manipur</option>
              <option value="Meghalaya">Meghalaya</option>
              <option value="Mizoram">Mizoram</option>
              <option value="Nagaland">Nagaland</option>
              <option value="Odisha">Odisha</option>
              <option value="Punjab">Punjab</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Sikkim">Sikkim</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Telangana">Telangana</option>
              <option value="Tripura">Tripura</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Uttarakhand">Uttarakhand</option>
              <option value="West Bengal">West Bengal</option>
            </Form.Control>
          </Form.Group>
        </Form>

        <br />
        <div className=" row button_back1">
          <NavBtnLink  to="/">Back</NavBtnLink>
          <div className="text-right">
            <button className="btn btn-primary" onClick={this.continue}>
              Continue
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default AccountSetup;
