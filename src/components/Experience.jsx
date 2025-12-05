import { useState } from 'react';
import '../styles/Experience.css';

export default function Experience({ onChange }) {
  const [form, setForm] = useState({
    company: '',
    role: '',
    startDate: '',
    endDate: '',
    location: '',
    achievements: '',
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
            Company Name <span className="required">*</span>
          </label>
          <input
            type="text"
            className="input"
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="e.g. Google, Microsoft"
          />
        </div>

        <div className="formGroup">
          <label className="label">
            Job Title <span className="required">*</span>
          </label>
          <input
            type="text"
            className="input"
            name="role"
            value={form.role}
            onChange={handleChange}
            placeholder="e.g. Senior Developer"
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

      <div className={`formRow formRowSingle`}>
        <div className="formGroup">
          <label className="label">Responsibilities & Achievements</label>
          <textarea
            className="textarea"
            name="achievements"
            value={form.achievements}
            onChange={handleChange}
            placeholder="Describe your key responsibilities and notable achievements..."
          />
        </div>
      </div>
    </div>
  );
}
