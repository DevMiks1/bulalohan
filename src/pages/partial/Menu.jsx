
import { Link } from "react-router-dom"
import { MenuData } from "../../components/JSONFormat/MenuData/MenuData"


export const Menu = () => {
  return (
    <>
        <section className="py-20 font-poppins">
            <div className="container mx-auto px-10 2xl:px-0 ">
                <h2 className="text-primary text-[2rem] font-semibold sm:text-4xl md:text-[3.5rem] lg:text-6xl font-dancing text-center pb-3 pt-10 2xl:text-[3.9rem]">Welcome to Bulalohan sa Riyadh</h2>
                <p className="text-[.8rem] sm:text-[.9rem] md:text-[1.1rem] text-center pb-14 2xl:text-[1.3rem]">"Where every meal is a journey of flavors and traditions"</p>
                <div className="grid lg:grid-cols-3 gap-10">
                   {MenuData.map((menu)=> {
                        const {id, img, title,link} = menu
                        return(
                        <div key={id} className="text-primary border border-white dark:border-darkModeGray  flex flex-col rounded-lg transition-transform duration-500 transform-gpu hover:scale-110 hover:bg-primary hover:text-white dark:hover:bg-primary dark:bg-darkModeGray" style={{boxShadow: "0 0 15px -5px rgba(0, 0, 0, 0.5)"}}>
                        <div >
                            <img src={img} className="w-full h-[210px] object-cover rounded-lg" alt="" />
                        </div>
                        <div className="px-10 py-7 rounded-lg ">   
                            <Link to={link}><p className="  text-[1.2rem] font-semibold text-center cursor-pointer" onClick={()=>window.scrollTo(0, 0)}>{title}</p></Link>
                        </div>  
                    </div>
                   )})}
                </div> 
            </div>
        </section>
    </>
  )
}
