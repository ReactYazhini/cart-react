import slider1 from "../img/slider/img1.webp";


const Banner = () => {
    return (

                <div className="relative  bg-gray-300 dark:bg-gray-600 flex items-center justify-center overflow-hidden ">
                    <div className=" h-[500px] w-[500px] -top-1/2 -z-9  bg-secondary/40  rotate-45 absolute  rounded-3xl"></div>
                    
                    <div className="container">
                        <div>
                            <div className="grid grid-cols-1 sm:grid-cols-2  py-10">
                                <div  className="flex flex-col justify-center z-10 relative order-2 sm:order-1">
                                    <h1 className="text-3xl sm:text-6xl font-bold dark:text-white text-center sm:text-left">What's on your mind?</h1>
                                    <p className="text-sm py-2 dark:text-white/80 text-center sm:text-left">Restaurants with online food delivery in Coimbatore</p>
                                    <div className="flex justify-center sm:justify-start">
                                        <button className="bg-gradient-to-r from-primary to-secondary transition-all text-white rounded-full  px-3 py-1 my-3">Order Now</button>
                                    </div>
                                    
                                </div>
                                <div className="order-1 sm:order-2">
                                    <div className="justify-center z-10 relative">
                                    <img src={slider1} className="w-[300px] h-[400px] mx-auto object-contain"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>



// {/* <div className="p-16">
// <article className="gap-4">
//   <img className="float-left rounded-2xl bg-gray-800" src={slider1}/>
//   <img className="float-left rounded-xl bg-blue-500 p-0.5 shadow" src={slider2}/>
//   <p className="clear-right">Maybe we can live without libraries...Maybe we can live without libraries...Maybe we can live without libraries...Maybe we can live without libraries...Maybe we can live without libraries...Maybe we can live without libraries...Maybe we can live without libraries...Maybe we can live without libraries...Maybe we can live without libraries...Maybe we can live without libraries...Maybe we can live without libraries...Maybe we can live without libraries...Maybe we can live without libraries...Maybe we can live without libraries...Maybe we can live without libraries...Maybe we can live without libraries...Maybe we can live without libraries...Maybe we can live without libraries...Maybe we can live without libraries...Maybe we can live without libraries...</p>
// </article>
// </div>  */}
)
        }

export default Banner;