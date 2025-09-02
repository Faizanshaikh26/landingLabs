import ExcelJS from 'exceljs';
import fs from 'fs';
import path from 'path';
import mailSender from '../utils/mailSender.js';
import Contact from '../models/contact.js';

export const addContact = async (req, res) => {
  try {
    const { fullName, phoneNumber, email, service, serviceDescription, message } = req.body;

    // 1. Save the new contact
    const newContact = new Contact({
      fullName,
      phoneNumber,
      email,
      service,
      serviceDescription,
      message,
    });

    await newContact.save();

    // 2. Get all contacts from the database
    const allContacts = await Contact.find().sort({ createdAt: -1 });

    // 3. Create a new Excel file in memory
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Contacts');

    worksheet.columns = [
      { header: 'Full Name', key: 'fullName' },
      { header: 'Phone Number', key: 'phoneNumber' },
      { header: 'Email', key: 'email' },
      { header: 'Service', key: 'service' },
      { header: 'Service Description', key: 'serviceDescription' },
      { header: 'Message', key: 'message' },
      { header: 'Date', key: 'createdAt' },
    ];

    // 4. Add all contacts to the worksheet
    allContacts.forEach(contact => {
      worksheet.addRow({
        fullName: contact.fullName,
        phoneNumber: contact.phoneNumber,
        email: contact.email,
        service: contact.service,
        serviceDescription: contact.serviceDescription,
        message: contact.message,
        createdAt: new Date(contact.createdAt).toLocaleString(),
      });
    });

    const buffer = await workbook.xlsx.writeBuffer();

    // 5. Send the Excel file via email
    await mailSender({
      email: 'info@landinglabs.in',
      title: 'New Contact Submission - Full List',
      body: `<p>A new contact was added: <strong>${fullName}</strong></p><p>Full contact list is attached.</p>`,
      attachments: [
        {
          filename: 'all-contacts.xlsx',
          content: buffer,
          contentType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        },
      ],
    });

    res.status(201).json({ success: true, message: 'Contact added and email sent.', data: newContact });

  } catch (error) {
    console.error('Error adding contact:', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};





export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: contacts });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};
