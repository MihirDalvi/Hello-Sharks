import { useState } from "react";
import "./RegistrationPage.css";
import "bootstrap/dist/css/bootstrap.min.css";

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    ceo: "",
    //founder: "",
    cofounder: "",
    revenue: "",
    email: "",
    password: "",
    document: null,
    aboutCompany: "",
  });

  const [errors, setErrors] = useState({});

  // Validation Regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  // Handle File Change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, document: file });
    if (!file) {
      setErrors((prev) => ({ ...prev, document: "Please upload a document." }));
    } else {
      setErrors((prev) => ({ ...prev, document: "" }));
    }
  };

  // Validate Individual Fields
  const validateField = (name, value) => {
    let error = "";

    if (name === "companyName" && !value) error = "Company name is required.";
    if (name === "ceo" && !value) error = "CEO name is required.";
    // if (name === "founder" && !value) error = "Founder name is required.";
    if (name === "email" && !emailRegex.test(value))
      error = "Enter a valid email.";
    if (name === "password" && !passwordRegex.test(value))
      error = "Password must be at least 8 characters and include a number.";
    if (name === "aboutCompany" && !value) error = "About Company is required.";
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  // Validate Entire Form
  const validateForm = () => {
    const validationErrors = {};
    Object.keys(formData).forEach((field) => {
      if (field !== "document") {
        validateField(field, formData[field]);
      }
    });
    if (!formData.document)
      validationErrors.document = "Please upload a document.";
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Registration Successful!");
      console.log("Form Data:", formData);
    }
  };

  return (
    <div className="registration-page container mt-5">
      <div className="form-container shadow p-4 rounded">
        <h2 className="text-center mb-4">Investor Registration</h2>
        <form onSubmit={handleSubmit}>
          {/* Company Name */}
          <div className="form-group mb-3">
            <label>Company Name</label>
            <input
              type="text"
              name="companyName"
              className="form-control"
              value={formData.companyName}
              onChange={handleChange}
            />
            {errors.companyName && (
              <small className="text-danger">{errors.companyName}</small>
            )}
          </div>

          {/* CEO */}
          <div className="form-group mb-3">
            <label>CEO</label>
            <input
              type="text"
              name="ceo"
              className="form-control"
              value={formData.ceo}
              onChange={handleChange}
            />
            {errors.ceo && <small className="text-danger">{errors.ceo}</small>}
          </div>

          {/* Founder
          <div className="form-group mb-3">
            <label>Founder</label>
            <input
              type="text"
              name="founder"
              className="form-control"
              value={formData.founder}
              onChange={handleChange}
            />
            {errors.founder && <small className="text-danger">{errors.founder}</small>}
          </div> */}

          {/* Co-Founder */}
          <div className="form-group mb-3">
            <label>Co-Founder</label>
            <input
              type="text"
              name="cofounder"
              className="form-control"
              value={formData.cofounder}
              onChange={handleChange}
            />
          </div>

          {/* Revenue */}
          <div className="form-group mb-3">
            <label>Revenue Per Year</label>
            <input
              type="number"
              name="revenue"
              className="form-control"
              value={formData.revenue}
              onChange={handleChange}
            />
          </div>

          {/* Email */}
          <div className="form-group mb-3">
            <label>Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <small className="text-danger">{errors.email}</small>
            )}
          </div>

          {/* Password */}
          <div className="form-group mb-3">
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <small className="text-danger">{errors.password}</small>
            )}
          </div>

          {/* About Company */}
          <div className="form-group mb-4">
            <label>About Company</label>
            <textarea
              name="aboutCompany"
              className="form-control"
              rows="4"
              value={formData.aboutCompany}
              onChange={handleChange}
            />
            {errors.aboutCompany && (
              <small className="text-danger">{errors.aboutCompany}</small>
            )}
          </div>

          {/*Profile Photo Upload */}
          <div className="form-group mb-4">
            <label>Profile Image</label>
            <input
              type="file"
              name="document"
              className="form-control"
              onChange={handleFileChange}
            />
            {errors.document && (
              <small className="text-danger">{errors.document}</small>
            )}
          </div>

          {/* Document Upload */}
          <div className="form-group mb-4">
            <label>Document for Verification</label>
            <input
              type="file"
              name="document"
              className="form-control"
              onChange={handleFileChange}
            />
            {errors.document && (
              <small className="text-danger">{errors.document}</small>
            )}
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-100">
            Register
          </button>
        </form>

        {/* Already Have an Account */}
        <div className="text-center mt-3">
          <p>
            Already have an account?{" "}
            <a href="/login" className="text-primary font-weight-bold">
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
