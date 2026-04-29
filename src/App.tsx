import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterForm from "./page/RegisterForm";
import Beranda from "./page/Beranda";
import Competition from "./page/Competition";
import Seminar from "./page/Seminar";
import Workshop from "./page/Workshop";
import Talkshow from "./page/Talkshow";
import LoginForm from "./page/LoginForm";
import MainLayout from "./layouts/MainLayout";
import AuthLayouts from "./layouts/AuthLayouts";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import DashboardIndex from "./dashboard/DashboardIndex";
import DashboardLayouts from "./layouts/DashboardLayouts";
import CategoryIndex from "./dashboard/category/CategoryIndex";
import EventIndex from "./dashboard/event/EventIndex";
import CategoryCreate from "./dashboard/category/CategoryCreate";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Beranda />} />
          <Route path="/competition" element={<Competition />} />
          <Route path="/seminar" element={<Seminar />} />
          <Route path="/workshop" element={<Workshop />} />
          <Route path="/talkshow" element={<Talkshow />} />
        </Route>
        <Route element={<AuthLayouts />}>
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
        </Route>
        <Route>
          <Route element={<ProtectedRoutes />}>
            <Route  element={<DashboardLayouts />}>
              <Route path="/dashboard" element={<DashboardIndex />} />
              <Route path="/dashboard/category" element={<CategoryIndex />} />
              <Route path="/dashboard/category/create" element={<CategoryCreate />} />
              <Route path="/dashboard/event" element={<EventIndex />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
