import { useState } from 'react';
import '../styles/Education.css';

export default function Education({ onChange }) {
  const [form, setForm] = useState({
    school: '',
    degree: '',
    startDate: '',
    endDate: '',
    location: '',
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
            School/University <span className="required">*</span>
          </label>
          <input
            type="text"
            className="input"
            name="school"
            value={form.school}
            onChange={handleChange}
            placeholder="e.g. University of Amsterdam"
          />
        </div>

        <div className="formGroup">
          <label className="label">
            Degree/Field <span className="required">*</span>
          </label>
          <input
            type="text"
            className="input"
            name="degree"
            value={form.degree}
            onChange={handleChange}
            placeholder="e.g. Bachelor of Science"
          />
        </div>
      </div>

      <div className="formRow">
        <div className="formGroup">
          <label className="label">
            Start Date <span className="required">*</span>
          </label>
          <input
            type="date"
            className="input"
            name="startDate"
            value={form.startDate}
            onChange={handleChange}
          />
        </div>

        <div className="formGroup">
          <label className="label">
            End Date <span className="required">*</span>
          </label>
          <input
            type="date"
            className="input"
            name="endDate"
            value={form.endDate}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className={`formRow formRowSingle`}>
        <div className="formGroup">
          <label className="label">Location</label>
          <input
            type="text"
            className="input"
            name="location"
            value={form.location}
            onChange={handleChange}
            placeholder="e.g. Amsterdam, Netherlands"
          />
        </div>
      </div>
    </div>
  );
}
