import { Link, useLoaderData, useParams } from "react-router-dom";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import { useEffect, useState } from "react";
import RightSidNav from "../../components/RightSidNav";


export default function NewsDetails() {
    const newsData = useLoaderData();
    const { id } = useParams();

    const [cardData, setCardData] = useState([]);

    useEffect(() => {
        const data = newsData.filter(idx => idx._id == id)
        setCardData(data)
    }, [id])
    // console.log(cardData)

    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-3 w-11/12 gap-6 mx-auto">
                <div className="col-span-2">
                    <h3 className="text-5xl font-semibold mb-10">News Details</h3>
                    {
                        cardData.map((d, i) =>
                            <div key={i}>
                                <img className="w-full h-[70vh] " src={d.thumbnail_url} alt="" />
                                <h2 className="text-xl font-semibold my-5">{d.title}</h2>
                                <p>{d.details}</p>
                            </div>
                        )
                    }
                    <Link className="btn p-2 bg-blue-500 mt-10" to='/'> Go Home</Link>
                </div>
                <div className="col-span-1">
                    <RightSidNav></RightSidNav>
                </div>
            </div>

        </div>
    )
}
