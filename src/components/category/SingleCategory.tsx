"use client"
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
import SubCategory from './SubCategory';
import { ICategory } from '@/types';
type SingleCategoryProps = {
    data: {
        id: number;
    }
}
const SingleCategory: React.FC<{ data: ICategory }> = ({ data }) => {
    const { cat_id, cat_name_en, no_of_subcat, no_of_dua } = data;
    const [currentId, setCurrentId] = useState(1)


    const router = useRouter();

    const handleCategory = (value: string, id: number) => {
        setCurrentId(id);
        router.push(`?category=${value}`)
    }


    return (
        <div className='my-2'>
            {/* parent */}
            <button type='button' onClick={() => handleCategory("bangla", data?.id)} className={`hover:bg-[#E8F0F5] ${data.id === currentId ? "bg-[#e8f0f5]" : "bg-transparent"}  flex gap-4 p-[10px] items-center rounded-[10px] w-full`}>
                <div className="h-12 w-14 bg-[#CFE0E5] rounded-[10px] p-[10px]">
                    <Image width={100} height={100} src={"/images/categoryImage.png"} alt="category image" />
                </div>
                <div className="flex gap-4 justify-between w-full">
                    <div className="flex flex-col gap-y-22">
                        <h1 className="text-primary text-start">{cat_name_en}</h1>
                        <p className="text-[14px] text-blackLight text-start">SubCategory {no_of_subcat}</p>
                    </div>
                    <div className="flex flex-col gap-y-22 ">
                        <h1 className="text-black">{no_of_dua}</h1>
                        <p className="text-[14px] text-blackLight">Duas</p>
                    </div>
                </div>
            </button>

            {/* children */}
            <div className={` ${data.id === currentId ? "block" : "hidden"} ml-12 border-l-[2px] border-dotted my-2 border-primary`}>
                {
                    <SubCategory cat_id={cat_id} />
                }
            </div>
        </div>
    );
};

export default SingleCategory;