import Header from "../../components/Header";
import LeftSidenav from "../../components/LeftSidenav";
import Navbar from "../../components/Navbar";
import RightSidNav from "../../components/RightSidNav";
import BrackingNews from "./BrackingNews";

 
export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
        <Header></Header>
        <BrackingNews></BrackingNews>
        <Navbar></Navbar>
        <div className="grid md:grid-cols-4 mx-4 my-10">
            <div className="col-span-1">
                <LeftSidenav></LeftSidenav>
            </div>
            <div className="md:col-span-2">
                <h2 className="text-4xl font-semibold">news coming soon...</h2>
            </div>
            <div className="col-span-1">
                <RightSidNav></RightSidNav>
            </div>
        </div>
    </div>
  )
}
