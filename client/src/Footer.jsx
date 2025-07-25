import React from 'react'
import logo from "./assets/images/Og-Logo.png";
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div>
      
      <footer className="  border-t text-[#EAEAEA] ">
        <div className="mx-auto w-full px-4 md:py-16 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-start lg:gap-8">
            <div className="text-teal-600 dark:text-[#EAEAEA]">
              
            </div>
      
            <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
              <div className="col-span-2">
                <div>

                 <div className="w-48 max-w-full">
  <img src={logo} alt="Landing Labs Logo" className="w-full h-auto object-contain" />
</div>

                 
                              
                           
      
                  <p className="mt-4 text-gray-500 dark:text-[#EAEAEA]">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse non cupiditate quae nam
                    molestias.
                  </p>
                </div>
              </div>
      
              <div className="col-span-2 lg:col-span-3 lg:flex lg:items-end">
                <form className="w-full">
                  <label htmlFor="UserEmail" className="sr-only"> Email </label>
      
                  <div
                    className="invisible border border-gray-100 p-2 focus-within:ring sm:flex sm:items-center sm:gap-4 dark:border-gray-800"
                  >
                    <input
                      type="email"
                      id="UserEmail"
                      placeholder="john@rhcp.com"
                      className=" w-full border-none focus:border-transparent focus:ring-transparent sm:text-sm dark:bg-gray-900 dark:text-white "
                    />
      
                    <button
                      className="mt-1 w-full bg-teal-500 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-none hover:bg-teal-600 sm:mt-0 sm:w-auto sm:shrink-0"
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
      
              <div className="col-span-2 sm:col-span-1">
                <p className="font-medium text-gray-900 dark:text-white">Services</p>
      
                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                      1on1 Coaching
                    </a>
                  </li>
      
                  <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                      Company Review
                    </a>
                  </li>
      
                  <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                      Accounts Review
                    </a>
                  </li>
      
                  <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                      HR Consulting
                    </a>
                  </li>
      
                  <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                      SEO Optimisation
                    </a>
                  </li>
                </ul>
              </div>
      
              <div className="col-span-2 sm:col-span-1">
                <p className="font-medium text-gray-900 dark:text-white">Company</p>
      
                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <Link to="/about-us" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                      About
                    </Link>
                  </li>
      
                  <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                      Meet the Team
                    </a>
                  </li>
      
                  <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                      Accounts Review
                    </a>
                  </li>
                </ul>
              </div>
      
              <div className="col-span-2 sm:col-span-1">
                <p className="font-medium text-gray-900 dark:text-white">Helpful Links</p>
      
                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <Link to="/contact-us" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                      Contact
                    </Link>
                  </li>
      
                  <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                      FAQs
                    </a>
                  </li>
      
                  <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                      Live Chat
                    </a>
                  </li>
                </ul>
              </div>
      
              <div className="col-span-2 sm:col-span-1">
                <p className="font-medium text-gray-900 dark:text-white">Legal</p>
      
                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                      Accessibility
                    </a>
                  </li>
      
                  <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                      Returns Policy
                    </a>
                  </li>
      
                  <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                      Refund Policy
                    </a>
                  </li>
      
                  <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                      Hiring Statistics
                    </a>
                  </li>
                </ul>
              </div>
      
              <div className="col-span-2 sm:col-span-1">
                <p className="font-medium text-gray-900 dark:text-white">Downloads</p>
      
                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                      Marketing Calendar
                    </a>
                  </li>
      
                  <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                      SEO Infographics
                    </a>
                  </li>
                </ul>
              </div>
      
              <ul className="col-span-2 flex justify-start gap-6 lg:col-span-5 lg:justify-end">
                <li>
                  <a
                    href="https://www.facebook.com/share/16wqfNsNHL/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    <span className="sr-only">Facebook</span>
      
                    <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
      
                <li>
                  <a
                    href="https://www.youtube.com/@landinglabs"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    <span className="sr-only">Youtube</span>
      
                  <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
</svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/landinglabs_?igsh=Njc1YjZvdjc1Y2J1"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    <span className="sr-only">Instagram</span>
      
                    <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
      
                <li>
                  <a
                    href="https://www.linkedin.com/company/landing-labs/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    <span className="sr-only">Twitter</span>
      
                    <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                      />
                    </svg>
                  </a>
                </li>
      
                <li>
                  <a
                    href="https://www.linkedin.com/company/landing-labs/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    <span className="sr-only">Linkdein</span>
      
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-linkedin-icon lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  </a>
                </li>
      
                
              </ul>
            </div>
          </div>
      
          <div className="mt-8 border-t border-gray-100 pt-8 dark:border-gray-800">
            <div className="sm:flex sm:justify-between">
              <p className="text-[17px] text-gray-500 dark:text-[#EAEAEA]">
                Copyright © 2025 Landing Labs
              </p>
      
              <ul className="mt-8 flex flex-wrap justify-start gap-4 text-[17px] sm:mt-0 lg:justify-end">
                <li>
                  <a href="#" className="text-gray-500 transition hover:opacity-75 dark:text-[#EAEAEA]">
                    Terms & Conditions
                  </a>
                </li>
      
                <li>
                  <a href="#" className="text-gray-500 transition hover:opacity-75 dark:text-[#EAEAEA]">
                    Privacy Policy
                  </a>
                </li>
      
                <li>
                  <a href="#" className="text-gray-500 transition hover:opacity-75 dark:text-[#EAEAEA]">
                    Cookies
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer></div>
  )
}