"use client";

import { Menu } from "antd";

import menuItems from "@/menu-items/main";
import menuItemsSetting from "@/menu-items/setting"
import React, { useState, useEffect } from "react";
import {
  redirect,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { useMediaQuery } from "react-responsive";


const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const query = useSearchParams();
  // const isAuth = query.get("auth");
  // const { expireDate, accessToken } = useAuth();

  const isMobile = useMediaQuery({ query: "(max-width: 1168px)" });
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const pathname: string = usePathname();

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    if (isMobile) {
      setCollapsed(true);
    } else {
      setCollapsed(false);
    }
  }, [isMobile]);

  return (
    <div>
      <div className="grid-cols flex min-h-screen">
        <div
          className={`bg-[#060C2C] text-white py-8 flex flex-col ${collapsed ? "!w-[64px]" : "!w-[266px]"
            }`}
        >
          <div className="flex items-center py-0 mb-[14px] !h-18">
            {!collapsed && (
              <div className="bg-[#181D3B] flex w-[95%] rounded-r-3xl px-[15px] py-4 gap-2">
                <div className="rounded-full bg-[#E6E1E5]">
                  <p className="text-2xl px-4 py-2 text-black">R</p>
                </div>
                <div>
                  <p>Welcome back</p>
                  <div className="flex gap-2 items-center">
                    <p className="text-base">Rex</p>
                    <p className="text-lg font-semibold">ID: RAC45678</p>
                  </div>
                </div>
              </div>
            )}
            {collapsed && (
              <div>
                <style jsx global>
                  {`
                  .ant-menu-item {
                    width: 56px !important;
                  }
                  `}
                </style>
                <div className="bg-[#181D3B] flex w-[60px] rounded-r-3xl px-[5px] py-5">
                  <div className="rounded-full bg-[#E6E1E5]">
                    <p className="text-2xl px-4 py-2 text-black">R</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="flex">
            <Menu
              theme={"dark"}
              defaultSelectedKeys={[pathname.slice(1)]}
              mode="inline"
              inlineCollapsed={collapsed}
              items={menuItems}
              className="!bg-[#060C2C] !text-[#939396]"
            />
            {/* <Button
              type="link"
              onClick={toggleCollapsed}
              className="!mx-[-18px] !px-0 !mt-2"
            >
              {collapsed ? <IconClose /> : <IconExpand />}
            </Button> */}
          </div>
          <div className="pb-10 mt-auto">
            {collapsed && (
              <div>
                <style jsx global>
                  {`
                  .ant-menu {
                    width: 56px !important;
                  }
                  `}
                </style>
              </div>
            )}
            <div className="h-[2px] bg-[#939396] mx-4"></div>
            <Menu
              theme={"dark"}
              mode="inline"
              inlineCollapsed={collapsed}
              items={menuItemsSetting}
              className="!bg-[#060C2C] !text-[#939396] !mt-4"
            />
          </div>
        </div>
        <div
          className={`bg-[#F4EFF4] ${collapsed ? "w-[calc(100vmax-3.5rem)]" : "w-[calc(100vmax-16.65rem)]"
            }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
export default Layout;
