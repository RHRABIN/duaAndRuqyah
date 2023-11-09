"use client"
import SidebarCategory from "@/components/category/SidebarCategory";
import Header from "@/components/header/Header";
import MenuBar from "@/components/menubar/MenuBar";
import Settings from "@/components/settings/Settings";
import React, { ReactNode } from "react";
type MainProps = {
    children: ReactNode;
};
const MainLayout: React.FC<MainProps> = ({ children }) => {


    return (
        <div className=" flex gap-6 justify-start items-start h-screen bg-[#ebeef2] px-6 pt-6">
            {/* menu */}
            <MenuBar />

            <div className="w-full ">
                <Header />

                <div className="grid grid-cols-10 gap-6 w-full mt-4 h-[85vh]">
                    <div className="col-span-2 bg-white rounded-xl pb-4">
                        <SidebarCategory />
                    </div>
                    <div className="col-span-6 h-full overflow-y-scroll custom-scrollbar-container">
                        {children}
                    </div>

                    {/* settings */}
                    <div className="col-span-2">
                        <div className="hidden 2xl:block lg:col-span-2 bg-white rounded-3xl px-4 h-[85vh]">
                            <Settings />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MainLayout;