import { useState } from 'react';
import '../styles/GeneralInfo.css';

export default function GeneralInfo({ onChange }) {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    email: '',
    phone: '',
    city: '',
    country: '',
  });

  function handleChange(e) {
    const { name, value } = e.target;

    const newForm = {
      ...form,
      [name]: value,
    };

    setForm(newForm);
    onChange?.(newForm);
  }

  return (
    <div className="container">
      <div className="formRow">
        <div className="formGroup">
          <label className="label">
            First Name <span className="required">*</span>
          </label>
          <input
            type="text"
            className="input"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            placeholder="Enter your first name"
          />
        </div>

        <div className="formGroup">
          <label className="label">
            Last Name <span className="required">*</span>
          </label>
          <input
            type="text"
            className="input"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            placeholder="Enter your last name"
          />
        </div>
      </div>

      <div className="formRow">
        <div className="formGroup">
          <label className="label">
            Email <span className="required">*</span>
          </label>
          <input
            type="email"
            className="input"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
          />
          <div className="hint">You will be replied here.</div>
        </div>

        <div className="formGroup">
          <label className="label">
            Phone <span className="required">*</span>
          </label>
          <input
            type="tel"
            className="input"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+"
          />
        </div>
      </div>

      <div className="formRow">
        <div className="formGroup">
          <label className="label">
            City <span className="required">*</span>
          </label>
          <input
            type="text"
            className="input"
            name="city"
            value={form.city}
            onChange={handleChange}
            placeholder="e.g. Amsterdam"
          />
        </div>

        <div className="formGroup">
          <label className="label">
            Country <span className="required">*</span>
          </label>
          <input
            type="text"
            className="input"
            name="country"
            value={form.country}
            onChange={handleChange}
            placeholder="Your country"
          />
        </div>
      </div>

      <div className={`formRow formRowSingle`}>
        <div className="formGroup">
          <label className="label">Gender</label>
          <select
            className="select"
            name="gender"
            value={form.gender}
            onChange={handleChange}
          >
            <option value="">Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Non-binary">Non-binary</option>
            <option value="Prefer not to say">Prefer not to say</option>
          </select>
        </div>
      </div>
    </div>
  );
}
