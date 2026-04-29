import { Link } from "react-router-dom";

export default function CategoryIndex() {
    return (
        <div >
            <h2>Ini kategori event</h2>
            <Link to="/dashboard/category/create" className="p-1 bg-blue-400 r rounded text-white  ">Add New Category</Link>
        </div>
    );
}