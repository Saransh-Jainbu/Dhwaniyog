import React, { useState, useEffect } from "react";
import dashboard_1 from "./assets/dashboard_1.jpeg";
import axios from "axios";
import Leftbar from "./Leftbar";
import { ToastContainer, toast } from "react-toastify";

const AddPatient = () => {
  const [therapistOptions, setTherapistOptions] = useState([]);
  const [categoryOptions, setcategoryOptions] = useState([]);

  useEffect(() => {
    const fetchTherapists = async () => {
      try {
        const response = await axios.get("http://localhost:5000/therapists");
        setTherapistOptions(response.data);
      } catch (error) {
        console.error("Error fetching therapists", error);
      }
    };

    fetchTherapists();
  }, []);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axios.get("http://localhost:5000/category");
        setcategoryOptions(response.data);
      } catch (error) {
        console.error("Error fetching category", error);
      }
    };

    fetchCategory();
  }, []);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    age: "",
    email: "",
    address: "",
    contactNumber: "",
    appointTo: "",
    appointBy: "",
    category: "",
    problem: "",
    sessions: 0,
    status: "",
    image: [],
    additionalImage: [],
  });

  const [imagePreview, setImagePreview] = useState([]);
  const [additionalImagePreview, setAdditionalImagePreview] = useState(null);

  const handleChange = (e) => {
    if (e.target.name === "image") {
      const files = Array.from(e.target.files);
      const previews = files.map((file) => {
        if (file.type.startsWith("image/")) {
          return { type: "image", url: URL.createObjectURL(file) };
        } else if (file.type === "application/pdf") {
          return { type: "pdf", name: file.name };
        } else {
          return { type: "other", name: file.name };
        }
      });

      setFormData({
        ...formData,
        image: files,
      });

      setImagePreview(previews);
    } else if (e.target.name === "additionalImage") {
      const file = e.target.files[0];
      if (file.type.startsWith("image/")) {
        setAdditionalImagePreview({
          type: "image",
          url: URL.createObjectURL(file),
        });
      } else if (file.type === "application/pdf") {
        setAdditionalImagePreview({ type: "pdf", name: file.name });
      } else {
        setAdditionalImagePreview({ type: "other", name: file.name });
      }

      setFormData({
        ...formData,
        additionalImage: file,
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in formData) {
      if (key === "image") {
        formData.image.forEach((file) => data.append("image", file));
      } else {
        data.append(key, formData[key]);
      }
    }
    try {
      const response = await axios.post(
        "http://localhost:5000/addpatient",
        data
      );
      toast.success("Patient added successfully!");
      console.log(response.data);

      setFormData({
        firstName: "",
        lastName: "",
        gender: "",
        age: "",
        email: "",
        address: "",
        contactNumber: "",
        appointTo: "",
        appointBy: "",
        category: "",
        problem: "",
        sessions: 0,
        status: "",
        image: [],
        additionalImage: [],
      });

      setImagePreview([]);
      setAdditionalImagePreview(null);
    } catch (error) {
      toast.error("Error adding patient!");
      console.error("Error adding patient:", error);
    }
  };

  const removeImagePreview = (index) => {
    const updatedPreview = imagePreview.filter((_, i) => i !== index);
    setImagePreview(updatedPreview);

    const updatedFiles = formData.image.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      image: updatedFiles,
    });
  };

  const removeAdditionalImagePreview = () => {
    setAdditionalImagePreview(null);
    setFormData({
      ...formData,
      additionalImage: "",
    });
  };

  return (
    <div className="flex">
      <Leftbar />
      <ToastContainer />
      <div className="flex-1 p-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <button className="text-2xl font-bold">Add Patient</button>
            <div className="flex ml-auto items-center space-x-4">
              <label
                htmlFor="additionalImage"
                className="cursor-pointer p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-200 ease-in-out"
              >
                Upload Image
              </label>
              <input
                type="file"
                name="additionalImage"
                id="additionalImage"
                onChange={handleChange}
                className="hidden"
              />
              {additionalImagePreview && (
                <div className="relative w-32 h-32 border border-gray-300 rounded-lg overflow-hidden">
                  {additionalImagePreview.type === "image" ? (
                    <img
                      src={additionalImagePreview.url}
                      alt="Additional Preview"
                      className="w-full h-full object-cover"
                    />
                  ) : additionalImagePreview.type === "pdf" ? (
                    <div className="flex items-center justify-center h-full">
                      <span className="text-red-500">PDF File</span>
                      <span className="text-xs">
                        {additionalImagePreview.name}
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <span className="text-gray-500">File</span>
                      <span className="text-xs">
                        {additionalImagePreview.name}
                      </span>
                    </div>
                  )}
                  <button
                    type="button"
                    onClick={removeAdditionalImagePreview}
                    className="absolute top-1 right-1 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-700 transition-all duration-200 ease-in-out"
                  >
                    X
                  </button>
                </div>
              )}
            </div>
            <div className="relative ml-4">
              <img
                src={dashboard_1}
                alt="Profile"
                className="w-12 h-12 rounded-full"
              />
            </div>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="border p-2 rounded"
                value={formData.firstName}
                onChange={handleChange}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="border p-2 rounded"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <select
                name="gender"
                className="border p-2 rounded"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <select
                name="age"
                className="border p-2 rounded"
                value={formData.age}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Select Age
                </option>
                {[...Array(100)].map((_, i) => (
                  <option key={i} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="border p-2 rounded w-full"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              className="border p-2 rounded w-full"
              value={formData.address}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="contactNumber"
              placeholder="Contact Number"
              className="border p-2 rounded w-full"
              value={formData.contactNumber}
              onChange={handleChange}
            />
            <div className="grid grid-cols-2 gap-4">
              <select
                name="appointTo"
                className="border p-2 rounded"
                value={formData.appointTo}
                onChange={handleChange}
              >
                <option value="">Appoint To</option>
                {therapistOptions.map((therapist) => (
                  <option key={therapist._id} value={therapist.Name}>
                    {therapist.Name}
                  </option>
                ))}
              </select>

              <select
                name="category"
                className="border p-2 rounded"
                value={formData.category}
                onChange={handleChange}
              >
                <option value="">Category</option>
                {categoryOptions.map((category) => (
                  <option key={category._id} value={category.Name}>
                    {category.Name}
                  </option>
                ))}
              </select>
            </div>
            <textarea
              name="problem"
              placeholder="Problem"
              className="border p-2 rounded w-full h-24"
              value={formData.problem}
              onChange={handleChange}
            ></textarea>

            <div>
              <span className="font-montserrat font-semibold">
                Upload relevant documents (if any)
              </span>
              <input
                type="file"
                name="image"
                onChange={handleChange}
                multiple
                className="border p-2 rounded w-full mt-2"
              />
              <div className="flex flex-wrap mt-4">
                {imagePreview.map((file, index) => (
                  <div key={index} className="relative w-24 h-24 mr-12 mb-2">
                    {file.type === "image" ? (
                      <img
                        src={file.url}
                        alt="Preview"
                        className="w-full h-full object-cover rounded"
                      />
                    ) : file.type === "pdf" ? (
                      <div className="flex items-center justify-center h-full">
                        <span className="text-xs font-montserrat font-bold">
                          {file.name}
                        </span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <span className="text-gray-500">File</span>
                        <span className="text-xs">{file.name}</span>
                      </div>
                    )}
                    <button
                      type="button"
                      onClick={() => removeImagePreview(index)}
                      className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 py-1"
                    >
                      X
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Add User
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPatient;
