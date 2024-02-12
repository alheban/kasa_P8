import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import { DataProvider} from "../hooks/useContext";

export default function Layout (){
  return <>
  <DataProvider>
        <Header/>
        <Outlet/>
      <Footer/>
      </DataProvider>
  </>
}