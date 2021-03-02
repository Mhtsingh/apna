import './Design.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Col, Button } from "react-bootstrap";
const Step1 = () => {
  return (
    <div>
      <div className="container form_cont">
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label className="form_label">Your Name</Form.Label>
            <Form.Control type="text" name="client-name" placeholder="Your Name" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label className="form_label">Email</Form.Label>
            <Form.Control type="email" name="client-email" placeholder="Enter Email" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label className="form_label">Conatct Number</Form.Label>
            <Form.Control type="tel" name="client-phone" placeholder="Enter Number" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label className="form_label">Your State</Form.Label>
            <Form.Control type="text"name="client-state" placeholder="Enter State" />
          </Form.Group>
        </Form.Row>
        </Form>
      </div>
    </div>
  )
}

export default Step1
