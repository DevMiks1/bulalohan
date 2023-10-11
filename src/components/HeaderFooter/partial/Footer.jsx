
import { Link } from "react-router-dom"


export const Footer = () => {

  return (

    <footer className=" ">
        <div className="bg-darkModeBlack dark:bg-darkModeGray text-white py-16 w-full">
            <div className="container mx-auto flex justify-center">
                <div className="grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 text-center">
                    <div className="px-10">
                        <h2 className="text-primary mb-6 text-lg font-bold uppercase  dark:text-white font-poppins">Address</h2>
                        <div className="text-gray-200 font-medium text-[1rem] dark:text-gray-300">
                            <p>Mobile Number: (+63) 988 123 4567</p>
                            <p className="py-2">Telephone Number: (02) 846 9564</p>
                            <p>Email: Yaramay@gmail.com</p>
                            <p className="py-2">Address: 2265f Agoncillo St, Malate, Manila, 1004 Metro Manila</p>
                        </div>
                    </div>
                    <div className="text-gray-200 dark:text-gray-300">
                        <h2 className="text-primary text-xl font-bold uppercase dark:text-white font-poppins mb-6">Open Hours</h2>
                        <div className="font-poppins text-[1rem] px-[4rem] pb-1 flex justify-between items-center sm:px-[2rem] md:px-[4rem]">
                            <p>Monday</p>
                            <p>8:00am - 10pm</p>
                        </div>
                        <div className="font-poppins text-[1rem] px-[4rem] pb-1 flex justify-between items-center sm:px-[2rem] md:px-[4rem]">
                            <p>Tuesday</p>
                            <p>8:00am - 10pm</p>
                        </div>
                        <div className="font-poppins text-[1rem] px-[4rem] pb-1 flex justify-between items-center sm:px-[2rem] md:px-[4rem]">
                            <p>Wednesday</p>
                            <p>8:00am - 10pm</p>
                        </div>
                        <div className="font-poppins text-[1rem] px-[4rem] pb-1 flex justify-between items-center sm:px-[2rem] md:px-[4rem]">
                            <p>Thursday</p>
                            <p>8:00am - 10pm</p>
                        </div>
                        <div className="font-poppins text-[1rem] px-[4rem] pb-1 flex justify-between items-center sm:px-[2rem] md:px-[4rem]">
                            <p>Friday</p>
                            <p>8:00am - 10pm</p>
                        </div>
                        <div className="font-poppins text-[1rem] px-[4rem] pb-1 flex justify-between items-center sm:px-[2rem] md:px-[4rem]">
                            <p>Satuday</p>
                            <p>8:00am - 10pm</p>
                        </div>
                        <div className="font-poppins text-[1rem] px-[4rem] pb-1 flex justify-between items-center sm:px-[2rem] md:px-[4rem]">
                            <p>Sunday</p>
                            <p>Closed</p>
                        </div>
                    </div>
                    <div className="px-10 lg:text-left">
                        <h2 className="text-primary text-xl font-bold dark:text-white uppercase font-poppins mb-6">More Info</h2>
                        <ul className=" text-gray-200 font-medium dark:text-gray-300">
                            <li>
                                <Link to="/menu" className="font-poppins text-[1rem] hover:text-primary" onClick={()=> window.scrollTo(0,0)}>
                                    <p>Menu</p>
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="font-poppins text-[1rem] hover:text-primary" onClick={()=> window.scrollTo(0,0)}>
                                    <p className="py-2">About</p>
                                </Link>
                            </li>
                            <li>
                                <Link to="/book"className="font-poppins text-[1rem] hover:text-primary" onClick={()=> window.scrollTo(0,0)}>
                                    <p>Book</p>
                                </Link>
                            </li>
                            
                        </ul>
                    </div> 
                </div>
            </div>
        </div>
        
        <div className="bg-primary py-7 w-full">
            <div className="flex justify-center items-center flex-wrap px-3">
                <span className="text-white text-[.9rem] font-poppins text-center">Copyright © 2023 All rights reserved &#124; Made by Yaramay
                </span>
            </div>
        </div>
        
    </footer>


  )
}
