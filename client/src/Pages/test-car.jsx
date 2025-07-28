import React, { useState } from 'react';
import { Widget } from '@uploadcare/react-widget';

const CareerForm = () => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    jobRole: '',
    message: '',
    resumeUrl: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (fileInfo) => {
    setForm((prev) => ({ ...prev, resumeUrl: fileInfo.cdnUrl }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.resumeUrl) {
      setStatus('❌ Please upload a resume.');
      return;
    }

    try {
      const res = await fetch('http://localhost:3000/api/career/addCareer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (data.success) {
        setStatus('✅ Application submitted successfully!');
        setForm({
          fullName: '',
          email: '',
          phoneNumber: '',
          jobRole: '',
          message: '',
          resumeUrl: '',
        });
      } else {
        setStatus('❌ Submission failed.');
        console.error(data);
      }
    } catch (error) {
      setStatus('❌ Network error.');
      console.error(error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-900 text-white rounded">
      <h2 className="text-xl font-bold mb-4">Career Application</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="fullName" placeholder="Full Name" value={form.fullName} onChange={handleChange} required className="w-full p-2 rounded bg-gray-800 border border-gray-600" />
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required className="w-full p-2 rounded bg-gray-800 border border-gray-600" />
        <input type="text" name="phoneNumber" placeholder="Phone Number" value={form.phoneNumber} onChange={handleChange} required className="w-full p-2 rounded bg-gray-800 border border-gray-600" />
        <input type="text" name="jobRole" placeholder="Job Role" value={form.jobRole} onChange={handleChange} required className="w-full p-2 rounded bg-gray-800 border border-gray-600" />
        <textarea name="message" placeholder="Message (optional)" value={form.message} onChange={handleChange} className="w-full p-2 rounded bg-gray-800 border border-gray-600" />

        <Widget
          publicKey="alsk"
          onChange={handleFileUpload}
          tabs="file url"
          previewStep
          inputAcceptTypes=".pdf,.doc,.docx"
        />

        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 p-2 rounded">Submit</button>
      </form>
      {status && <p className="mt-4 text-sm">{status}</p>}
    </div>
  );
};

export default CareerForm;
