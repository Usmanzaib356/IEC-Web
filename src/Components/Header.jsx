import React, { useState } from 'react';
import logo from "../Images/logo.svg";
import user from "../Images/userpic.png";
import arrow from "../Images/down-arrow.svg";
import moblogo from "../Images/moblogo.svg";

function Header() {

  const [nav, setNav] = useState(false)

  const handleNav = (e) => {
    e.preventDefault()
    setNav(!nav)

  }


  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };


  const [userdropdown, setUserDropDown] = useState(false);

  const userbutton = () => {
    setUserDropDown(!userdropdown);
  };



  return (

    <>
      <div className='w-full h-[74px]  bg-[#FFFFFF] text-black display-none-m' id='scrol-button' >
        <div className=' mx-auto px-4  flex justify-between  items-center h-full'>
          <div className='text-[#00d8ff]'>
            <img src={logo} alt="" />
          </div>
          <div className='hidden xl:flex'>
            <ul className='flex fz-14-h text-black items-center gap-5'>
              <li><a href="">Calender</a></li>
              <li>
                <div className="relative">
                  <button
                    onClick={toggleDropdown}
                    className=" text-black flex items-center"
                  >
                    Courses

                    <span className="ml-1">
                      {isOpen ? (
                        <img src={arrow} width={10} height={10} alt='arrow-icon' />
                      ) : (
                        <img src={arrow} width={10} height={10} alt='arrow-icon' />
                      )}
                    </span>

                  </button>

                  {isOpen && (
                    <div className="absolute z-10 mt-2 py-2 w-35 bg-white border rounded-md shadow-lg">
                      {/* Dropdown items */}
                      <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200"> Web Development</a>
                      <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Icloud</a>
                      <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Hacking</a>
                    </div>
                  )}
                </div>

              </li>
              <li><a href="">Apprentices</a></li>
              <li><a href="">IEC Fellows</a></li>
              <li><a href="">IEC Team</a></li>
              <li><a href="">About Us</a></li>
              <li><a href="">Contact Us</a></li>
              <li><a href="">Blogs</a></li>
              <li><a href="">FAQs</a></li>
              <li>
                <div className="relative">
                  <button
                    onClick={userbutton}
                    className=" text-black flex items-center"
                  >
                    <img className="w-8 h-8 rounded-full" src={user} alt="user photo" />

                    <span className="ml-1">
                      {userdropdown ? (
                        <img src={arrow} width={10} height={10} alt='arrow-icon' />
                      ) : (
                        <img src={arrow} width={10} height={10} alt='arrow-icon' />
                      )}
                    </span>

                  </button>

                  {userdropdown && (
                    <div className="absolute z-10  right-10 items-start  mt-2 py-2 w-35  bg-white border rounded-md shadow-lg">
                      {/* Dropdown items */}
                      <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200"> Web Development</a>
                      <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Icloud</a>
                      <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Hacking</a>
                    </div>
                  )}
                </div>

              </li>
            </ul>

          </div>
          {/*  toggler button */}
          <div className='block xl:hidden' onClick={handleNav} >


            {nav ? (<a href="" className=''>
              <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
            </a>)
              : (<a className='text-black'>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                </svg>
              </a>)}



          </div>
          {/* Mobile menu */}
          <div className={nav ? 'w-full bg-white  text-white absolute top-[90px] left-0  flex justify-center text-center z-10 xl:hidden ' : "absolute left-[-100%]"}>
            <ul className='flex flex-col text-black items-center gap-5'>
              <li><a href="">Calender</a></li>
              <li>
                <div className="relative z-10 ">
                  <button
                    onClick={toggleDropdown}
                    className=" text-black flex items-center"
                  >
                    Courses

                    <span className="ml-1">
                      {isOpen ? (
                        <img src={arrow} width={10} height={10} alt='arrow-icon' />
                      ) : (
                        <img src={arrow} width={10} height={10} alt='arrow-icon' />
                      )}
                    </span>

                  </button>

                  {isOpen && (
                    <div className="absolute z-10  mt-2 py-2 w-35 bg-white border rounded-md shadow-lg">
                      {/* Dropdown items */}
                      <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200"> Web Development</a>
                      <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Icloud</a>
                      <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Hacking</a>
                    </div>
                  )}
                </div>

              </li>
              <li><a href="">Apprentices</a></li>
              <li><a href="">IEC Fellows</a></li>
              <li><a href="">IEC Team</a></li>
              <li><a href="">About Us</a></li>
              <li><a href="">Contact Us</a></li>
              <li><a href="">Blogs</a></li>
              <li><a href="">FAQs</a></li>
              <li className='mb-1'>
                <div className="relative">
                  <button
                    onClick={userbutton}
                    className=" text-black flex items-center"
                  >
                    <img className="w-8 h-8 rounded-full" src={user} alt="user photo" />

                    <span className="ml-1">
                      {userdropdown ? (
                        <img src={arrow} width={10} height={10} alt='arrow-icon' />
                      ) : (
                        <img src={arrow} width={10} height={10} alt='arrow-icon' />
                      )}
                    </span>

                  </button>

                  {userdropdown && (
                    <div className="absolute    right-10 items-start  mt-2 py-2 w-35  bg-white border rounded-md shadow-lg">
                      {/* Dropdown items */}
                      <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200"> Web Development</a>
                      <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Icloud</a>
                      <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Hacking</a>
                    </div>
                  )}
                </div>

              </li>
            </ul>

          </div>




        </div>
      </div>

      {/* For Mobile */}
      
        <div className='px-m py-3 flex justify-between items-center  display-none-desktop' id='scrol-button-m'>
            <div>
               <img src={logo} alt="" className='w-[180px]' />
            </div>
            <div>
            <div className="relative">
                  <button
                    onClick={userbutton}
                    className=" text-black flex items-center"
                  >
                    <img className="w-8 rounded-full" src={user} alt="user photo" />

                    <span className="ml-1">
                      {userdropdown ? (
                        <img src={arrow} width={10} height={10} alt='arrow-icon' />
                      ) : (
                        <img src={arrow} width={10} height={10} alt='arrow-icon' />
                      )}
                    </span>

                  </button>

                  {userdropdown && (
                    <div className="absolute z-10  right-10 items-start  mt-2 py-2 w-35  bg-white border rounded-md shadow-lg">
                      {/* Dropdown items */}
                      <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200"> Web Development</a>
                      <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Icloud</a>
                      <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Hacking</a>
                    </div>
                  )}
                </div>
            </div>
        </div>

      {/* For Mobile */}


    </>
  );
}

export default Header;
