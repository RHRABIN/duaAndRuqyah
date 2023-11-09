import React from 'react';
import SingleCategory from './SingleCategory';
import { baseUrl } from '@/config';
import { ICategory } from '@/types';

export default async function SidebarCategory() {
    const response = await fetch(`${baseUrl}/category`);
    const data = await response.json();

    return (
        <div className='h-[85vh]'>
            <h1 className="text-center bg-primary text-white py-4 text-[17px] mb-4 rounded-t-[7px]">Categories</h1>
            <div className="px-2 flex flex-col items-center ">
                <form className="relative  w-max ">
                    <input placeholder="Search Categories" type="text" className="h-6 py-6 pl-12 w-[300px]  border-[1.5px] border-[#E2E2E2]  focus:outline-none focus:border-primary rounded-[7px]" />
                    <button className="absolute top-1/2 transform -translate-y-1/2 left-0 ms-4">
                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.5 17.5L13 13M15 8C15 8.91925 14.8189 9.82951 14.4672 10.6788C14.1154 11.5281 13.5998 12.2997 12.9497 12.9497C12.2997 13.5998 11.5281 14.1154 10.6788 14.4672C9.82951 14.8189 8.91925 15 8 15C7.08075 15 6.1705 14.8189 5.32122 14.4672C4.47194 14.1154 3.70026 13.5998 3.05025 12.9497C2.40024 12.2997 1.88463 11.5281 1.53284 10.6788C1.18106 9.82951 1 8.91925 1 8C1 6.14348 1.7375 4.36301 3.05025 3.05025C4.36301 1.7375 6.14348 1 8 1C9.85652 1 11.637 1.7375 12.9497 3.05025C14.2625 4.36301 15 6.14348 15 8Z" stroke="#868686" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </button>

                </form>
            </div>
            {/* category section */}
            <div className="mx-2 mt-4 mb-5 h-[80%] overflow-y-scroll custom-scrollbar-container">
                {data ? data.data?.map((cat: ICategory) => (
                    <SingleCategory key={cat.id} data={cat} />
                )) : <p>Loading..</p>}
            </div>

        </div>
    );
};

