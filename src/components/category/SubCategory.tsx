import { baseUrl } from '@/config';
import { ISubcategory } from '@/types';
import React from 'react';

export default async function SubCategory(props: any) {
    let subCategory: ISubcategory[] = [];

    const response = await fetch(`${baseUrl}/subcategory?cat_id=${props.cat_id}`);
    const result = await response.json();
    subCategory = result.data;

    return (
        <>
            {
                subCategory?.map((subCategory: ISubcategory) =>
                    <div key={subCategory.id} className='flex border-dotted flex-col justify-start items-start gap-y-2 ml-3 '>
                        <div className='flex flex-row my-2'>
                            <div className='bg-primary -translate-x-[17px] mt-1.5 w-[8px] rounded-full h-[8px]'></div>
                            <div className='flex flex-col justify-start items-start'>
                                <p className='text-primary cursor-pointer font-semibold text-left text-sm  xs:text-2xs style-Kalpurush'>{subCategory.subcat_name_en}</p>
                                {/* <div className='mt-2 cursor-pointer'>
                     <div className=' text-2xs my-3 text-left gap-2  flex items-center  w-full'>

                         <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                             <path d="M1.51096 1V4.16054C1.51096 9.64206 5.95462 14.0857 11.4361 14.0857H14.5967" stroke="#1FA45B" stroke-width="0.55448" stroke-linecap="round" stroke-dasharray="1.66 1.66" />
                             <line x1="0.55448" y1="-0.55448" x2="7.13022" y2="-0.55448" transform="matrix(-0.707107 0.707107 0.707107 0.707107 15.4844 14.0859)" stroke="#1FA45B" stroke-width="1.10896" stroke-linecap="round" />
                             <line x1="0.55448" y1="-0.55448" x2="7.13022" y2="-0.55448" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 14.5967 14.75)" stroke="#1FA45B" stroke-width="1.10896" stroke-linecap="round" />
                         </svg>

                         <p className='text-[12px] mt-[5.2px]'>sub children dsfd d dsfd df</p>
                     </div>

                 </div> */}
                            </div>
                        </div>

                    </div>)
            }
        </>
    );
};

