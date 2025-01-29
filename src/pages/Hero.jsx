import { IoChevronDown } from "react-icons/io5";

const Hero = () => {
  return (
    <section className="bg-[#ffff] w-full h-screen relative">

        <div className="w-full h-[30%] relative">
            <img 
            src="src/assets/background-image.png" 
            alt="background image" 
            className="w-[100%] h-full object-cover object-center"
            />
            <div className="w-full h-[80px] absolute z-1 top-0 left-0 flex justify-center gap-4 items-center  ">
                <h1 className="text-white font-bold text-2xl my-2">Checkout</h1>
                <p 
                  className="bg-[#1D1D1F] px-3 py-1 rounded-full text-white text-sm font-bold my-2"
                >3 ITEMS</p>
            </div>
        </div>

        <section className="w-[90%] flex flex-col md:flex-row absolute top-[10%] left-[5%] rounded-xl
        overflow-hidden mb-6">
          <div className="w-full md:w-1/2 bg-[#E5E7EB] ">
            
            <div className="w-full m-5 flex">
              <div className="w-28 rounded-xl h-32 bg-[#F3F4F6] flex justify-center items-center 
              border border-[#D2D5DA]">
                <img 
                  src="src/assets/Gold.png" 
                  alt="phone" 
                />
              </div>

              <div className="w-full ml-2 mr-10">
                <div className="flex justify-between font-bold text-xl">
                  <h1 className="">iPhone 12 Pro</h1>
                  <p className="">$999.00</p>
                </div>
                <div>
                  <p>Golden</p>
                </div>
                <div className="flex justify-between mt-8">
                  <p>x1</p>
                  <p className=" text-xl">X</p>
                </div>
              </div>
            </div>
            
            <div className="w-full m-5 flex">
              <div className="w-28 rounded-xl h-32 bg-[#F3F4F6] flex justify-center items-center border
              border-[#D2D5DA]">
                <img 
                  src="src/assets/Apple-watch.png" 
                  alt="watch" 
                />
              </div>

              <div className="w-full ml-2 mr-10">
                <div className="flex justify-between font-bold text-xl">
                  <h1 className="">Apple Watch </h1>
                  <p className="">$399.00</p>
                </div>
                <div>
                  <p>Blue</p>
                </div>
                <div className="flex justify-between mt-8">
                  <p>x1</p>
                  <p className=" text-xl">X</p>
                </div>
              </div>
            </div>

            <div className="w-full m-5 flex">
              <div className="w-28 rounded-xl h-32 bg-[#F3F4F6] flex justify-center items-center border
              border-[#D2D5DA]
              ">
                <img 
                  src="src/assets/iMac.png" 
                  alt="phone" 
                />
              </div>

              <div className="w-full ml-2 mr-10">
                <div className="flex justify-between font-bold text-xl">
                  <h1 className="">iMac</h1>
                  <p className="">$1199.00</p>
                </div>
                <div>
                  <p>Green</p>
                </div>
                <div className="flex justify-between mt-8">
                  <p>x1</p>
                  <p className=" text-xl">X</p>
                </div>
              </div>
            </div>

            <div 
              className="w-[96%] mx-auto border-b border-[#border
              border-gray-300 shadow-md my-2"
            />

            <div className="w-full m-5">
              <div className="w-full flex gap-2">
                <input 
                  type="text"
                  placeholder="Enter coupon code" 
                  className="bg-[#F3F4F6] border border-[#D2D5DA] pl-6 py-4 w-3/4 rounded-md"  
                />
                <button className="px-3 py-2 bg-[#1D1D1F] rounded-md text-white font-bold w-1/4 mr-8">
                  Apply Coupon
                </button>
              </div>

              <div className="mt-5">
                <div className="flex justify-between mr-8 ml-1 font-bold text-sm leading-normal">
                  <p>Sub total</p>
                  <p>$2597.00</p>
                </div>
                <div className="flex justify-between mr-8 ml-1 font-bold text-sm leading-normal">
                  <p>Tax</p>
                  <p>$623.28</p>
                </div>
                <div className="flex justify-between mr-8 ml-1 font-bold text-sm leading-normal">
                  <p>Total</p>
                  <p>$3220.28</p>
                </div>
              </div>
            </div>

          </div>
          <div className="w-full md:w-1/2 bg-[#FFFFFF] mb-8">
            <div className="w-full m-5">
              <h1 className="font-bold text-[#394150]">Contact Information</h1>
              <div className="mt-16">
                <label className="text-[#394150] font-bold ">First & Last name</label>
                <div className="mt-2 mb-8">
                  <input 
                    type="text" 
                    placeholder="Enter first & last name"
                    className="bg-[#E5E7EB] border border-[#D2D5DA] w-[90%] pl-6 py-4 rounded-md"
                  />
                </div>

                <label className="text-[#394150] font-bold">Email Address</label>
                <div className="mt-2 mb-8">
                  <input 
                    type="text" 
                    placeholder="Enter email address"
                    className="bg-[#E5E7EB] border border-[#D2D5DA] w-[90%] pl-6 py-4 rounded-md"
                  />
                </div>
                
                <div className="flex w-full gap-10">
                  <div>
                    <label className="text-[#394150] font-bold">Country</label>
                    <div className="flex flex-row items-center bg-[#E5E7EB] border border-[#D2D5DA]
                    w-full justify-between pl-6 py-4 rounded-md mt-2">
                      <input 
                        type="text" 
                        placeholder="Finland"
                        className=""
                      />
                      <IoChevronDown className="mr-4"/>
                    </div>
                  </div>
                  
                  <div className="">
                    <label className="">Postal Code</label>
                    <div className=" bg-[#E5E7EB] border border-[#D2D5DA]
                    w-full pl-6 py-4 rounded-md mt-2 ">
                      <input 
                        type="text" 
                        placeholder="00270"
                        className=""
                      />
                    </div>
                  </div>
                </div>

                <button className="bg-[#1D1D1F] text-white font-bold  w-[90%] py-4 rounded-md mt-10">
                  Continue
                </button>
              </div>
            </div>
          </div>
        </section>
        
   
    </section>
  )
}

export default Hero