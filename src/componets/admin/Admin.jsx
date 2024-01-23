import React, { useState } from 'react';
import './admin.css'
const Admin = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    fullName: '',
    emailAddress: '',
    phoneNumber: '',
    serviceType: '',
    serviceDescription: '',
    startDate: '',
    location: '',
    city: '',
    zipCode: '',
    preferredGender: '',
    experienceLevel: '',
    qualifications: '',
    budgetRange: '',
    communicationMethod: '',
    additionalInformation: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform actions with the form data, e.g., send to a server
    console.log(formData);
  };

    return (
      <div className='form-admin'>
    <form onSubmit={handleSubmit} className='adminform'>
      {/* Personal Information */}
      <label>
        Full Name:
        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
      </label>
      <label>
        Email Address:
        <input type="email" name="emailAddress" value={formData.emailAddress} onChange={handleChange} required />
      </label>
      <label>
        Phone Number:
        <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
      </label>

      {/* Service Details */}
      <label>
        Type of Service Requested:
        <select name="serviceType" value={formData.serviceType} onChange={handleChange} required>
          <option value="">Select Service Type</option>
          {/* Add your service options here */}
        </select>
      </label>
      <label>
        Brief Description of Service Needed:
        <textarea name="serviceDescription" value={formData.serviceDescription} onChange={handleChange} required />
      </label>
          {/* Add other Service Details inputs here */}

<label>
  Brief Description of Service Needed:
  <textarea name="serviceDescription" value={formData.serviceDescription} onChange={handleChange} required />
</label>

          {/* Location */}
          <label>
  Address where the service is needed:
  <input type="text" name="location" value={formData.location} onChange={handleChange} required />
</label>
<label>
  City:
  <input type="text" name="city" value={formData.city} onChange={handleChange} required />
</label>
<label>
  Zip Code:
  <input type="text" name="zipCode" value={formData.zipCode} onChange={handleChange} required />
</label>


          {/* Worker Preferences */}
          
          <label>
  Preferred Gender (if applicable):
  <select name="preferredGender" value={formData.preferredGender} onChange={handleChange}>
    <option value="">Select Gender</option>
    <option value="male">Male</option>
    <option value="female">Female</option>
    <option value="other">Other</option>
  </select>
</label>
<label>
  Experience Level:
  <select name="experienceLevel" value={formData.experienceLevel} onChange={handleChange}>
    <option value="">Select Experience Level</option>
    <option value="beginner">Beginner</option>
    <option value="intermediate">Intermediate</option>
    <option value="expert">Expert</option>
  </select>
</label>
<label>
  Any specific qualifications or certifications required:
  <input type="text" name="qualifications" value={formData.qualifications} onChange={handleChange} />
</label>
    
          {/* Budget and Payment */}
          <label>
  Budget Range:
  <select name="budgetRange" value={formData.budgetRange} onChange={handleChange} required>
    <option value="">Select Budget Range</option>
    {/* Add your budget range options here */}
  </select>
</label>
   

          {/* Communication Preferences */}
          
          <label>
  Preferred Communication Method:
  <select name="communicationMethod" value={formData.communicationMethod} onChange={handleChange} required>
    <option value="">Select Communication Method</option>
    <option value="email">Email</option>
    <option value="phone">Phone</option>
  </select>
</label>
    

      {/* Additional Information */}
      <label>
        Additional Information:
        <textarea name="additionalInformation" value={formData.additionalInformation} onChange={handleChange} />
      </label>
      
            </form>
            <button type="submit">Submit Request</button>
            </div>
  );
};

export default Admin;
