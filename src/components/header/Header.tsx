import Image from 'next/image';
import React from 'react';

const Header = () => {
    return (
        <header className="grid grid-cols-12 w-full justify-between items-center">
            <h1 className="font-[600] text-[24px] text-black col-span-2">Duas Page</h1>

            <div className="col-span-8 flex justify-end">
                <form className="relative  w-max ">
                    <input placeholder="Search by Dua Name" type="text" className="h-6 py-6 px-4 w-[23.1875rem]  border border-[transparent]  focus:outline-none focus:border-primary rounded-md" />
                    <button className="absolute top-1/2 transform -translate-y-1/2 right-0 me-1">
                        <svg width="54" height="44" viewBox="0 0 54 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="54" height="44" rx="6" fill="#F3F4F6" />
                            <path d="M36 31L30 25L36 31ZM32 20C32 20.9193 31.8189 21.8295 31.4672 22.6788C31.1154 23.5281 30.5998 24.2997 29.9497 24.9497C29.2997 25.5998 28.5281 26.1154 27.6788 26.4672C26.8295 26.8189 25.9193 27 25 27C24.0807 27 23.1705 26.8189 22.3212 26.4672C21.4719 26.1154 20.7003 25.5998 20.0503 24.9497C19.4002 24.2997 18.8846 23.5281 18.5328 22.6788C18.1811 21.8295 18 20.9193 18 20C18 18.1435 18.7375 16.363 20.0503 15.0503C21.363 13.7375 23.1435 13 25 13C26.8565 13 28.637 13.7375 29.9497 15.0503C31.2625 16.363 32 18.1435 32 20Z" stroke="#868686" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                </form>
            </div>
            <div className="col-span-2 flex justify-end me-4">
                <div className="w-[60px] h-[60px] flex gap-2 items-center ">
                    <Image width={100} height={100} src="/images/user.png" alt="user" />

                    <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.79241 5.97063C5.3921 6.49064 4.6079 6.49064 4.20759 5.97063L1.04322 1.85999C0.537025 1.20243 1.00579 0.25 1.83563 0.25L8.16437 0.250001C8.99421 0.250001 9.46298 1.20243 8.95678 1.86L5.79241 5.97063Z" fill="#868686" />
                    </svg>

                </div></div>
        </header>
    );
};

export default Header;