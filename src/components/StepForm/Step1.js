import React, { useState } from "react";
import { Form, Col } from "react-bootstrap";
import "./Design.css"

const Step1 = ({ formData, setForm, navigation }) => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const { client_name, client_email, client_phone, client_state } = formData;

  return (
    <>
      <div className="container form-wrap">
        <h1 className="mb-5 title">INVENTOR INFORMATION</h1>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label className="form_label">Name*</Form.Label>
            <Form.Control
              type="text"
              name="client_name"
              value={client_name}
              onChange={setForm}
              placeholder="Your Name"
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
              value={client_email}
              onChange={setForm}
              placeholder="Email"
            />
            <Form.Control.Feedback type="invalid">
              Please provide email.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label className="form_label">Phone*</Form.Label>
            <Form.Control
              type="tel"
              name="client_phone"
              value={client_phone}
              onChange={setForm}
              placeholder="Number"
            />
            <Form.Control.Feedback type="invalid">
              Please provide your contact number.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label className="form_label">Your State</Form.Label>
            {/* <Form.Control type="text"  name="client_state" placeholder="State" value={this.state.state} onChange={this.onChangeState}/> */}
            <Form.Control
              id="promade"
              name="client_state"
              value={client_state}
              onChange={setForm}
              placeholder="State"
              as="select"
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
            <Form.Control.Feedback type="invalid">
              Please provide information.
            </Form.Control.Feedback>
          </Form.Group>
          <div className=" row button_back1">
            <button
              className="btn btn-danger button_space_bck"
              onClick={() => navigation.previous()}
            >
              Back
            </button>
            <div className="text-right">
              <button
                className="btn sub_button"
                type="submit"
                onClick={() => navigation.next()}
              >
                Continue
              </button>
            </div>
          </div>
        </Form>

        <br />
      </div>
    </>
  );
};

export default Step1;
