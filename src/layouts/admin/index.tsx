import React, { useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "../../components/navbar";
import { NavLink, SideBar } from "../../components/sidebar";
import Footer from "../../components/footer/Footer";
import routes from "../../routes";
import { LuLayoutDashboard, LuShoppingBag } from "react-icons/lu"
import { FaTable } from "react-icons/fa";

export default function Admin(props: { [x: string]: any }) {
  const { ...rest } = props;
  const location = useLocation();
  const [open, setOpen] = React.useState(true);
  const [currentRoute, setCurrentRoute] = React.useState("Main Dashboard");

  React.useEffect(() => {
    window.addEventListener("resize", () =>
      window.innerWidth < 1200 ? setOpen(false) : setOpen(true)
    );
  }, []);
  React.useEffect(() => {
    getActiveRoute(routes);
  }, [location.pathname]);

  const getActiveRoute = (routes: RoutesType[]): string | boolean => {
    let activeRoute = "Main Dashboard";
    for (let i = 0; i < routes.length; i++) {
      if (
        window.location.href.indexOf(
          routes[i].layout + "/" + routes[i].path
        ) !== -1
      ) {
        setCurrentRoute(routes[i].name);
      }
    }
    return activeRoute;
  };
  const getActiveNavbar = (routes: RoutesType[]): string | boolean | undefined => {
    let activeNavbar = false;
    for (let i = 0; i < routes.length; i++) {
      if (
        window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
      ) {
        return routes[i].secondary;
      }
    }
    return activeNavbar;
  };
  const getRoutes = (routes: RoutesType[]): any => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route path={`/${prop.path}`} element={prop.component} key={key} />
        );
      } else {
        return null;
      }
    });
  };

  document.documentElement.dir = "ltr";

  const [sideBarCompact, setSideBarCompact] = useState(false)

  return (
    <div className="flex h-full w-full">

      <SideBar setCompact={setSideBarCompact} compact={sideBarCompact}>
        <NavLink compact={sideBarCompact} name="Dashboard" icon={<LuLayoutDashboard />} active={true} />
        <NavLink compact={sideBarCompact} name="NFT Marketplace" icon={<LuShoppingBag />} active={false} />
        <NavLink compact={sideBarCompact} name="Tables" icon={<FaTable />} active={false} />
      </SideBar>

      <div className="h-full w-full bg-lightPrimary dark:!bg-navy-900">
        <main
          className={` h-full flex-none transition-all ${sideBarCompact ? "ml-[67px]" : "ml-[293px]"}`}
        >
          <div className="h-full">
            <Navbar
              onOpenSidenav={() => setOpen(true)}
              brandText={currentRoute}
              secondary={getActiveNavbar(routes)}
              {...rest}
            />
            <div className="pt-5s mx-auto mb-auto h-full min-h-[84vh] py-2 px-4">
              <Routes>
                {getRoutes(routes)}

                <Route
                  path="/"
                  element={<Navigate to="/admin/default" replace />}
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
