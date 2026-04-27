import { Outlet } from "react-router-dom";

export default function AuthLayouts() {
    return (
        <div className="grid grid-cols-2 min-h-screen items-center"> 
        <div className="bg-gray-100 h-screen flex items-center justify-center">
            <img
                src="https://www.invofest-harkatnegeri.com/assets/text-image.png"
                alt=""
                className="w-96"
                />
        </div>
        <div className="p-6"><Outlet /></div>
        </div>
    );}