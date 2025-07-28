import React, { useState } from 'react';

const PdfUploader = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const [status, setStatus] = useState('');
  const [uploadedUrl, setUploadedUrl] = useState('');

  const handleFileChange = (e) => {
    setPdfFile(e.target.files[0]);
    setStatus('');
    setUploadedUrl('');
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!pdfFile) {
      setStatus('❌ Please select a PDF file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('pdfFile', pdfFile);

    try {
      const response = await fetch('http://localhost:3000/upload-pdf', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('✅ PDF uploaded successfully!');
        setUploadedUrl(data.url);
      } else {
        setStatus(`❌ Upload failed: ${data.message}`);
      }
    } catch (error) {
      console.error('Error uploading PDF:', error);
      setStatus('❌ Network or server error.');
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded">
      <h2 className="text-lg font-semibold mb-4">Upload PDF</h2>
      <form onSubmit={handleUpload}>
        <input
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          className="mb-4"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Upload PDF
        </button>
      </form>
      {status && <p className="mt-4 text-sm text-gray-700">{status}</p>}
      {uploadedUrl && (
        <div className="mt-2">
          <a href={uploadedUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
            View Uploaded PDF
          </a>
        </div>
      )}
    </div>
  );
};

export default PdfUploader;
