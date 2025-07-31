import ExcelJS from 'exceljs';
import Career from '../models/career.js';
import mailSender from '../utils/mailSender.js';
import { uploadFilesToCloudinary } from '../utils/features.js';


export const addCareer = async (req, res) => {
  try {
    const { fullName, email, phoneNumber, jobRole, resumeUrl, message } = req.body;

    if (!resumeUrl) {
      return res.status(400).json({ success: false, message: 'Resume URL is required.' });
    }

    const newApplication = new Career({
      fullName,
      email,
      phoneNumber,
      jobRole,
      resumeUrl,
      message,
    });

    await newApplication.save();

    const allCareers = await Career.find().sort({ createdAt: -1 });

    // Excel and email logic remains unchanged
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Job Applications');

    worksheet.columns = [
      { header: 'Full Name', key: 'fullName' },
      { header: 'Email', key: 'email' },
      { header: 'Phone Number', key: 'phoneNumber' },
      { header: 'Job Role', key: 'jobRole' },
      { header: 'Resume URL', key: 'resumeUrl' },
      { header: 'Message', key: 'message' },
      { header: 'Date Applied', key: 'createdAt' },
    ];

    allCareers.forEach((career) => {
      worksheet.addRow({
        fullName: career.fullName,
        email: career.email,
        phoneNumber: career.phoneNumber,
        jobRole: career.jobRole,
        resumeUrl: career.resumeUrl,
        message: career.message,
        createdAt: new Date(career.createdAt).toLocaleString(),
      });
    });

    const buffer = await workbook.xlsx.writeBuffer();

    await mailSender({
      email: 'faizancreation25@gmail.com',
      title: 'New Career Application',
      body: `<p>A new application was submitted by <strong>${fullName}</strong>.</p>`,
      attachments: [
        {
          filename: 'career-applications.xlsx',
          content: buffer,
          contentType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        },
      ],
    });

    res.status(201).json({
      success: true,
      message: 'Application submitted and emailed.',
      data: newApplication,
    });

  } catch (error) {
    console.error('Error adding career application:', error);
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message,
    });
  }
};





export const getAllCareers = async (req, res) => {
  try {
    const contacts = await Career.find().sort({ createdAt: -1 }); 
    res.status(200).json({ success: true, data: contacts });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};
