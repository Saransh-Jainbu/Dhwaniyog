import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          
          <div>
            <h3 className="font-bold text-lg text-gray-800">Company Info</h3>
          </div>

          
          <div>
            <h3 className="font-bold text-lg text-gray-800">Get In Touch</h3>
            <ul className="mt-4 space-y-3 text-gray-600">
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-red-400 mr-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75l8.5 5.5 8.5-5.5M2.25 12.75l8.5 5.5 8.5-5.5M2.25 18.75l8.5 5.5 8.5-5.5"
                  />
                </svg>
                <span>(480) 555-0103</span>
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-red-400 mr-3 mt-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 12c2.67 0 4.32-1.61 4.5-3.75h-9C7.68 10.39 9.33 12 12 12zm6.75-4.5c0 4.14-3.72 7.5-6.75 7.5s-6.75-3.36-6.75-7.5a6.75 6.75 0 1113.5 0z"
                  />
                </svg>
                <span>4517 Washington Ave. Manchester, Kentucky 39495</span>
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-red-400 mr-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5v10.5H3.75z"
                  />
                </svg>
                <span>debra.holt@example.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
