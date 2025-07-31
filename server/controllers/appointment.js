import Appointment from "../models/appointment.js";

import ExcelJS from 'exceljs';

import mailSender from '../utils/mailSender.js';


export const addAppointment = async (req, res) => {
  try {
    const { appointmentType, date, phoneNumber, email } = req.body;

    if (!appointmentType || !date || !phoneNumber || !email) {
      return res.status(400).json({ success: false, message: 'All fields are required.' });
    }

    const newAppointment = new Appointment({
      appointmentType,
      date,
      phoneNumber,
      email,
    });

    await newAppointment.save();

    const allAppointments = await Appointment.find().sort({ createdAt: -1 });

    // Create Excel file
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Appointments');

    worksheet.columns = [
      { header: 'Appointment Type', key: 'appointmentType' },
      { header: 'Date', key: 'date' },
      { header: 'Phone Number', key: 'phoneNumber' },
      { header: 'Email', key: 'email' },
      { header: 'Created At', key: 'createdAt' },
    ];

    allAppointments.forEach((appt) => {
      worksheet.addRow({
        appointmentType: appt.appointmentType,
        date: new Date(appt.date).toLocaleString(),
        phoneNumber: appt.phoneNumber,
        email: appt.email,
        createdAt: new Date(appt.createdAt).toLocaleString(),
      });
    });

    const buffer = await workbook.xlsx.writeBuffer();

    // Send email with Excel attachment
    await mailSender({
      email: 'faizancreation25@gmail.com',
      title: 'New Appointment Booked',
      body: `<p>A new appointment was booked by <strong>${email}</strong>.</p>`,
      attachments: [
        {
          filename: 'appointments.xlsx',
          content: buffer,
          contentType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        },
      ],
    });

    res.status(201).json({
      success: true,
      message: 'Appointment booked and emailed.',
      data: newAppointment,
    });

  } catch (error) {
    console.error('Error adding appointment:', error);
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message,
    });
  }
};

export const getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find().sort({ createdAt: -1 });

    res.status(200).json(appointments);
  } catch (error) {
    console.error('Error fetching appointments:', error);
    res.status(500).json({ message: 'Server error' });
  }
};