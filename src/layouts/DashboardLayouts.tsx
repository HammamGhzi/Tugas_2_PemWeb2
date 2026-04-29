import { Navigate, Outlet, useNavigate, Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

export default function DashboardLayouts() {
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
    alert("Logout berhasil!");
  };
  return (
    <div className="flex min-h-screen w-full">
      <div className="w-64 p-4 bg-amber-50 h-screen flex flex-col justify-between">
        <div className="border-b border-black text-center p-2">
          <h2 className="text-black text-2xl ">InvoFest Dashboard</h2>
        </div>

        <div className="flex flex-col gap-6">
          <Link to="/dashboard"className="text-black hover:bg-amber-200 p-2 rounded">Dashboard</Link>
          <Link to="/dashboard/category" className="text-black hover:bg-amber-200 p-2 rounded">Category</Link>
          <Link to="/dashboard/event" className="text-black hover:bg-amber-200 p-2 rounded">Event</Link>
          
        </div>

        <div>
          <button
            onClick={handleLogout}
            className="bg-red-500 p-2 text-white w-full hover:bg-amber-600 hover:text-black"
            type="button"
          >
            Logout
          </button>
        </div>
      </div>
      <div className="w-full p-4">
        <Outlet />
      </div>
    </div>
  );
}
