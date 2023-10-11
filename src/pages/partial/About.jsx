import Bulalohan from "../../assets/about-img/bulalo-restaurant.jpg"
import about1 from "../../assets/about-img/organization-member1.jpg"
import about2 from "../../assets/about-img/organization-member2.jpg"
import about3 from "../../assets/about-img/organization-member3.jpg"
import about4 from "../../assets/about-img/organization-member4.jpg"

export const About = () => {
  return (
    <>
        {/* about section */}
        <section className="pt-40 pb-20 font-poppins">
            <div className="container mx-auto px-10 md:px-3 lg:px-5 2xl:px-0">
                <div className="grid md:grid-cols-2 gap-7 sm:gap-6 lg:gap-7">
                    <img className="w-full h-full" src={Bulalohan} alt="about" />
                    <div className="flex flex-col justify-center gap-5 md:text-[.8rem] md:leading-tight lg:text-[1rem]">
                        <p className="2xl:text-[1.3rem]"><span className="font-semibold text-primary text-xl 2xl:text-[1.4rem]">Welcome to Bulalohan sa Riyadh!</span> your gateway to an exceptional dining experience! Our commitment is to offer you a warm, inviting atmosphere and a wide array of culinary delights that cater to all tastes and preferences.</p>
                        <p className="2xl:text-[1.3rem]">We take pride in offering a wide range of services designed to enhance your dining experience From our diverse menu that features <span className="text-primary font-semibold">breakfast</span> delights, sumptuous <span className="text-primary font-semibold">seafood,</span> savory <span className="text-primary font-semibold">beef,</span> mouthwatering <span className="text-primary font-semibold">chicken,</span> and health-conscious <span className="text-primary font-semibold">vegetable</span> options, to comforting <span className="text-primary font-semibold">noodles</span> and perfectly <span className="text-primary font-semibold">cooked rice dishes,</span> our culinary offerings are sure to delight your taste buds. But what truly sets us apart are our specialty menus, where we shine the brightest including <span className="text-primary font-semibold">boodle fight, special bilao, crispy pata, bulalo special and eat all you can. </span></p>
                        <p className="2xl:text-[1.3rem]">Our commitment to quality, flavor, and tradition is evident in every dish we serve. Whether you're looking for a quick breakfast, a seafood feast, or a comforting bowl of Bulalo, we're here to make your dining experience unforgettable. Join us at Bulalohan sa Riyadh, where Filipino cuisine meets exceptional service."</p>
                    </div>
                </div>
            </div>
        </section>
        {/* organization section */}
        <section>
            <div className="container mx-auto px-10 2xl:text-px-0">
                <h2 className="text-center text-[1.8rem] sm:text-4xl font-bold text-primary bg-shade 2xl:text-[2.4rem]">Bulalohan Organization</h2>
                <div className="p-5"> 
                    <div className="flex justify-center">
                        <div className="w-full max-w-sm mt-10">
                            {/* director */}
                            <div className="flex flex-col items-center">
                                <img className="w-32 rounded-full shadow-lg dark:shadow-black/20" src={about1} alt="President"/>
                                <h5 className="text-[1.3rem] font-bold text-primary pt-2 2xl:text-[1.8rem]">Melissa</h5>
                                <span className="text-[.9rem] font-semibold 2xl:text-[1.2rem]">Director</span>
                            </div>
                        </div>
                    </div>
                    <div className=" my-10 lg:my-24 md:px-6 text-center">   
                        <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
                            {/* team manager */}
                            <div className="mb-12 md:mb-0">
                                <div className="mb-6 flex justify-center">
                                    <img src={about2} className="w-32 rounded-full" alt="Team Manager"/>
                                </div>
                                <h5 className="text-[1.3rem] font-bold text-primary 2xl:text-[1.8rem]">Jonathan</h5>
                                <h6 className="text-[.9rem] font-semibold 2xl:text-[1.2rem]">Team Manager</h6>
                            </div>
                            {/* senior manager */}
                            <div className="mb-12 md:mb-0">
                                <div className="mb-6 flex justify-center">
                                    <img src={about3} className="w-32 rounded-full" alt="Sr. Manager" />
                                </div>
                                <h5 className="text-[1.3rem] font-bold text-primary 2xl:text-[1.8rem]">Billy</h5>
                                <h6 className="text-[.9rem] font-semibold 2xl:text-[1.2rem]">Sr. Manager</h6>
                            </div>
                            {/* manager */}
                            <div className="mb-0">
                                <div className="mb-6 flex justify-center">
                                    <img src={about4} className="w-32 rounded-full" alt="Manager"/>
                                </div>
                                <h5 className="text-[1.3rem] font-bold text-primary 2xl:text-[1.8rem]">Carol</h5>
                                <h6 className="text-[.9rem] font-semibold 2xl:text-[1.2rem]">Manager</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </section>
    </>
  );
};