import axios from "axios";
import React, { Component } from "react";
import { Form, Col } from "react-bootstrap";
import SignaturePad from "react-signature-canvas";

export class SocialProfiles extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  constructor(props) {
    super(props);
    this.onChangeInvention = this.onChangeInvention.bind(this);
    this.onChangeInventionBg = this.onChangeInventionBg.bind(this);
    this.onChangeDrawingbrif = this.onChangeDrawingbrif.bind(this);
    this.onChangeDrawingDetail = this.onChangeDrawingDetail.bind(this);
    this.onChangeSimilarInvention = this.onChangeSimilarInvention.bind(this);
    this.onChangeDifference = this.onChangeDifference.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeIdeaShare = this.onChangeIdeaShare.bind(this);
    this.onChangeIdeaSold = this.onChangeIdeaSold.bind(this);

    this.state = {
      idea_title: "",
      idea_abst: "",
      idea_backg: "",
      idea_desc: "",
      idea_desc2: "",
      idea_invt: "",
      idea_differ: "",
      idea_date: "",
      idad_share: "",
    };
  }

  onChangeInvention(e) {
    this.setState({
      idea_title: e.target.value,
    });
  }

  onChangeInventionBg(e) {
    this.setState({
      client_email: e.target.value,
    });
  }
  onChangeDrawingbrif(e) {
    this.setState({
      idea_summery: e.target.value,
    });
  }
  onChangeDrawingDetail(e) {
    this.setState({
      idea_desc: e.target.value,
    });
  }

  onChangeSimilarInvention(e) {
    this.setState({
      idea_desc2: e.target.value,
    });
  }
  onChangeDifference(e) {
    this.setState({
      idea_invt: e.target.value,
    });
  }
  onChangeDate(e) {
    this.setState({
      idea_differ: e.target.value,
    });
  }
  onChangeIdeaShare(e) {
    this.setState({
      idea_date: e.target.value,
    });
  }
  onChangeIdeaSold(e) {
    this.setState({
      idad_share: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const obj = {
      idea_title: this.state.idea_title,
      idea_abst: this.state.idea_abst,
      idea_backg: this.state.idea_backg,
      idea_desc: this.state.idea_desc,
      idea_desc2: this.state.idea_desc2,
      idea_invt: this.state.idea_invt,
      idea_differ: this.state.idea_differ,
      idea_date: this.state.idea_date,
      idea_share: this.state.idea_share,
    };

    axios
      .post("http://localhost/api/insert.php", obj)
      .then((res) => console.log(res.data));
  }

  render() {
    const { values, inputChange } = this.props;

    return (
      <div className="container form-wrap">
        <h1 className="mb-5 title">INVENTION DETAIL</h1>

        <div className="container form_cont">
          <Form onSubmit={this.onSubmit}>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label className="form_label ">
                  Name of Invention/Idea*
                </Form.Label>
                <Form.Control
                  type="text"
                  name="idea_title"
                  value={this.state.title}
                  onChange={this.onChangeTitle}
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label className="form_label">Category*</Form.Label>
                {/* <Form.Control
                  type="text"
                  name="idea_abst"
                  value={this.state.abstract} onChange={this.onChangeAbstract}
                /> */}
                <Form.Control id="promade" as="select" defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>Agriculture</option>
                  <option>Architecture</option>
                  <option>Automotive</option>
                  <option>Clothing</option>
                  <option>Computers</option>
                  <option>Electronics</option>
                  <option>Envionment</option>
                  <option>Exercise</option>
                  <option>Food & Drink</option>
                  <option>Health</option>
                  <option>Kids</option>
                  <option>Medicine</option>
                  <option>Houseware</option>
                  <option>Mobile App</option>
                  <option>Pets</option>
                  <option>Science</option>
                  <option>Sports</option>
                  <option>Technology</option>
                  <option>Travel</option>
                  <option>Other</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label className="form_label">
                  Summary of Invention/Idea*
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="idea_summery"
                  placeholder="What is it? What does it do? Why is it needed?"
                  value={this.state.invention}
                  onChange={this.onChangeInvention}
                />
              </Form.Group>

              {/* <Form.Group as={Col} >
                <Form.Label className="form_label">
                  Background of Invention*
                </Form.Label>
                <Form.Control
                  type="text"
         
                  name="idea_backg"
                  placeholder="Background of invention"
                  value={this.state.inventionbg} onChange={this.onChangeInventionBg}

                />
              </Form.Group> */}
            </Form.Row>

            {/* <Form.Group >
              <Form.Label className="form_label">
              Brief Description of invention/Idea
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="idea_desc"
                placeholder="One sentence describing your invention/idea ?"
                value={this.state.drawingbrif} onChange={this.onChangeDrawingbrif}
              />
            </Form.Group> */}

            <Form.Group>
              <Form.File
                className="form_label"
                label="Drawing of Invention/Idea (if available)"
              />
            </Form.Group>

            {/* <Form.Group >
              <Form.Label className="form_label">
                Detailed Description of Drawing*
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                name="idea_desc2"
                placeholder="Description of device or method in details--Be as describe as possible "
                value={this.state.drawingdetail} onChange={this.onChangeDrawingDetail}

              />
            </Form.Group> */}

            <Form.Group>
              <Form.Label className="form_label">
                Similar Invention ?
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="idea_invt"
                placeholder="List any other products/services/methods you know about that solve the same problem or are similar to your invention"
                value={this.state.similarInvention}
                onChange={this.onChangeSimilarInvention}
              />
            </Form.Group>

            {/* <Form.Group >
              <Form.Control
                as="textarea"
               
                rows={3}
                name="idea_differ"
                placeholder="How is your invention/Product superior ? What make your product Differnt?"
                value={this.state.difference} onChange={this.onChangeDifference}
              />
            </Form.Group> */}

            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label className="form_label">
                  Date of Invention/Idea*
                </Form.Label>
                <Form.Control
                  type="date"
                  name="idea_date"
                  placeholder="Title"
                  value={this.state.date}
                  onChange={this.onChangeDate}
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label className="form_label">
                  Have you made it or Used it? (if Yes, when ?)
                </Form.Label>
                <Form.Control
                  type="date"
                  name="idea_date"
                  placeholder="Title"
                  value={this.state.date}
                  onChange={this.onChangeDate}
                />

                {/* <Form.Control id="promade" as="select" defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>Yes</option>
                  <option>NO</option>
                </Form.Control> */}
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label className="form_label">
                  Have you told anyone about it?
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  name="idea_share"
                  placeholder="If yes, who & when?"
                  value={this.state.ideaShare}
                  onChange={this.onChangeIdeaShare}
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label className="form_label">
                  Have you offered it for sale or sold it?
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  name="idea_draw"
                  placeholder="If yes, when & to whom?"
                  value={this.state.ideaSold}
                  onChange={this.onChangeIdeaSold}
                />
              </Form.Group>
            </Form.Row>

            {/* <Form.Group>
              <Form.Label className="form_label">
                I have read and understood this complete document
              </Form.Label>
            </Form.Group> */}
            {/* <Form.Group> 
              <Form.Check
                className="form_label"
                required
                label="Agree to terms and conditions"
                feedback="You must agree before submitting."
              />
            </Form.Group> */}
            <Form.Row>
            <Form.Group >
                <Form.File className="form_label" label="Submit Signature" />
            <Form.Group> 
              <Form.Check
                className="form_label term_chkbox"
                required
                label="Agree to terms and conditions"
                feedback="You must agree before submitting."
              />
            </Form.Group>
              </Form.Group>
            <Form.Group className="sign_box">
              <Form.Label className="form_label">Inventor's Signature</Form.Label>
              <div className="signature">
                <SignaturePad className="canva" />
              </div>
            </Form.Group>
            </Form.Row>

          </Form>
        </div>
        <br />

        <div className="row button_back ">
          <div>
            <button className="btn btn-danger button_space" onClick={this.back}>
              Back
            </button>
          </div>
          <div className="col-6 text-right">
            <button className="btn btn-primary button_space" type="submit">
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SocialProfiles;