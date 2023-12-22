import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "../../components/navbar";
import { NavLink, SideBar } from "../../components/sidebar";
import Footer from "../../components/footer/Footer";
import { LuLayoutDashboard, LuShoppingBag } from "react-icons/lu"
import { FaTable } from "react-icons/fa";
import Dashboard from "../../views/admin/default";
import Tables from "../../views/admin/tables";

export default function Admin(props: { [x: string]: any }) {
  const { ...rest } = props;

  const [sideBarCompact, setSideBarCompact] = useState(false)
  const [name, setName] = useState("Admin")

  return (
    <div className="flex h-full w-full">

      <SideBar setCompact={setSideBarCompact} compact={sideBarCompact}>
        <NavLink compact={sideBarCompact} name="Dashboard" icon={<LuLayoutDashboard />} active={window.location.pathname.startsWith("/admin/home")} to="/admin/home" />
        <NavLink compact={sideBarCompact} name="NFT Marketplace" icon={<LuShoppingBag />} active={false} />
        <NavLink compact={sideBarCompact} name="Tables" icon={<FaTable />} active={window.location.pathname.startsWith("/admin/table")} to="/admin/table" />
      </SideBar>

      <div className="h-full w-full bg-lightPrimary dark:!bg-navy-900">
        <main
          className={` h-full flex-none transition-all ${sideBarCompact ? "ml-[67px]" : "ml-[293px]"}`}
        >
          <div className="h-full">
            <Navbar
              onOpenSidenav={() => { setSideBarCompact(!sideBarCompact) }}
              brandText={name}
              {...rest}
            />
            <div className="pt-5s mx-auto mb-auto h-full min-h-[84vh] py-2 px-4">

              <Routes>
                <Route
                  path="/home"
                  element={<Dashboard setName={setName} />}
                />
                <Route
                  path="/table"
                  element={<Tables setName={setName} />}
                />
                <Route
                  path="/"
                  element={<Navigate to="/admin/home" replace />}
                />
              </Routes>

            </div>
            <div className="p-3">
              <Footer />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
