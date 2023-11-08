import SingleCategory from "@/components/category/SingleCategory";
import MainLayout from "@/layout/MainLayout";
import Image from "next/image";

export default function Home() {
  const data = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]
  const iconsLink = [{ id: 1, url: "/images/copy.png" }, { id: 2, url: "/images/bookmark.png" },
  { id: 3, url: "/images/memorize.png" },
  { id: 4, url: "/images/share.png" },
  { id: 5, url: "/images/report.png" }
  ]
  return (
    <main className="bg-[#ebeef2] mx-auto max-w-[1900px] min-h-screen pt-8 px-8">
      <MainLayout>
        {/* start category */}
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-3 bg-white rounded-xl overflow-hidden h-[85vh] ">
            <h1 className="text-center bg-primary text-white py-4 text-[17px] mb-4 ">Categories</h1>
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
            <div className="h-full flex flex-col gap-6 mx-2 mt-4 overflow-y-scroll">
              {
                data.map(cat => <SingleCategory key={cat.id} data={cat} />)
              }

            </div>
          </div>


          {/* main section */}
          <div className="col-span-9 ">
            <div className="flex flex-col gap-4">

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

            </div>
          </div>
        </div>
      </MainLayout>
    </main>
  )
}
