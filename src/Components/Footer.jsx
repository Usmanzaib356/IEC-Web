import React from 'react'
import footer from "../Images/footer.svg"
import snapchat from "../Images/snapchat.svg"
import twitter from "../Images/twitter.svg"
import tiktok from "../Images/tiktok.svg"
import arrow from "../Images/footerarrow.svg"
function Footer() {
    return (
        <>
            <footer className='w-full bg-[#12125A] mt-16 py-5'>
                <div className='mx-auto px-16 pt-5 max-w-[1280px] '>


                    <div className='footer-logo flex justify-between gap-10 items-center text-[#FFFFFF]'>
                        <img src={footer} alt=""  />

                         <a href='#scrol-button' className='flex items-center fz-16-footer-btn gap-2'>
                              Top

                              <span className='bg-[#FFFFFF] rounded-[100%] py-3.5 px-3'>
                                    <img src={arrow} alt="" />
                              </span>
                         </a>
                          
                    </div>

                    <div className='flex justify-between  footer-wrap  gap-5 py-10 text-white'>
                        <div className='text-left max-w-[360px]'>
                            <p className='fz-16'>An innovative institute dedicated to emerging careers, offers transformative courses designed to equip students with cutting-edge skills and industry-relevant knowledge</p>

                            <h2 className='mt-4 fz-20'>Address</h2>

                            <p className='pt-4 fz-16'>123 Main Street,</p>
                            <p className='fz-16'>Gulberg III,</p>
                            <p className='fz-16'>Pakistan</p>


                            <p className='pt-4 fz-16'>Email: iec@gmail.com</p>
                            <p className='fz-16'>Call: 0333-4567904</p>

                        </div>
                        <div className='max-w-[86px]  flex flex-col gap-5 fz-16-r'>
                            <p ><a href="">Apprentices</a></p>
                            <p><a href="">Employers</a></p>
                            <p><a href="">IEC Fellows</a></p>
                            <p><a href="">About IEC</a></p>
                            <p><a href="">Team</a></p>
                            <p><a href="">Donate</a></p>
                        </div>

                        <div className='max-w-[418px] '>
                            <h1 className='text-center fz-24'>Newsletter Subscription</h1>
                            <p className='py-3 fz-16'>Stay up-to-date about the impact stories of IECX graduates, new partnerships and course emnrollment process!</p>

                            <div>
                            <input  className='py-[13px] ps-5 w-[18rem] rounded-l-lg fz-14' type="text" name="" id="" placeholder='Enter your Email'/>
                            <button className='btn py-[16px] rounded-r-lg px-7 fz-14-subcribe bg-[#BE1300]'>Subcribe</button>
                            </div>

                            <p className='fz-12 pt-2'>By sharing your email, you acknowledge our Privacy Policy & Terms of Services.</p>

                            <div className="mb-6 flex justify-start flex-wrap  mt-5 gap-4">
                               <div className='bg-[#FFFFFF] rounded-lg flex justify-center'>
                               <a
                                    href="#!"
                                    type="button"
                                    className="m-1 h-9 w-9 rounded-full bg-[#12125A] border-2 border-white uppercase leading-normal"
                                    data-te-ripple-init
                                    data-te-ripple-color="light">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="mx-auto h-full w-4"
                                        fill="currentColor"
                                        viewBox="0 0 24 24">
                                        <path
                                            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                    </svg>
                                </a>
                               </div>

                              <div className='bg-[#FFFFFF] rounded-lg flex justify-center'>
                                   
                                <a
                                    href="#!"
                                    type="button"
                                    className="m-1 h-9 w-9 rounded-full bg-[#12125A] border-2 border-white uppercase leading-normal "
                                    data-te-ripple-init
                                    data-te-ripple-color="light">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="mx-auto h-full w-4"
                                        fill="currentColor"
                                        viewBox="0 0 24 24">
                                        <path
                                            d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                                    </svg>
                                </a>
                              </div>


                              <div className='bg-[#FFFFFF] rounded-lg flex justify-center'>
                              <a
                                    href="#!"
                                    type="button"
                                    className="m-1 h-9 w-9 rounded-full bg-[#12125A] border-2 border-white uppercase leading-normal"
                                    data-te-ripple-init
                                    data-te-ripple-color="light">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="mx-auto h-full w-4"
                                        fill="currentColor"
                                        viewBox="0 0 24 24">
                                        <path
                                            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </a>
                              </div>


                              <div className='bg-[#FFFFFF] rounded-lg flex justify-center'>
                                <a
                                    href="#!"
                                    type="button"
                                    className="m-1 h-9 w-9 flex justify-center p-1 rounded-full border-2 bg-[#12125A]  uppercase leading-normal    "
                                    data-te-ripple-init
                                    data-te-ripple-color="light">
                                    <img src={twitter} alt=""  />
                                </a>
                                </div>



                                <div className='bg-[#FFFFFF] rounded-lg flex justify-center'>
                                <a
                                    href="#!"
                                    type="button"
                                    className="m-1 h-9 w-9 flex justify-center p-1 rounded-full border-2 bg-[#12125A]  uppercase leading-normal    "
                                    data-te-ripple-init
                                    data-te-ripple-color="light">
                                    <img src={snapchat} alt=""  />
                                </a>
                                </div>


                                <div className='bg-[#FFFFFF] rounded-lg flex justify-center'>
                                <a
                                    href="#!"
                                    type="button"
                                    className="m-1 h-9 w-9 flex justify-center p-1 rounded-full border-2 bg-[#12125A]  uppercase leading-normal    "
                                    data-te-ripple-init
                                    data-te-ripple-color="light">
                                    <img src={tiktok} alt=""  />
                                </a>
                                </div>

                                
                            </div>
                        </div>
                    </div>


                    <hr className='bg-[#FFFFFF] mt-1'/>
                    <p className='fz-16-r pt-5'>Ⓒ2022 iec.org.pk., All rights reserved. Terms of Use - Privacy</p>



                </div>
            </footer>
        </>
    )
}

export default Footer