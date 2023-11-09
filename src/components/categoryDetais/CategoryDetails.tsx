import Image from 'next/image';
import React from 'react';
type CategoryDetailsProps = {
    data: {
        id: number;
    }
}
const CategoryDetails = (props: CategoryDetailsProps) => {
    const { data } = props;
    const iconsLink = [{ id: 1, url: "/images/copy.png" }, { id: 2, url: "/images/bookmark.png" },
    { id: 3, url: "/images/memorize.png" },
    { id: 4, url: "/images/share.png" },
    { id: 5, url: "/images/report.png" }
    ]
    return (
        <>
            <div className="section bg-white rounded-[10px] p-4 ">
                <p>
                    <span className="text-primary">Section:</span>
                    The servant is dependent on his lord
                </p>
            </div>
            <div className="body bg-white rounded-[10px] p-4 ">
                <div className="flex flex-row justify-start items-center ">
                    <div className="w-[34px] h-[34px]">
                        <Image width={100} height={100} src={"/images/allah.png"} alt="Allah image" />
                    </div>
                    <h1 className="text-primary ms-3 ">
                        1. The servant is dependent on his Lord #1
                    </h1>
                </div>
                <div className="my-4 text-black">
                    All human beings depend on Allah for their welfare and prevention of evil in various matters of their religion and world. Allah says (interpretation of the meaning): O mankind, you are those in need of Allah, while Allah is the Free of need, the Praiseworthy.
                </div>
                <div className="reference text-black">
                    <span className="text-primary">Reference:</span> <br />
                    Surah Al-Fatir 35:15
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

export default CategoryDetails;