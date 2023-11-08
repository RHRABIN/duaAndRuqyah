"use client"
import Image from 'next/image';
import React, { useState } from 'react';
type SingleCategoryProps = {
    data: {
        id: number;
    }
}
const SingleCategory = (props: SingleCategoryProps) => {
    const { data } = props;
    const [currentId, setCurrentId] = useState(1)
    const handleCategory = (id: number) => {
        setCurrentId(id)
    }
    return (
        <div>
            {/* parent */}
            <button onClick={() => handleCategory(data.id)} className={`hover:bg-[#E8F0F5] ${data.id === currentId ? "bg-[#e8f0f5]" : "bg-transparent"}  flex gap-4 p-[10px] items-center rounded-[10px] w-full`}>
                <div className="h-12 w-14 bg-[#CFE0E5] rounded-[10px] p-[10px]">
                    <Image width={100} height={100} src={"/images/categoryImage.png"} alt="category image" />
                </div>
                <div className="flex gap-4 justify-between w-full">
                    <div className="flex flex-col gap-y-22">
                        <h1 className="text-primary">Category Title</h1>
                        <p className="text-[14px] text-blackLight">SubCategory 11</p>
                    </div>
                    <div className="flex flex-col gap-y-22 ">
                        <h1 className="text-black">15</h1>
                        <p className="text-[14px] text-blackLight">Duas</p>
                    </div>
                </div>
            </button>

            {/* children */}
            <div className={` ${data.id === currentId ? "block" : "hidden"} ml-12 border-l-[2px] border-dotted my-2 border-primary`}>
                <div className='flex border-dotted flex-col justify-start items-start gap-y-2 ml-3 '>
                    <div className='flex flex-row my-2'>
                        <div className='bg-primary -translate-x-[17px] mt-1.5 w-[8px] rounded-full h-[8px]'></div>
                        <div className='flex flex-col justify-start items-start'>
                            <p className='text-primary cursor-pointer font-semibold text-left text-sm  xs:text-2xs style-Kalpurush'>The servan is dependent his</p>
                            <div className='mt-2 cursor-pointer'>
                                <div className=' text-2xs my-3 text-left gap-2  flex items-center  w-full'>

                                    <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.51096 1V4.16054C1.51096 9.64206 5.95462 14.0857 11.4361 14.0857H14.5967" stroke="#1FA45B" stroke-width="0.55448" stroke-linecap="round" stroke-dasharray="1.66 1.66" />
                                        <line x1="0.55448" y1="-0.55448" x2="7.13022" y2="-0.55448" transform="matrix(-0.707107 0.707107 0.707107 0.707107 15.4844 14.0859)" stroke="#1FA45B" stroke-width="1.10896" stroke-linecap="round" />
                                        <line x1="0.55448" y1="-0.55448" x2="7.13022" y2="-0.55448" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 14.5967 14.75)" stroke="#1FA45B" stroke-width="1.10896" stroke-linecap="round" />
                                    </svg>

                                    <p className='text-[12px] mt-[5.2px]'>sub children dsfd d dsfd df</p>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SingleCategory;