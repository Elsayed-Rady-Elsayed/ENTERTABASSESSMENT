import React, { useState } from "react";
import emailjs from "emailjs-com";

type FormData = {
  fullName: string;
  email: string;
  message: string;
};
type Errors = {
  fullName: string;
  email: string;
  message: string;
};


export const sendEmail = (formData: FormData) => {
  emailjs.send("service_h1rucpg", "template_u7odrdv", {
    to_email: formData.email,
    to_name: formData.fullName,
    from_name: "Entertab",
    message: formData.message,
    reply_to: formData.email,
  }, "QnZR0Tpt9Rw3rl_sw")
    .then((response) => {
      console.log("Email sent successfully:", response);
    })
    .catch((error) => {
      console.error("Error sending email:", error);
    });
};

function Form() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({
    fullName: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id } = e.target;
    if (!formData[id as keyof FormData]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [id]: `${id.charAt(0).toUpperCase() + id.slice(1)} cannot be blank`,
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [id]: "",
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = {
      fullName: formData.fullName ? "" : "Full Name cannot be blank",
      email: formData.email ? "" : "Email cannot be blank",
      message: formData.message ? "" : "Message cannot be blank",
    };
    setErrors(newErrors);
    if (!newErrors.fullName && !newErrors.email && !newErrors.message) {
      sendEmail(formData);
    }
  };

  return (
    <div className="container m-auto my-[4rem] flex justify-center">
      <form className="flex items-center justify-center flex-col md:w-3/5 w-4/5 gap-3" onSubmit={handleSubmit}>
        <div className="flex gap-5 w-full md:flex-row flex-col *:flex *:flex-col *:gap-2">
          <div className="md:w-1/2 w-full">
            <label htmlFor="fullName" className="text-xs capitalize text-black">
              Full Name *
            </label>
            <input
              type="text"
              className={`border text-black rounded-md p-2 text-sm bg-gray-100/50 ${errors.fullName ? "border-red-600" : "border-gray-300"}`}
              id="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.fullName && <small className="text-red-600 text-[10px]">{errors.fullName}</small>}
          </div>
          <div className="md:w-1/2 w-full">
            <label htmlFor="email" className="text-xs capitalize text-black">
              Email *
            </label>
            <input
              type="email"
              className={`border rounded-md p-2 text-sm bg-gray-100/50 ${errors.email ? "border-red-600" : "border-gray-300"}`}
              id="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && <small className="text-red-600 text-[10px]">{errors.email}</small>}
          </div>
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="message" className="text-xs capitalize text-black">
            Message *
          </label>
          <textarea
            rows={10}
            className={`border text-black p-1 rounded-md bg-gray-100/50 ${errors.message ? "border-red-600" : "border-gray-300"}`}
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.message && <small className="text-red-600 text-[10px]">{errors.message}</small>}
        </div>
        <button className="bg-[#3fe3b9] hover:bg-[#3fe3d8] w-full md:w-1/2 p-2 rounded-xl mt-5 hover:-translate-y-0.5 hover:border-black transition-transform">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
