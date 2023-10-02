import kits1 from  '../assets/qZone1.png'
import kits2 from  '../assets/qZone2.png'
import kits3 from  '../assets/qZone3.png'


export default function RightSidNav() {
    return (
        <div>
            <div className="mb-10">
                <h2 className="text-2xl mb-4 font-semibold">Login with </h2>
                <p className="flex mb-2 items-center gap-4 cursor-pointer p-2 border border-blue-500 rounded-md justify-center"><img className="w-8" src="https://img.icons8.com/?size=256&id=V5cGWnc9R4xj&format=png" alt="" /> login with Google</p>
                <p className="flex mb-2 items-center gap-4 cursor-pointer p-2 border border-blue-500 rounded-md justify-center"><img className="w-8" src="https://img.icons8.com/?size=256&id=106562&format=png" alt="" /> login with Github</p>
            </div>
            <div className="mb-10">
                <h2 className="text-2xl mb-4 font-semibold">Find Us on</h2>
                <p className="mb-1 flex items-center gap-4 border cursor-pointer p-2 text-sm"><img className="w-6" src="https://img.icons8.com/?size=256&id=118497&format=png" alt="" /> Facebook</p>
                <p className="mb-1 flex items-center gap-4 border cursor-pointer p-2 text-sm"><img className="w-6" src="https://img.icons8.com/?size=256&id=13963&format=png" alt="" /> Twitter</p>
                <p className="mb-1 flex items-center gap-4 border cursor-pointer p-2 text-sm"><img className="w-6" src="https://img.icons8.com/?size=256&id=Xy10Jcu1L2Su&format=png" alt="" /> Instagram</p>
            </div>
            <div className="mb-10">
                <h2 className="text-2xl mb-4 font-semibold">Q-Zone</h2>
                <div className='p-4 border rounded-md mb-2'>
                    <img className='w-full' src={kits1} alt="" />
                </div>
                <div className='p-4 border rounded-md mb-2'>
                    <img className='w-full' src={kits2} alt="" />
                </div>
                <div className='p-4 border rounded-md mb-2'>
                    <img className='w-full' src={kits3} alt="" />
                </div>
            </div>
        </div>
    )
}
