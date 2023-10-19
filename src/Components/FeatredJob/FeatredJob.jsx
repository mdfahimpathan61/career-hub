import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeatredJob = () => {
    const [jobs, setJobs] = useState([])
    const [showJob, setShowJob] = useState(4)
    useEffect(() =>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])
    return (
        <div>
            <div className="text-center mt-16">
                <h1  className="text-6xl font-bold">Featured Jobs {jobs.length} </h1>
                <p className="text-gray-600 my-3">Explore thousands of job opportunities with all the information you need. Its your futur</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 my-20 gap-20">
                {
                    jobs.slice(0,showJob).map(job =><Job key={job.id} job={job}></Job>)
                }
               
            </div>
            <div onClick={()=> {setShowJob(jobs.length)}} className={showJob === jobs.length? 'hidden':'text-center'}>
                <button  className="btn px-5 py-3 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white ">See All Jobs</button>
                </div>
            
        </div>
    );
};

export default FeatredJob;