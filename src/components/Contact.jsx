import { useState } from 'react';
import { CiMail } from "react-icons/ci";

export default function Contact() {

  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'subject':
        setSubject(value);
        break;
      case 'message':
        setMessage(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const email = 'manuel.dilena.29@gmail.com';
      const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(name + ' - ' + subject)}&body=${message}`;
      window.location.href = mailtoLink;
      setName('');
      setSubject('');
      setMessage('');
      setErrors({});
    }
  };

  const validateForm = () => {
    let errors = {};
    let valid = true;

    if (name.trim() === '') {
      errors.name = 'You must enter a name';
      valid = false;
    }

    if (subject.trim() === '') {
      errors.subject = 'You must enter a subject';
      valid = false;
    }

    if (message.trim() === '') {
      errors.message = 'You must enter a message';
      valid = false;
    }

    setErrors(errors);
    return valid;
  }

  return (
    <section id='contact'>
      <div className='container px-5 sm:py-20 py-16 mx-auto'>
        <div className='text-center mb-4'>
          <CiMail className='w-10 inline-block mb-4 text-rocketblue sm:text-4xl text-3xl' />
          <h1 className='sm:text-4xl text-2xl font-medium title-font text-light mb-4'>
            Contact
          </h1>
          <p className='text-text leading-relaxed mx-auto sm:text-xl'>
            Whats next? Get in touch.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col justify-around items-center sm:w-4/5 mx-auto'>
            <div className='sm:flex sm:justify-between w-full'>
              <input 
                type='text' 
                id='name' 
                name='name'
                placeholder={errors.name || 'Name'}
                value={name}
                onChange={handleChange}
                className='sm:w-1/3 w-full sm:mr-4 mb-2 h-10 px-4 bg-dark border-solid border-2 border-rocketblue rounded-md text-light sm:text-lg outline-none' 
              />
              <input 
                type='text' 
                id='subject' 
                name='subject'
                placeholder={errors.subject || 'Subject'}
                value={subject}
                onChange={handleChange}
                className='sm:w-2/3 w-full h-10 px-4 bg-dark border-solid border-2 border-rocketblue rounded-md text-light sm:text-lg outline-none' 
              />
            </div>
            <textarea 
              name='message' 
              id='message' 
              placeholder={errors.message || 'Message'}
              value={message}
              onChange={handleChange}
              className='mt-4 px-4 h-20 w-full bg-dark border-solid border-2 border-rocketblue rounded-md text-light sm:text-lg outline-none'
            ></textarea>
          </div>
          <div className='flex justify-end sm:w-4/5 mx-auto mt-4'>
            <input 
              type='submit' 
              name='send' 
              value='Send' 
              className='w-1/4 sm:py-3 bg-rocketblue sm_text-3xl text-xl text-dark rounded-md border-0 tracking-wide transition duration-300 focus:outline-none hover:scale-105 cursor-pointer'
            />
          </div>
        </form>
        <div className='text-center mt-16'>
          <a href='https://github.com/ManuelDiLena/dilenman-portfolio' className='text-text leading-relaxed mx-auto sm:text-xl hover:text-rocketblue'>
            Designed & Built by Manuel Di Lena
          </a>
        </div>
      </div>
    </section>
  );
}