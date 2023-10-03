import { Link, useLoaderData } from "react-router-dom";
import Header from "../../components/Header";
import LeftSidenav from "../../components/LeftSidenav";
import Navbar from "../../components/Navbar";
import RightSidNav from "../../components/RightSidNav";
import BrackingNews from "./BrackingNews";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useContext } from "react";


export default function Home() {
    const {loading} = useContext(AuthContext)
    const apiData = useLoaderData();
    console.log(apiData)
    if(loading){
        return <span className="loading loading-spinner  w-[50px] block my-40 mx-auto"></span>;

    }
    


    return (
        <div className="max-w-7xl mx-auto">
            <Header></Header>
            <BrackingNews></BrackingNews>
            <Navbar></Navbar>

            <div className="grid md:grid-cols-4 gap-5 mx-4 my-10">
                <div className="col-span-1">
                    <LeftSidenav></LeftSidenav>
                </div>

                <div className="md:col-span-2">
                    <h2 className="text-4xl font-semibold">news coming soon...</h2>
                    {
                        apiData.map(news =>
                            <div className="mb-10 border rounded" key={news._id}>
                                <div className="bg-gray-200 flex items-center justify-between p-4">
                                    <div className="flex gap-4">
                                        <img className="w-12 rounded-full" src={news.author.img} alt="" />
                                        <div>
                                            <h2>{news.author.name}</h2>
                                            <p>{news.author.published_date}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <i className='bx text-2xl mr-2 bx-bookmark'></i>
                                        <i className='bx text-2xl mr-2 bx-share-alt' ></i>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <h2>{news.title}</h2>
                                    <img className="w-full h-[50vh] " src={news.thumbnail_url} alt="" />
                                    <p>{news.details.slice(0, 200)} <Link to={`/${news._id}`} className="text-blue-500 font-semibold">ReadMore...</Link></p>
                                    <div className="flex items-center justify-between">
                                        <ul className="flex gap-1 items-center">
                                            <li><i className='bx text-xl text-orange-500 bxs-star'></i></li>
                                            <li><i className='bx text-xl text-orange-500 bxs-star'></i></li>
                                            <li><i className='bx text-xl text-orange-500 bxs-star'></i></li>
                                            <li><i className='bx text-xl text-orange-500 bxs-star'></i></li>
                                            <li><i className='bx text-xl text-orange-500 bxs-star'></i></li>
                                            <li className="ml-2">{news.rating.number}</li>
                                        </ul>
                                        <ul className="flex justify-between items-center gap-2">
                                            <li><img className="w-6" src="https://img.icons8.com/?size=256&id=986&format=png" alt="" /></li>
                                            <li>{news.total_view}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>

                <div className="col-span-1">
                    <RightSidNav></RightSidNav>
                </div>
            </div>
        </div>
    )
}
