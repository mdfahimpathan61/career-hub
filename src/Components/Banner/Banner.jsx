import { useLoaderData } from "react-router-dom";
import JobList from "../JobList/JobList";
import FeatredJob from "../FeatredJob/FeatredJob";


const Banner = () => {
    const categories = useLoaderData()
    
    return (
        <div className="mx-3 lg:max-w-7xl md:mx-3 lg:mx-auto " >
            <div className=" justify-center lg:flex my-3  items-center">
            <div >
                <h1 className="max-w-7xl mx-auto text-7xl" >One step Closer to our <span className="text-[#7E90FE]">Dream Job</span></h1>
                <p className="font-semibold my-6 text-[#757575]">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish</p>
                <button className="btn bg-[#7E90FE] text-white font-semibold hover:bg-[#4c64ff]">Get Started</button>
            </div>
            <div>
                <img src={categories[0].image} alt="" />
            </div>
            </div>

            <div className="pb-20">
            
            <div className="text-center my-10 ">
                <h1 className="text-6xl font-bold">Job Category List </h1>
                <p className="text-gray-600 my-3">Explore thousands of job opportunities with all the information you need. Its your futur</p>

            </div>
           <div className="grid grid-cols-2 lg:grid-cols-4 justify-around gap-4">
           {categories.map(category => <JobList key={category.id} category={category} ></JobList>)}
           </div>
            </div>
            <FeatredJob></FeatredJob>
            
        </div>
    );
};

export default Banner;