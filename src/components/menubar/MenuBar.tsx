import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const MenuBar = () => {
    const menuItems = [
        { url: "/images/home.png", id: 1, title: "Home" },
        { url: "/images/menu.png", id: 2, title: "All Duas" },
        { url: "/images/memorize.png", id: 3, title: "Memorize" },
        { url: "/images/bookmark.png", id: 4, title: "Bookmark" },
        { url: "/images/ruqyah.png", id: 5, title: "ruqyah" },
        { url: "/images/dua-info.png", id: 6, title: "dua" },
        { url: "/images/book.png", id: 7, title: "book" },
    ];
    return (
        <div className="w-[100px] h-[calc(100vh-70px)] shadow-md rounded-3xl p-4 bg-white flex justify-between items-center flex-col">
            <Link href={"#"} className="">
                <Image width={100} height={100} src="/images/dua.png" alt="dua image" />
            </Link>
            <div className=" flex flex-col gap-y-2 items-center">
                {
                    menuItems.map(item =>
                        <div key={item.id} className="p-2 flex flex-row justify-center items-center">
                            <div className=" bg-iconBg dark:bg-dark-bg-dark flex p-2.5 rounded-full items-center h-10 w-10 justify-center cursor-pointer">

                                <Image width={100} height={100} src={item.url} alt={item.title} />
                            </div>

                        </div>)
                }
            </div>
            <Link href={"#"} className="">
                <Image width={100} height={100} src="/images/support.png" alt="dua image" />
            </Link>
        </div>
    );
};

export default MenuBar;