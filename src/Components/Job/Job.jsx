import { Link } from "react-router-dom";


const Job = ({ job }) => {
    // console.log(job)
    const {id, company_name, logo, job_title, job_type, remote_or_onsite, contact_information
        , salary,dollor_icon, address_icon } = job;

    return (
        <div>
            <div className="my-5 ">
                <img className="w-28 h-10" src={logo} alt="" />
                <h3 className="text-[#474747], text-3xl, font-bold">{job_title}</h3>
                <p className="text-[#757575], text-xl, font-semibold">{company_name} </p>
                <div className="my-2">
                    <span className="text-[#9873FF], text-base, font-semibold text-[#7948ff] border-[#a382ff] border mr-7 p-1 rounded-sm">{remote_or_onsite} </span>
                    <span className="text-[#9873FF], text-base, font-semibold text-[#7948ff] border-[#a382ff] border p-1 rounded-sm">{job_type} </span>
                </div>
               <div className="flex  my-3">
               <div className="flex mr-6 items-start">
                    <img src={address_icon} alt="" />
                    <p> {contact_information.address}</p>
                    
                </div>
                <div className="flex items-start">
                    <img src={dollor_icon} alt="" />
                    <p>{salary} </p>

                </div>
               </div>
                <Link to={`/details/${id}`} ><button className="btn hover:bg-[#566cff] bg-[#798bff] text-white">View Details</button></Link>
            </div>
            


        </div>


    );
};

export default Job;