export default function Home() {
  return (
    <main>
      <div className="w-300 h-100 bg-amber-800 overflow-hidden border-2 border-gray-500 rounded-lg my-20 mx-auto">
        <img src="images/ngang.jpg"
              className="w-full h-full object-cover"></img>
      </div>

      <div className="h-10 w-20 mt-20 mx-auto flex justify-center">meomeo</div>
      <div className="h-10 w-20 my-0 mx-auto flex justify-center">meomeo</div>
      <div className="h-10 w-20 my-0 mx-auto flex justify-center">meomeo</div>

      <div className="h-78 w-307.5 bg-blue-400 mx-auto grid grid-cols-4 gap-2 mt-20 py-0">
        <div className="w-67.5 h-60.5 bg-amber-300 my-10 mx-auto"></div>
        <div className="w-67.5 h-60.5 bg-amber-300 my-10 mx-auto"></div>
        <div className="w-67.5 h-60.5 bg-amber-300 my-10 mx-auto"></div>
        <div className="w-67.5 h-60.5 bg-amber-300 my-10 mx-auto"></div>
      </div>

      <div className=" relative w-292 h-110.75 mx-auto mt-20">
        <div className="absolute top-0 right-0 w-190 h-108.5 border-2 border-blue-500">
          <img src="images/ngang.jpg" className="object-cover"></img>
        </div>
        <div className="absolute left-0 top-15.75 w-120 h-79.25 border-2 border-blue-500">
          <img src="images/ngang.jpg" className="object-cover"></img>
        </div>
      </div>

      <div className="w-300 h-73.25 border-2 border-gray-500 mx-auto text-center"> slider x 5 pic </div>

      <div className="w-300 h-382.75  mx-auto mt-50">
        <div className="w-292 h-11.25 mt-14 border-2 border-black-300 mx-auto"></div>
        <div className="w-225 h-7.5 mt-2.5 mx-auto border-2 border-black-300"></div>
        <div className="w-292 h-21.5 mt-11.5 mx-auto border-2 border-black-300"></div>
        <div className="w-292 h-125.5 mt-2.5 mx-auto ">
          <div className="flex justify-between px-0">
            <div className="w-92 h-125.5 border-2 border-black-300 rounded-lg"></div>
            <div className="w-92 h-125.5 border-2 border-black-300 rounded-lg"></div>
            <div className="w-92 h-125.5 border-2 border-black-300 rounded-lg"></div>
          </div>
        </div>
        <div className="w-292 h-21.5 mt-11.5 mb-6.5 mx-auto border-2 border-black-300"></div>
        <div className="flex justify-between px-5">
          <div className="w-142 h-125.5 border-2 border-black-300 rounded-lg"></div>
          <div className="w-142 h-125.5 border-2 border-black-300 rounded-lg"></div>
        </div>
      </div>

      <div className="w-300 h-40.25 border-2 border-red-500 mx-auto mt-20 mb-35"></div>

      <div className="w-300 h-90.25  mx-auto mb-35">
        <div className="flex justify-between px-5">
          <div className="w-69 h-90.25 border-2 border-black-300 rounded-lg"></div>
          <div className="w-69 h-90.25 border-2 border-black-300 rounded-lg"></div>
          <div className="w-69 h-90.25 border-2 border-black-300 rounded-lg"></div>
          <div className="w-69 h-90.25 border-2 border-black-300 rounded-lg"></div>
        </div>
      </div>

        <div className="w-300 h-14.5 mb-9 mx-auto">
          <div className="w-300 h-11.25 border-2 border-black-300"></div>
          <div className="w-300 h-3.25 border-2 border-black-300 "></div>
        </div>

      <div className="w-300 h-115 mx-auto">
        <div className="flex justify-between">
          <div className="w-177 h-115 ">
            <div className="w-177 h-55 border-2 border-black-300 rounded-lg mb-4"></div>
            <div className="flex justify-between">
              <div className="w-86 h-55 border-2 border-black-300 rounded-lg"></div>
              <div className="w-86 h-55 border-2 border-black-300 rounded-lg"></div>
            </div>
          </div>
          <div className="w-117 h-115 border-2 border-black-300 rounded-lg"></div>
        </div>
      </div>

      <div className="w-300 h-215.25 mt-26.25 flex justify-between mx-auto mb-20" >
        <div className="w-142 h-215.25 border-2 border-black-300 rounded-lg"></div>
        <div className="w-142 h-215.25 bg-amber-300 border-2 border-black-300 rounded-lg"></div>
      </div>
    </main>
  );
}