import { GrMail } from "react-icons/gr";
import { FaPhoneAlt } from "react-icons/fa";
import validate from "./ValidateInfo.js";
import useForm from "./ContactForm";
import "./index.css";

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className="form-content-right">
      <form onSubmit={handleSubmit} className="form" noValidate>
        <div className="content_wrap">
          <h1>CONTACT US</h1>
          <h2>Feel Free to contact us, we will get back to you soon !</h2>
          <div className="form_lable">
            <ul>
              <li>
                <GrMail /> support@dharcorp.com
              </li>
              <li>
                <FaPhoneAlt /> +1-9169951115
              </li>
              <li>
                <FaPhoneAlt /> +91- 6280882955
              </li>
            </ul>
          </div>
        </div>
        <div className="form_wrap">
          <div className="form-inputs">
            <label className="form-label">Name</label>
            <input
              className="form-input"
              type="text"
              id="fname"
              name="fullname"
              placeholder="Name"
              value={values.fullname}
              onChange={handleChange}
            />
            {errors.fullname && <p>{errors.fullname}</p>}
          </div>
          <div className="form-inputs">
            <label className="form-label">Email</label>
            <input
              className="form-input"
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div className="form-inputs">
            <label className="form-label">Conatct Number</label>
            <input
              className="form-input"
              type="contactnumber"
              id="cnumber"
              name="contactnumber"
              placeholder="Number"
              value={values.contactnumber}
              onChange={handleChange}
            />
            {errors.contactnumber && <p>{errors.contactnumber}</p>}
          </div>
          <button className="form-input-btn" type="submit">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormSignup;
