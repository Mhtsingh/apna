import "./Design.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Col, Button } from "react-bootstrap";

const Step3 = () => {
  return (
    <div className="container form_cont">
      <Form>
        <Form.Group>
          <Form.Group>
            <Form.File
              className="form_label"
              id="exampleFormControlFile1"
              label="Submit Signature"
            />
          </Form.Group>

          <Form.Check
            className="form_label"
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
          />
        </Form.Group>
        <Button type="submit">Submit form</Button>
      </Form>
    </div>
  );
};

export default Step3;
