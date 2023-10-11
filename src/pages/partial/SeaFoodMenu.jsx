
import { NavLink } from "react-router-dom"

import { SeaFoodMenuData } from "../../components/JSONFormat/MenuListData/MenuListData"

export const SeaFoodMenu = () => {
  return (
    <>
      <section className="py-40 font-poppins ">
        <div className="container mx-auto px-5 sm:px-3 2xl:px-0">
          <NavLink to="/menu" onClick={()=>window.scrollTo(0, 0)}><button className='text-white bg-primary text-[1.4rem] px-4 py-2  border border-primary rounded-lg hover:bg-transparent hover:text-primary focus:outline-none hover:border-primary hover:focus:ring-primary hover:focus:border-primary sm:px-7 sm:py-4'>Go Back</button></NavLink>
          <h2 className="text-primary text-7xl font-dancing pt-20 font-semibold text-center 2xl:text-[5rem] 2xl:leading-none">Seafoods</h2>
          <p className="text-center pb-20 pt-5 2xl:text-[1.5]">"From the ocean to your table, experience seafood like never before."</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {SeaFoodMenuData.map((seaFoodMenu)=>{
              const {id, img, title, price , alt} = seaFoodMenu
              return(
                <div key={id} className="mx-auto border border-white dark:border w-[300px] flex flex-col rounded-lg overflow-hidden dark:bg-darkModeGray dark:border-darkModeGray lg:w-[330px]" style={{boxShadow: "0 0 15px -5px rgba(0, 0, 0, 0.5)"}}>
                  <div >
                    <img src={img} className="w-full h-[210px] object-cover rounded-lg transition-transform duration-1000 transform-gpu hover:scale-110" alt={alt} />
                  </div>
                  <div className="px-5 py-5 rounded-lg">   
                    <p className="text-[1.2rem] text-font-bold pb-3 2xl:text-[1.4rem]">{title}</p> 
                    <p className="text-[1.2rem] pt-3 pb-5">{price}</p>
                    <button className='text-white border border-primary text-[1rem]  bg-primary px-3 py-2 rounded-lg hover:bg-transparent hover:text-primary focus:outline-none hover:border-primary hover:focus:ring-primary hover:focus:border-primary 2xl:text-[1.2rem] 2xl:px-4'>Order Now</button>
                  </div>  
                </div>
              )
            })} 
          </div>
        </div>
      </section>
    </>
  )
}
