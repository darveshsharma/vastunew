"use client"
import { useState } from 'react';

export default function page() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Send the email using SendGrid or any other email service
    console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold text-center mb-10">Contact Us</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2" htmlFor="name">
              Name
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="name" type="text" placeholder="John Doe" value={name} onChange={(event) => setName(event.target.value)} />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="email" type="email" placeholder="john.doe@example.com" value={email} onChange={(event) => setEmail(event.target.value)} />
          </div>
        </div>
        <div className="w-full mb-4">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2" htmlFor="message">
            Message
          </label>
          <textarea className="no-scrollbar appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white h-48 resize-none" id="message" value={message} onChange={(event) => setMessage(event.target.value)}></textarea>
        </div>
        <div className="flex items-center justify-center">
          <button className="px-4 py-2 bg-gray-800 text-white rounded text-sm hover:bg-gray-700 focus:outline-none focus:shadow-outline-gray" type="submit">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}