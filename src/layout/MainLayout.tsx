"use client"
import Header from "@/components/header/Header";
import MenuBar from "@/components/menubar/MenuBar";
import Settings from "@/components/settings/Settings";
import React, { ReactNode } from "react";
type MainProps = {
    children: ReactNode;
};
const MainLayout: React.FC<MainProps> = ({ children }) => {

    return (
        <div className=" flex gap-6 justify-start items-start">
            {/* menu */}
            <MenuBar />

            <div className="w-full ">
                {/* header */}
                <Header />

                <div className="grid grid-cols-12 gap-6 w-full mt-4">

                    <div className="col-span-12 2xl:col-span-10 ">
                        {children}
                    </div>

                    {/* settings */}
                    <div className="hidden 2xl:block lg:col-span-2 bg-white rounded-3xl px-4 h-[85vh]">
                        <Settings />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MainLayout;