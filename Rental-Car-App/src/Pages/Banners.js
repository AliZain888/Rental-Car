import React from "react";

const Banners = () => {
  return (
    <>
    <div className="px-6 mt-8  mx-1  flex justify-center items-center lg:hidden">
    <img src="https://rare-gallery.com/uploads/posts/111319-vlf-destino-v8-naias-2016-luxury-car-white.jpeg" alt="mobilebanner" className="w-full rounded-lg" />
      <div className="absolute top-4 left-8 right-0 bottom-0 flex items-start justify-start">
        <div className="text-white text-center">
          <h2 className="text-sm font-semibold w-60   mt-60">The Best Platform For Car Rental</h2>
          <p className="text-xs pt-1 w-56">Ease of doind a car rental safely and reliably. Offcourse at a low price</p>
          <button className="bg-blue-500 flex items-start justify-center mx-7 hover:bg-blue-700 w-24  text-white text-xs py-2 px-1 mt-4 rounded">
            Rental Car
          </button>
        </div>
      </div>
    </div>

    <div className="mt-8 mx-1 lg:mx-5 lg:px-12 lg:flex lg:justify-between lg:items-center ">

      

    <div className="hidden relative max-w-xl rounded overflow-hidden shadow-lg lg:flex lg:justify-between lg:items-center">
      <img src="https://rare-gallery.com/uploads/posts/111319-vlf-destino-v8-naias-2016-luxury-car-white.jpeg" alt="banner1" className="w-full rounded-lg" />
      <div className="absolute top-6 left-2 right-0 bottom-0 flex items-start justify-start">
        <div className="text-white text-center">
          <h2 className="text-2xl font-semibold w-56">The Best Platform For Car Rental</h2>
          <p className="text-sm pt-3 w-60">Ease of doind a car rental safely and reliably. Offcourse at a low price</p>
          <button className="bg-blue-500 flex items-start justify-start mx-4 hover:bg-blue-700 text-white font-bold py-2 px-5 mt-4 rounded">
            Rental Car
          </button>
        </div>
      </div>
    </div>
    
    <div className=" hidden relative max-w-xl rounded overflow-hidden shadow-lg lg:flex lg:justify-between lg:items-center">
      <img src="https://rare-gallery.com/uploads/posts/111319-vlf-destino-v8-naias-2016-luxury-car-white.jpeg" alt="banner2" className="w-full rounded-lg" />
      <div className="absolute top-6 left-2 right-0 bottom-0 flex items-start justify-start">
        <div className="text-white text-center">
          <h2 className="text-2xl font-semibold w-56">Easy way to rent a car ata a low price</h2>
          <p className="text-sm pt-3 w-60">Providing cheap car rental services and safe and comfortable facilities</p>
          <button className="bg-blue-500 flex items-start justify-start mx-4 hover:bg-blue-700 text-white font-bold py-2 px-5 mt-4 rounded">
            Rental Car
          </button>
        </div>
      </div>
    </div>

     </div>

    </>
  );
};

export default Banners;
