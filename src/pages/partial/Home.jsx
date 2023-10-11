
import { NavLink } from "react-router-dom";
import "../css/home.css";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// import the JSON DATA
import { HomeMenuData } from "../../components/JSONFormat/HomeMenuData/HomeMenuData";

// about image
import AboutImage from "../../assets/menu-img/specialty.jpg"
import Showtime from "../../assets/events-img/Event_Showtime.png"
import DynamixBand from "../../assets/events-img/Event_Dynamix_Band.png"
import GandangGabi from "../../assets/events-img/Event_Ganda_Gabi_Dave.png"
import Acoustic from "../../assets/events-img/Event_Acoustic.png"

export const Home = () => {
  // Carousel responsiveness
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1025 },
      items: 3,
    
    },
    tablet: {
      breakpoint: { max: 1024, min: 769 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 641 },
      items: 1,
    },
    mobileBelow: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
    },
  };
  
  return (
    <>
      {/* hero section */}
      <section id="hero-section">
        <div className=" flex flex-col gap-10 items-center justify-center flex-wrap h-screen z-10 px-3">
          <h2 className="text-2xl border font-semibold font-poppins capitalize px-2 py-2 2xl:text-4xl">BULALOHAN SA RIYADH</h2>
          <h2 className="text-[4rem] text-center font-dancing 2xl:text-[6rem]">Best Quality Food</h2>
          <button className="text-white bg-primary text-[1.4rem] font-poppins px-5 py-3 rounded-lg border border-primary hover:bg-transparent hover:text-primary focus:outline-none hover:border-primary hover:focus:ring-primary hover:focus:border-primary 2xl:text-[2rem]">Book now</button>
        </div>
      </section>
      {/* about section */}
      <section className="pt-20">
        <div className="font-poppins container mx-auto px-10 sm:px-3 2xl:px-0">
          <div className="grid lg:grid-cols-2 items-center gap-5">
            <div>
              <h3 className="text-2xl lg:text-[1.8rem] font-semibold pb-3 2xl:text-[2.7rem]">What is Bulalohan sa Riyadh ?</h3>
              <p className="pb-5 2xl:text-[1.3rem]">A culinary haven offering Filipino and Asian-inspired cuisine that celebrates culture, flavor, and togetherness.</p>
              <NavLink to="/about" onClick={()=>window.scrollTo(0, 0)} className="btn1"><button className="mb-3">Know More</button></NavLink>
            </div>
            <div>
              <img src={AboutImage} alt="Different Types of Food" />  
            </div>
          </div>
        </div>
      </section>
      {/* services section */}
      <section className="pt-20"> 
        <div className="font-poppins container mx-auto px-10 sm:px-3 2xl:px-0">
          <div className="text-center leading-relaxed">
            <h4 className="text-primary text-[1.4rem] sm:text-xl 2xl:text-[1.5rem]">What we Offer</h4>
            <h2 className="text-[1.7rem] sm:text-3xl pb-10 2xl:text-[2rem]">Save Your Money To Our Services</h2>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {HomeMenuData.map((homeMenuData) => {
              const {id, img, title, description, link, alt} = homeMenuData
              return(
                <div key={id} className="grid border-2 border-white h-[440px] w-[320px] 2xl:w-[340px] rounded-lg mx-auto my-10 overflow-hidden dark:border-darkModeGray dark:bg-darkModeGray" style={{boxShadow: "0 0 15px -5px rgba(0, 0, 0, 0.5)"}}>
                    <img src={img} alt={alt} className="h-[180px] w-full rounded-lg transition-transform duration-1000 transform-gpu hover:scale-110" />
                  <div className="px-3 flex flex-col justify-between h-[260px]">
                    <p className="pt-7 text-2xl font-semibold">{title}</p>
                    <div>
                      <p className="text-sm">{description} 
                      </p>
                    </div>
                    <NavLink to={link}><button className="text-white bg-primary text-[1.1rem] px-3 py-2 rounded-lg border border-primary hover:bg-transparent hover:text-primary focus:outline-none hover:border-primary hover:focus:ring-primary hover:focus:border-primary w-[100px] mb-3" onClick={() => window.scrollTo(0, 0)}>Discover</button></NavLink>
                  </div>
                </div>
              )
            })}
          </div>   
        </div>
      </section>
      {/* events section */}
      <section id="events" className="flex items-center justify-center">
        <div className="container mx-auto px-3 sm:px-10 2xl:px-0">
          <h3 className="text-white text-[5rem] text-center pb-20 font-dancing sm:text-8xl lg:pb-24 2xl:text-[7rem]">Events</h3>
          <Carousel 
          responsive={responsive}
          autoPlay={true}
          infinite={true}
          removeArrowOnDeviceType={['tablet', 'mobile','desktop']}
          autoPlaySpeed={2000}
          draggable={true}
          swipeable={true}
          stopOnHover={true}
          >
          {/* 1st image */}
            <div className="text-center bg-white sm:mx-5 2xl:mx-3">
              <img src={Showtime} alt="Showtime" />
              <p className="text-primary text-2xl font-poppins font-bold pt-5 dark:bg-darkModeGray">Showtime</p>
              <p className="text-xl font-poppins py-5 dark:bg-darkModeGray">Wednesday Night 8:00 P.M.</p>
            </div>
            {/* 2nd image */}
            <div className="text-center bg-white sm:mx-5 2xl:mx-3">
              <img src={DynamixBand} alt="Group of Band" />
              <p className="text-primary text-2xl font-poppins font-bold pt-5 dark:bg-darkModeGray">Dynamix Band</p>
              <p className="text-xl font-poppins py-5 dark:bg-darkModeGray">Thursday Night 8:00 P.M.</p>
            </div>
            {/* 3rd image */}
            <div className="text-center bg-white sm:mx-5 2xl:mx-3">
              <img src={GandangGabi} alt="2 photos of dave" />
              <p className="text-primary text-2xl font-poppins font-bold pt-5 dark:bg-darkModeGray">Gandang Gabi Dave</p>
              <p className="text-xl font-poppins py-5 dark:bg-darkModeGray">Friday Night 8:00 P.M.</p>
            </div>
            {/* 4th image */}
            <div className="text-center bg-white sm:mx-5 2xl:mx-3">
              <img src={Acoustic} alt="2 photos of dave" />
              <p className="text-primary text-2xl font-poppins font-bold pt-5 dark:bg-darkModeGray">Acoustic</p>
              <p className="text-xl font-poppins py-5 dark:bg-darkModeGray">Saturday Night 8:00 P.M.</p>
            </div>
          </Carousel>
        </div> 
      </section>
      {/* history section*/}
      <section className="py-20">
        <div className="container mx-auto px-10 sm:px-3 2xl:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-5">
            <div className="font-poppins flex flex-col  col-span-2 ">
              <h3 className="text-primary text-3xl pb-5 font-bold lg:text-5xl 2xl:text-[3.2rem]">Brief History</h3>
              <p className="text-[1rem] pb-5 2xl:text-[1.3rem]">Bulalohan sa Riyadh started in August 2019 at the Sulimaniya area. Our aim is to bring our Filipino concept of restaurant here in Saudi Arabia, where you can enjoy all our cultural food as well as some Asian dishes.</p>
              <h3 className="text-primary text-xl  pb-5 font-bold lg:text-2xl 2xl:text-[1.7rem]">Some of services, We offer:</h3>
                <ul className="list-style flex flex-col gap-1 pb-8 pl-10 2xl:text-[1.3rem]">
                  <li>Eat all you can (Buffet)</li>
                  <li>Ala Carte (short Orders)</li>
                  <li>Catering Service</li>
                  <li>Delivery service</li>
                </ul>
            </div>
            <div className="mx-auto">
              <video className="" width="300" height="300" autoPlay muted>
                <source src={require('../../assets/bulalo-video.mp4')} type="video/mp4" />
              </video>
            </div>
          </div>
          
        </div>
      </section>
      {/* VIP */}
      <section className="pb-20">
        <div className="container mx-auto px-10 sm:px-3 2xl:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-5">
            <div className="mx-auto">
              <video className="" width="300" height="300" autoPlay muted>
                <source src={require('../../assets/vip_room.mp4')} type="video/mp4" />

              </video>
            </div>
            <div className="font-poppins flex flex-col col-span-2 ">
              <h3 className="text-primary text-3xl  pb-5 pt-8 font-bold lg:text-5xl 2xl:text-[3.2rem]">VIP Room</h3>
              <h3 className="text-primary text-xl pb-5 font-bold lg:text-2xl 2xl:text-[1.7rem]">For entertainment, We offer:</h3>
                <ul className="list-style flex flex-col gap-1 pl-10 2xl:text-[1.3rem]">
                  <li>Sing along karaoke everyday open for everybody</li>
                  <li>Live Band</li>
                  <li>Tawag ng Bulalohan Singing contest</li>
                  <li>Stand-up Comedy</li>
                  <li>Acoustic Band</li>
                  <li>Solo performers We are encouraging all our beloved customers to write down their</li>
                </ul>
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
};
