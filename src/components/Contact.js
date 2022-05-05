import { useState } from 'react';

export default function Contact() {
  const description = 'Leave your message and I\'ll get back to you soon.';
  const [formData, setFormData] = useState(null);

  const changeHandler = (event) => {
    setFormData((prev) => (
      {
        ...prev,
        [event.target.name]: event.target.value.trim(),
      }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div className="container px-5 py-5 mx-auto">
      <div className="flex flex-col mb-5">
        <div className="text-center">
          <h1 className="mb-5 text-5xl font-bold">
            Contact Me
          </h1>
          <p className="w-1/2 mx-auto text-xl">
            {description}
          </p>
        </div>
        <div className="container w-1/2 mx-auto">
          <form onSubmit={submitHandler} className="form-control">
            <div className="flex flex-col">
              <div className="flex flex-row gap-5">
                <div className="w-1/2">
                  <label htmlFor="name" className="font-medium label">
                    Full Name:
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="w-full input input-primary"
                    placeholder="Your Full Name"
                    onChange={changeHandler}
                  />
                </div>
                <div className="w-1/2">
                  <label htmlFor="email" className="font-medium label">
                    Email:
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="w-full input input-primary"
                    placeholder="Your Email"
                    onChange={changeHandler}
                  />
                </div>
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="message" className="font-medium label">
                  Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="h-24 mb-5 textarea textarea-primary textarea-bordered"
                  onChange={changeHandler}
                />
              </div>
              <button type="submit" className="btn btn-block btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
