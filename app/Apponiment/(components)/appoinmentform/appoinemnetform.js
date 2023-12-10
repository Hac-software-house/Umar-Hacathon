"use client"
import { useState } from 'react';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    nic: '',
    dob: '',
    gender: '',
    appointmentDate: '',
    appointmentTime: '',
    departmentName: '',
    doctorName: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
   <>
   <h1 className='mx-24 text-2xl font-bold pt-2'>Apponiment</h1>
    <form onSubmit={handleSubmit} className="w-full md:w-md mt-8">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mx-4 md:mx-8">
    <div className="mb-4 lg:mx-20 text-xl">
      <label htmlFor="firstName" className="block">
        First Name:
      </label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        placeholder='First Name'
        value={formData.firstName}
        onChange={handleChange}
        className="mt-1 p-2 w-full md:w-80 border rounded-md"
      />
    </div>
    <div className="mb-4 text-xl">
      <label htmlFor="lastName" className="block">
        Last Name:
      </label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        placeholder='Last Name'
        value={formData.lastName}
        onChange={handleChange}
        className="mt-1 p-2 w-full md:w-80 border rounded-md"
      />
    </div>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mx-4 md:mx-8">
    <div className="mb-4 lg:mx-20 text-xl">
      <label htmlFor="email" className="block">
      Email
      </label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder='Email'
        value={formData.email}
        onChange={handleChange}
        className="mt-1 p-2 w-full md:w-80 border rounded-md"
      />
    </div>
   
    <div className="mb-4 text-xl">
          <label htmlFor="mobileNumber" className="block">
            Mobile Number
          </label>
          <input
            type="text"
            id="mobileNumber"
            name="mobileNumber"
            placeholder='Enter your mobile number'
            value={formData.mobileNumber}
            onChange={handleChange}
            className="mt-1 p-2 w-full md:w-80 border rounded-md"
            required
          />
        </div>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mx-4 md:mx-8">
    <div className="mb-4 lg:mx-20 text-xl">
      <label htmlFor="nic" className="block">
      CNIC:
      </label>
      <input
        type="nic"
        id="nic"
        name="nic"
        placeholder='CNIC'
        value={formData.nic}
        onChange={handleChange}
        className="mt-1 p-2 w-full md:w-80 border rounded-md"
      />
    </div>
   
    <div className="mb-4 text-xl">
  <label htmlFor="dob" className="block">
    Date of Birth:
  </label>
  <input
    type="date"
    id="dob"
    name="dob"
    placeholder='YYYY-MM-DD'
    value={formData.dob}
    onChange={handleChange}
    className="mt-1 p-2 w-full md:w-80 border rounded-md"
    required
  />
</div>
  </div>

  {/*  */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mx-4 md:mx-8">
    <div className="mb-4 lg:mx-20 text-xl">
      <label htmlFor="email" className="block">
      Gender
      </label>
      <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="mt-1 p-2 w-full md:w-80 border rounded-md"
            required
          >
            <option value="" disabled>
              Select your gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
    </div>
   
    <div className="mb-4 text-xl">
  <label htmlFor="appointmentDate" className="block">
    Appointment Date
  </label>
  <input
    type="date"
    id="appointmentDate"
    name="appointmentDate"
    placeholder='Select appointment date'
    value={formData.appointmentDate}
    onChange={handleChange}
    className="mt-1 p-2 w-full md:w-80 border rounded-md"
    required
  />
</div>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mx-4 md:mx-8">
    <div className="mb-4 lg:mx-20 text-xl">
  <label htmlFor="departmentName" className="block">
    Department Name
  </label>
  <input
    type="text"
    id="departmentName"
    name="departmentName"
    placeholder='Enter department name'
    value={formData.departmentName}
    onChange={handleChange}
    className="mt-1 p-2 w-full md:w-80 border rounded-md"
    required
  />
</div>
<div className="mb-4 text-xl">
  <label htmlFor="doctorName" className="block">
    Doctor Name
  </label>
  <input
    type="text"
    id="doctorName"
    name="doctorName"
    placeholder='Enter doctor name'
    value={formData.doctorName}
    onChange={handleChange}
    className="mt-1 p-2 w-full md:w-80 border rounded-md"
    required
  />
</div>

    </div>

    <div class="flex justify-center mr-32">
  <button
    type="submit"
    class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mt-4 md:mt-0"
  >
    Register
  </button>
</div>

</form>
</>
  );
};

export default AppointmentForm;
