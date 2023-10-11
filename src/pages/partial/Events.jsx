import {useState, useEffect} from "react"

// import images
import Showtime from "../../assets/events-img/Event_Showtime.png"
import DynamixBand from "../../assets/events-img/Event_Dynamix_Band.png"
import GandangGabiDave from "../../assets/events-img/Event_Ganda_Gabi_Dave.png"
import AcousticNight from "../../assets/events-img/Event_Acoustic.png"

// import pages
import VideoModal from '../../components/Modal/VideoModal';

export const Events = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState('');

  const openModal = (videoUrl) => {
    setSelectedVideo(videoUrl);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedVideo('');
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };
  useEffect(() => {
    // Ensure that the scroll behavior is reverted when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <>
        {/* list of event section */}
        <section className='pt-36 font-poppins'>
            <div className='container  mx-auto px-10 2xl:px-0'>
                <h2 className="text-primary text-[2rem]  font-semibold sm:text-4xl md:text-[3.5rem] md:leading-none lg:text-6xl font-dancing text-center pb-3 pt-10 2xl:text-[3.9rem]">Welcome to the Ultimate Entertainment Experience</h2>
                <p className="text-[.8rem] sm:text-[.9rem] md:text-[1.1rem] text-center pb-36 2xl:text-[1.2rem]">"Where every moment is a symphony of joy and connection, and every event is a canvas of unforgettable memories"</p>
                {/* showtime */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 pb-10'>
                    <img src={Showtime} className="w-full h-full object-cover" alt="A man that showcase the showtime" />
                    <div className="flex flex-col items-center justify-center ">
                        <h2 className="text-primary text-[1.5rem] font-semibold">SHOWTIME</h2>
                        <p>Join us for an unforgettable night where laughter takes center stage. Our talented comedians, armed with humor and wit, will keep you entertained and smiling throughout the evening. Prepare for a delightful showcase of comedy that's sure to leave you in stitches and create lasting memories.</p>
                    </div>
                </div>
                {/* dynamic band */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 pb-10'>
                    <div className="flex flex-col items-center justify-center order-2 lg:order-1">
                        <h2 className="text-primary text-[1.5rem] font-semibold">DYNAMIX BAND</h2>
                        <p>Join us for a musical journey like no other as our 'Dynamic Band' takes the stage! Feel the beat, hear the melodies, and let the music move your soul. With their infectious energy and remarkable talent, our band is ready to make every moment unforgettable. Join us in celebrating the power of music and dance the night away with friends and fellow music enthusiasts. Get ready to create memories you'll cherish forever.</p>
                    </div>
                    <div className="order-1 lg:order-2">
                        <img src={DynamixBand} className="w-full h-full object-cover" alt="A group of band called Dynamix Band" />
                    </div>
                </div>
                {/* gandang gabi dave */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 pb-10'>
                    <img src={GandangGabiDave} className="w-full h-full object-cover" alt="A man that showcase the showtime" />
                    <div className="flex flex-col items-center justify-center ">
                        <h2 className="text-primary text-[1.5rem] font-semibold">GANDANG GABI DAVE</h2>
                        <p>Join us for a night of entertainment and lively conversation with 'Gandang Gabi Dave.' This segment brings the charm and humor of talk-show-style entertainment to our event. Our host, Dave, welcomes special guests for a fun-filled evening of laughter, insights, and engaging conversations. Get ready to be entertained, enlightened, and share a few laughs as we delve into intriguing topics and enjoy the company of our special guests. Join us for an unforgettable night of camaraderie and entertainment.</p>
                    </div>
                </div>
                {/* acoustic night */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 pb-10'>
                    <div className="flex flex-col items-center justify-center order-2 lg:order-2">
                        <h2 className="text-primary text-[1.5rem] font-semibold">ACOUSTIC NIGHT</h2>
                        <p>Join us for an enchanting 'Acoustic Night' under the starlit sky. It's a night where the gentle strumming of guitars and the soulful voices of our musicians will transport you to a world of musical serenity. Gather around, savor the intimate atmosphere, and let the melodies wash over you. Whether you're a music enthusiast or simply looking for a relaxing evening, 'Acoustic Night' invites you to unwind, connect with friends, and savor the beauty of acoustic sounds.</p>
                    </div>
                    <div className="order-1 lg:order-2">
                        <img src={AcousticNight} className="w-full h-full object-cover" alt="A group of band called Dynamix Band" />
                    </div>
                </div>
            </div>
        </section>
        {/* short story time */}
        <section className="font-poppins py-20">
            <div className="container mx-auto px-10">
                <h2 className="text-primary text-[2rem]  font-semibold sm:text-4xl md:text-[3rem] md:leading-none lg:text-6xl font-dancing text-center pb-10 pt-10 2xl:text-[3.9rem]">Journey Through Our Short Story Time</h2>
                <div className="flex justify-center gap-10 flex-wrap">
                    {/* 1st video */}
                    <video width="350" className="rounded-lg cursor-pointer" onClick={() => openModal(require('../../assets/events-img/video1.mp4'))}
>
                        <source src={require('../../assets/events-img/video1.mp4')} type="video/mp4"  />
                    </video>
                    {/* 2nd video */}
                    <video width="350" className="rounded-lg cursor-pointer" onClick={() => openModal(require('../../assets/events-img/video2.mp4'))}>
                        <source src={require('../../assets/events-img/video2.mp4')} type="video/mp4" />
                    </video>
                    {/* 3rd video */}
                    <video width="350" className="rounded-lg cursor-pointer" onClick={() => openModal(require('../../assets/events-img/video3.mp4'))}>
                        <source src={require('../../assets/events-img/video3.mp4')} type="video/mp4" />
                    </video>
                    {/* 4th video */}
                    <video width="350" className="rounded-lg cursor-pointer" onClick={() => openModal(require('../../assets/events-img/video4.mp4'))}>
                        <source src={require('../../assets/events-img/video4.mp4')} type="video/mp4" />
                    </video>
                    {/* 5th video */}
                    <video width="350" className="rounded-lg cursor-pointer" onClick={() => openModal(require('../../assets/events-img/video5.mp4'))}>
                        <source src={require('../../assets/events-img/video5.mp4')} type="video/mp4" />
                    </video>
                    {/* 6th video */}
                    <video width="350" className="rounded-lg cursor-pointer" onClick={() => openModal(require('../../assets/events-img/video6.mp4'))}>
                        <source src={require('../../assets/events-img/video6.mp4')} type="video/mp4" />
                    </video>
                </div>
                {isModalOpen && (
                    <VideoModal videoUrl={selectedVideo} onClose={closeModal} />
                )}
            </div>
        </section>
    
    
    </>
  )
}
