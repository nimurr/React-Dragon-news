import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

 
export default function LeftSidenav() {

    const [categories , setCategories] = useState([]);

    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])



  return (
    <div>
       <h2 className="text-xl font-semibold mb-5">All Category</h2>
       <div className="flex flex-col gap-1">
            {
                categories.map(data => <Link key={data.id} className="hover:bg-blue-100 p-2 rounded"> {data.name}</Link>)
            }
       </div>
    </div>
  )
}
