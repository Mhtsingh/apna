import React, { useState } from "react";
import { Form, Col } from "react-bootstrap";
import SignaturePad from "react-signature-canvas";
import pdf from "../../documents/APNA_SAPANA_Agreement.pdf";
import "./Design.css"

const Step2 = ({ formData, setForm, navigation,register}) => {
  const {
    idea_title,
    idea_cat,
    idea_summery,
    idea_invt,
    idea_date,
    idea_date2,
    idea_share,
    idea_draw,
  } = formData;
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <>
      <div className="container form-wrap">
        <h1 className="mb-5 title">INVENTION DETAIL</h1>

        <div className="container form_cont">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label className="form_label ">
                  Name of Invention/Idea*
                </Form.Label>
                <Form.Control
                  type="text"
                  name="idea_title"
                  value={idea_title}
                  onChange={setForm}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide information.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label className="form_label">Category*</Form.Label>

                <Form.Control
                  id="promade"
                  as="select"
                  name="idea_cat"
                  value={idea_cat}
                  onChange={setForm}
                  required
                >
                  <option value="" disabled>Choose....</option>
                  <option value="Agriculture">Agriculture</option>
                  <option value="Architecture">Architecture</option>
                  <option value="Automotive">Automotive</option>
                  <option value="Clothing">Clothing</option>
                  <option value="Computers">Computers</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Envionment">Envionment</option>
                  <option value="Exercise">Exercise</option>
                  <option value="Food & Drink">Food & Drink</option>
                  <option value="Health">Health</option>
                  <option value="Kids">Kids</option>
                  <option value="Medicine">Medicine</option>
                  <option value="Houseware">Houseware</option>
                  <option value="Mobile App">Mobile App</option>
                  <option value="Pets">Pets</option>
                  <option value="Science">Science</option>
                  <option value="Sports">Sports</option>
                  <option value="Technology">Technology</option>
                  <option value="Travel">Travel</option>
                  <option value="other">Other</option>
                  { idea_cat ? <Form.Control type="text" name="idea_abst" /> : "" }
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  Please choose option.
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <br />
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label className="form_label">
                  Summary of Invention/Idea*
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="idea_summery"
                  value={idea_summery }
                  onChange={setForm}
                  placeholder="What is it? What does it do? Why is it needed?"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide information.
                </Form.Control.Feedback>
                <br />
              </Form.Group>
            </Form.Row>
            <Form.Group>
              <Form.File
                className="form_label"
                ref={register}
                label="Drawing of Invention/Idea (if available)"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide information.
              </Form.Control.Feedback>
              <br />
            </Form.Group>
            <Form.Group>
              <Form.Label className="form_label">
                Similar Invention ?
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="idea_invt"
                value={idea_invt }
                  onChange={setForm}
                placeholder="List any other products/services you know about that solve the same problem or are similar to your invention/idea"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide information.
              </Form.Control.Feedback>
              <br />
            </Form.Group>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label className="form_label">
                  Date of Invention/Idea*
                </Form.Label>
                <Form.Control
                  type="date"
                  name="idea_date"
                  value={idea_date}
                  onChange={setForm}
                  placeholder="Title"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide information.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label className="form_label">
                  Have you made it or Used it? (if Yes, when ?)
                </Form.Label>
                <Form.Control
                  type="date"
                  name="idea_date2"
                  value={idea_date2}
                  onChange={setForm}
                  placeholder="Title"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide information.
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>

            <br />

            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label className="form_label">
                  Have you told anyone about your Invention/Idea?
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  name="idea_share"
                  value={idea_share}
                  onChange={setForm}
                  placeholder="If yes, who & when?"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide information.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label className="form_label">
                  Have you sold your Invention/Idea?
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  name="idea_draw"
                  value={idea_draw}
                  onChange={setForm}
                  placeholder="If yes, when & to whom?"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide information.
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <br />
            <Form.Row>
              <Form.Group>
                <div className="upload-btn-wrapper">
                  <p className="sig_btn">Sigature</p>
                  <input ref={register} type="file" name="myfile" />
                </div>
                <Form.Label className="form_label2">
                  Please review
                  <a target="_blank" href={pdf}>
                    Apna Sapana's Terms & Conditions
                  </a>
                </Form.Label>

                <Form.Group controlId="formBasicCheckbox" class="form-check">
                  <Form.Check
                    type="checkbox"
                    label="I have read and understand the Terms & Conditions"
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <>
                    <br />
                  </>
                </Form.Group>
              </Form.Group>
              <Form.Group className="sign_box" md="6">
                <Form.Label className="form_label">
                  Inventor's Signature
                </Form.Label>
                <div className="signature">
                  <SignaturePad />
                </div>
              </Form.Group>
            </Form.Row>
            <div className="row button_back ">
              <div>
                <button
                  className="btn btn-danger button_space"
                  onClick={() => navigation.previous()}
                >
                  Back
                </button>
              </div>
              <div className="col-6">
                <button className="btn sub_button button_space" type="submit">
                  Submit idea
                </button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Step2;
