import { useState } from 'react';
import Button from './UI/Button';
import Input from './UI/Input';
import TextArea from './UI/TextArea';

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
                <Input
                  id="name"
                  width="w-1/2"
                  label="Full Name"
                  name="name"
                  type="text"
                  changeHandler={changeHandler}
                  placeholder="Your Full Name"
                />
                <Input
                  id="email"
                  width="w-1/2"
                  label="Email"
                  name="email"
                  type="email"
                  changeHandler={changeHandler}
                  placeholder="Your Email"
                />
              </div>
              <TextArea
                width="w-full"
                id="message"
                label="Message"
                name="message"
                changeHandler={changeHandler}
                placeholder=""
              />
              <Button
                type="submit"
                size="btn-block"
                color="btn-primary"
              >
                Submit
              </Button>
            </div>
          </form>
          {formData}
        </div>
      </div>
    </div>
  );
}
