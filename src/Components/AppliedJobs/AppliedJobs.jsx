import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/LocalStotage";
import AppliedJob from "./AppliedJob";


const AppliedJobs = () => {
    const jobs = useLoaderData()
    const [appliedJobs, setAppliedJobs] = useState([])
    const [displayJobs, setDisplayJobs] = useState([])
    console.log(appliedJobs)
    const jobFilter = (filter) => {
        if (filter === 'all') {
            setDisplayJobs(appliedJobs)
        }
        else if (filter === 'Remote') {
            const remote = appliedJobs.filter(job => job.remote_or_onsite === 'Remote')
            setDisplayJobs(remote)
        }
        else if (filter === 'Onsite') {
            const onsite = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite')
            setDisplayJobs(onsite)
        }

    }

    useEffect(() => {
        const storedJobsId = getStoredJobApplication();

        if (jobs.length) {
            const jobsApplied = jobs.filter(job => storedJobsId.includes(job.id))
            // console.log(jobsApplied, storedJobsId)


            // const jobsApplied =[];
            // for(const id of storedJobsId){
            //     const job = jobs.find(job => job.id === id);
            //     if(job){
            //         jobsApplied.push(job)
            //     }

            //         }
            setAppliedJobs(jobsApplied)
            setDisplayJobs(jobsApplied)
        }
        // console.log(appliedJobs)
    }, [])




    return (
        <div>
            <div className="bg-[url('../../../public/assets/images/bg1.png')] bg-no-repeat bg-left-bottom h-80  text-center  bg-sky-50 ">
                <div className="bg-[url('../../../public/assets/images/bg2.png')] bg-no-repeat bg-right-top h-64 items-center flex justify-center  ">
                    <h1 className="text-3xl font-bold text-center">Applied Jobs : {appliedJobs.length}</h1>
                </div>


            </div>

            <div className="max-w-7xl mx-auto">
                <div className="dropdown  my-28 flex justify-end items-start">
                    <label tabIndex={0} className="btn m-1 bg-gray-200 text-lg font-medium">Filter</label>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 my-14 shadow bg-gray-100 text-lg font-medium rounded-box w-52">
                        <li onClick={() => jobFilter('all')}><a>All</a></li>
                        <li onClick={() => jobFilter('Remote')}><a>Remote</a></li>
                        <li onClick={() => jobFilter('Onsite')}><a>Onsite</a></li>
                    </ul>
                </div >

                {
                    displayJobs.map(appliedJob => <AppliedJob key={appliedJob.id} appliedJob={appliedJob}></AppliedJob>)
                }

            </div>
        </div>
    );
};

export default AppliedJobs;