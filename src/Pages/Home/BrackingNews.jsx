import Marquee from "react-fast-marquee";


export default function BrackingNews() {
    return (
        <div>
            <p className="flex border-2 border-red-500 items-center rounded overflow-hidden"><span className="bg-red-500 text-white font-semibold w-40 py-4 px-2" >Breaking News</span> 
            <Marquee pauseOnHover={true} speed={100}>
                I can be a React component, multiple React components, or just some text.
                I can be a React component, multiple React components, or just some text.
            </Marquee></p>
        </div>
    )
}
