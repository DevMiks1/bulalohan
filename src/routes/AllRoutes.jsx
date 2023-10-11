import {Routes,Route} from "react-router-dom"

// import all pages
import {Home, About, Menu, Events, Book, BreakFastMenu, SpecialtyMenu, SeaFoodMenu, PageNotFound, BeefMenu, ChickenMenu, VegetableMenu, NoodlesMenu, RiceMenu, DessertsMenu, BeveragesMenu} from "../pages/compiler/index"

export const AllRoutes = () => {
    return(
        <div className="bg-white text-black dark:bg-darkModeBlack dark:text-white">
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/menu" element={<Menu />}></Route>
                <Route path="/events" element={<Events />}></Route>
                <Route path="/book" element={<Book />}></Route>
                <Route path="/breakfastmenu" element={<BreakFastMenu />}></Route>
                <Route path="/specialtymenu" element={<SpecialtyMenu />}></Route>
                <Route path="/seafoodmenu" element={<SeaFoodMenu />}></Route>
                <Route path="/beefmenu" element={<BeefMenu />}></Route>
                <Route path="/chickenmenu" element={<ChickenMenu />}></Route>
                <Route path="/vegetablemenu" element={<VegetableMenu />}></Route>
                <Route path="/noodlesmenu" element={<NoodlesMenu />}></Route>
                <Route path="/ricemenu" element={<RiceMenu />}></Route>
                <Route path="/dessertsmenu" element={<DessertsMenu />}></Route>
                <Route path="/beveragesmenu" element={<BeveragesMenu />}></Route>
                


                <Route path="*" element={<PageNotFound />}></Route>

            </Routes>
        </div>
    )
}