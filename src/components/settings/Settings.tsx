import Image from 'next/image';
import React, { useState } from 'react';

const Settings = () => {
    const [selectedItem, setSelectedItem] = useState(4)

    const settingItems = [
        { url: "/images/language.svg", id: 1, title: "Language Settings" },
        { url: "/images/generalSetting.svg", id: 2, title: "General Settings" },
        { url: "/images/menu.png", id: 3, title: "Font Settings" },
        { url: "/images/menu.png", id: 4, title: "Appearance Settings" },
    ];
    return (
        <>
            <h1 className="font-semibold text-black text-[20px] text-center py-4">
                Settings
            </h1>
            <div className="flex flex-col gap-y-2 items-start">
                {
                    settingItems.map(item =>
                        <button onClick={() => setSelectedItem(item.id)} key={item.id} className="w-full border rounded-md ">
                            <div className={`p-2  flex flex-row items-center gap-2 bg-[#F7F8FA] rounded-md border-l-4 ${selectedItem == item.id ? "border-l-primary" : "border-l-transparent"}`}>
                                <div className=" bg-iconBg dark:bg-dark-bg-dark flex p-2.5 rounded-full items-center h-10 w-10 justify-center ">

                                    <Image width={100} height={100} src={item.url} alt={item.title} />
                                </div>
                                <p className={`${selectedItem === item.id ? "text-primary" : "text-blackLight"}`}>{item.title}</p>


                            </div>
                            {(selectedItem === 4 && item.id == 4) && <div className="my-6 flex px-4 justify-between">
                                <p className="text-blackLight">Night mode</p>
                                <div className="checkbox-wrapper-6">
                                    <input className="tgl tgl-light" id="cb1-6" type="checkbox" />
                                    <label className="tgl-btn" htmlFor="cb1-6" />
                                </div>
                            </div>}
                            {(selectedItem === 1 && item.id == 1) && <div className="my-6 flex px-4 gap-4">
                                <button className="bg-primary border-2 border-transparent px-4 py-2 text-white text-[14px] rounded-md w-[6rem]">English</button>
                                <button className="bg-transparent border-2 px-4 py-2 text-[14px] rounded-md w-[6rem]">বাংলা</button>

                            </div>}
                        </button>
                    )
                }
            </div>
        </>
    );
};

export default Settings;