import React from 'react'

export const Book = () => {
  return (
    <>
        {/* book section */}
        <section className='py-40 font-poppins'>
            <div className='container mx-auto'>
                <div className='px-5 pb-5'>
                    <h2 className='text-primary text-4xl'>BOOK A TABLE</h2>
                    <p className='py-2'>Dine in with your Friends and Family.</p>
                    <hr className='border-2 border-primary '/>
                </div>
                
                <form action="" className='dark:text-black'>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 pb-5'>
                        <div className='flex flex-col px-5'>
                            <label htmlFor="yourName" className='text-lightDark'>Your Name</label>
                            <input type="text" id='yourName' className=' border border-lightDark  focus:outline-none focus:ring-primary focus:border-primary rounded-lg'/>
                        </div>
                        <div className='flex flex-col px-5'>
                            <label htmlFor="yourName" className='text-lightDark'>Email Address</label>
                            <input type="text" id='yourName' className='border border-lightDark focus:outline-none focus:ring-primary focus:border-primary rounded-lg'/>
                        </div>
                        <div className='flex flex-col px-5'>
                            <label htmlFor="yourName" className='text-lightDark'>Phone</label>
                            <input type="text" id='yourName' className='border border-lightDark focus:outline-none focus:ring-primary focus:border-primary rounded-lg'/>
                        </div>
                        <div className='flex flex-col px-5'>
                            <label htmlFor="yourName" className='text-lightDark'>Date</label>
                            <input type="date" id='yourName' className='w-full border border-lightDark focus:outline-none focus:ring-primary focus:border-primary rounded-lg'/>
                        </div>
                        <div className='flex flex-col px-5'>
                            <label htmlFor="yourName" className='text-lightDark'>Time</label>
                            <input type="time" id='yourName' className='w-full border border-lightDark focus:outline-none focus:ring-primary focus:border-primary rounded-lg'/>
                        </div>
                        <div className='flex flex-col px-5'>
                            <label htmlFor="yourName" className='text-lightDark'>No. of People</label>
                            <input type="number" id='yourName' className='border border-lightDark focus:outline-none focus:ring-primary focus:border-primary rounded-lg'/>
                        </div>
                    </div>                 
                    <div className='flex flex-col px-5'>
                        <label htmlFor="yourName" className='text-lightDark'>Message</label>
                        <textarea type="message" rows='10'  id='yourName' className='p-4 border border-lightDark focus:outline-none focus:ring-primary focus:border-primary rounded-lg'></textarea>
                    </div>
                    <div className='py-10 text-center'>
                        <button className='btn'>Book Table</button>
                    </div>
                </form>
            </div>
        </section>

        {/* contact section */}
        <section className='font-poppins'>
            <div className='container mx-auto  lg:px-0'>
                <div className='px-5 pb-5'>
                    <h2 className='text-primary text-4xl'>CONTACT</h2>
                    <p className='py-2'>Do not hesitate to reach our experienced IT experts should you have any further inquiries or concerns.</p>
                    <hr className='border-2 border-primary '/>
                </div>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 pb-10 gap-10">
                    <form action="" className='dark:text-black'>
                        <div className='flex flex-col pb-10 px-5'>
                            <label htmlFor="yourName" className='text-lightDark'>Your Name</label>
                            <input type="text" id='yourName' className='border border-lightDark  focus:outline-none focus:ring-primary focus:border-primary rounded-lg'/>
                        </div>
                        <div className='flex flex-col pb-10 px-5'>
                            <label htmlFor="yourName" className='text-lightDark'>Email Address</label>
                            <input type="text" id='yourName' className='border border-lightDark focus:outline-none focus:ring-primary focus:border-primary rounded-lg'/>
                        </div>
                        <div className='flex flex-col px-5'>
                            <label htmlFor="yourName" className='text-lightDark'>Message</label>
                            <textarea type="message" rows='10'  id='yourName' className='p-4 border border-lightDark focus:outline-none focus:ring-primary focus:border-primary rounded-lg'></textarea>
                        </div>
                        <div className='py-10 text-center'>
                            <button className='btn  '>Send Message</button>
                        </div>
                    </form>
                    <div className="hidden sm:flex justify-center items-center">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.0338304262573!2d46.706615174502666!3d24.69136375200473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03eec5e1d8c9%3A0x76de420c85c2021b!2sBulalohan%20sa%20Riyadh!5e0!3m2!1sen!2sph!4v1696607007551!5m2!1sen!2sph" width="100%" height="400" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>    
                </div>
            </div>
        </section>
    </>
  )
}
