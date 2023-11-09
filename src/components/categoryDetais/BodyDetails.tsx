import { IDua } from '@/types';
import Image from 'next/image';
import React from 'react';

const BodyDetails: React.FC<{ data: IDua }> = ({ data }) => {
    const { cat_id, dua_id, dua_name_en, translation_en, dua_arabic, refference_en, transliteration_bn, } = data;
    const iconsLink = [{ id: 1, url: "/images/copy.png" }, { id: 2, url: "/images/bookmark.png" },
    { id: 3, url: "/images/memorize.png" },
    { id: 4, url: "/images/share.png" },
    { id: 5, url: "/images/report.png" }
    ]
    return (
        <>
            <div className="section bg-white rounded-[10px] p-4 ">
                <p>
                    <span className="text-primary">Section: </span>
                    {dua_name_en}
                </p>
            </div>
            <div className="body bg-white rounded-[10px] p-4 ">
                <div className="flex flex-row justify-start items-center ">
                    <div className="w-[34px] h-[34px]">
                        <Image width={100} height={100} src={"/images/allah.png"} alt="Allah image" />
                    </div>
                    <h1 className="text-primary ms-3 ">
                        {dua_name_en}
                    </h1>
                </div>
                <div className="my-4 text-black">
                    {translation_en || dua_arabic || transliteration_bn}
                </div>
                <div className="reference text-black">
                    <span className="text-primary">Reference:</span> <br />
                    {refference_en}
                </div>

                <div className="flex items-center flex-row justify-end py-3 gap-x-8 xs:gap-x-6">
                    {
                        iconsLink.map(item => <div key={item.id} className="h-[24px] w-[24px]">
                            <Image width={50} height={50} src={item.url} alt={"share"} />

                        </div>)
                    }
                </div>
            </div>
        </>
    );
};

export default BodyDetails;