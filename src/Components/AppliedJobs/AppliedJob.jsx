import { Link } from "react-router-dom";

const AppliedJob = ({ appliedJob }) => {
    const { id, company_name, logo, job_title, job_type, remote_or_onsite, contact_information
        , salary } = appliedJob
    return (
        <div >
            

            <div className="border border-gray-300 rounded-md  p-4 my-10">
                <div className="flex justify-between items-center gap-3">
                    <div className="p-3 items-center gap-3 flex mr-10">
                        <div className="h-60 w-60 bg-gray-100 justify-center items-center flex">
                            <img className=" p-3 " src={logo} alt="" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-medium"> {job_title}</h3>
                            <h4 className="text-xl font-medium text-gray-600 my-2">{company_name} </h4>
                            <div className="flex gap-2">
                                <p className=" rounded-md p-2 font-medium text-purple-500 border border-purple-500">{job_type} </p>
                                <p className="rounded-md p-2 font-medium text-purple-500 border border-purple-500"> {remote_or_onsite}</p>
                            </div>
                            <div className="flex gap-2 items-start my-2">
                                <img src="../../../public/assets/icons/Location.png" alt="" />
                                <p className="text-gray-500 ">{contact_information.address} </p>
                            </div>
                            <div className="flex gap-2 items-start my-2">
                                <img src="../../../public/assets/icons/money.png" alt="" />
                                <p className="text-gray-500 ">{salary} </p>
                            </div>

                        </div>
                    </div>
                    <Link to={`/details/${id}`} className="btn bg-[#7E90FE] text-white hover:bg-[#546bff]"> <button> View Details</button></Link>

                </div>

            </div>


        </div>
    );
};

export default AppliedJob;