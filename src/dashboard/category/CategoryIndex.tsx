import { Link } from "react-router-dom";

export default function CategoryIndex() {
    return (
        <div className="p-6">
            <div className="flex items-center justify-between border-b-4 border-black pb-4 mb-6">
                <h2 className="text-2xl font-black uppercase tracking-tight">Kategori Event</h2>
                <Link
                    to="/dashboard/category/create"
                    className="bg-yellow-300 text-black font-black uppercase text-sm px-4 py-2 border-2 border-black shadow-[3px_3px_0px_0px_#000] hover:bg-yellow-400 hover:shadow-[5px_5px_0px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0px_0px_#000] transition-all"
                >
                    + Add New Category
                </Link>
            </div>
        </div>
    );
}