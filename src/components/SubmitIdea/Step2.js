import './Design.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Col, Button } from "react-bootstrap";

const Step2 = () => {
    
    return (
      <div className="container form_cont">
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label className="form_label">Title</Form.Label>
            <Form.Control type="text" name="idea-title" placeholder="Title" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label className="form_label">Abstract</Form.Label>
            <Form.Control type="text" name="idea-abst" placeholder="Abstract" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label className="form_label">Summery</Form.Label>
            <Form.Control type="text" name="idea-summery" placeholder="Summery of Invention" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label className="form_label">Background</Form.Label>
            <Form.Control type="text" name="idea-backg" placeholder="Background of invention" />
          </Form.Group>
        </Form.Row>

        <Form.Group>
          <Form.File className="form_label"
            id="exampleFormControlFile1"
            label="Drawing of Invention"
          />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label className="form_label">
            Brife Description of Drawing
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="idea-desc"
            placeholder="One sentence describing each drawing-- what are we looking at?"
          />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label className="form_label">
            Detailed Description of Drawing
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            name="idea-desc2"
            placeholder="Description of device or method in details--Be as describe as possible "
          />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label className="form_label">Similar Invention?</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="idea-invt"
            placeholder="List any other product/service/methods. You know about that solve the same problem or are similar to your invention"
          />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          {/* <Form.Label className="form_label">Brife Description of Drawing</Form.Label> */}
          <Form.Control
            as="textarea"
            rows={3}
            name="idea-differ"
            placeholder="How is your invention/Product superior ? What make your product Differnt?"
          />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label className="form_label">Date of Invention</Form.Label>
            <Form.Control type="date" name="idea-date" placeholder="Title" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label className="form_label">Made it or Use it?</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
              <option>Choose...</option>
              <option>Yes</option>
              <option>NO</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
            <Form.Label className="form_label">
              Brife Description of Drawing
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              name="idad-share"
              placeholder="Have you told anyone it ?"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
            <Form.Label className="form_label">
              Brife Description of Drawing
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              name="idea-draw"
              placeholder="Have you offered it for sale or sold it?"
            />
          </Form.Group>
        </Form.Row>
       
        </Form>
</div>
     )
}

export default Step2;
