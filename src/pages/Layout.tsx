import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function Layout() {
  return (
    <div className="bg-custom-gradient ">
      <div className="min-h-dvh container mx-auto">
        {/* Add any common layout components here, like a header or sidebar */}
        <NavBar />
        {/* This is where the child routes will be rendered */}
        <main className="py-24 mx-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
