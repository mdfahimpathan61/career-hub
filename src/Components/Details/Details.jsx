
import {  useLoaderData, useParams } from "react-router-dom";


  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { saveJobApplication } from '../../Utility/LocalStotage';


const Details = () => {
    const jobsDetails = useLoaderData()
    console.log(jobsDetails[0].banner1)
    const { jobId } = useParams();
    const idInt =parseInt(jobId)
    const job = jobsDetails.find((jobDetails) => jobDetails.id == idInt)
   

    const { job_description, job_responsibility, job_title, educational_requirements, experiences,contact_information,salary, dollor_icon, call_icon, email_icon, address_icon } = job
    const notify = () =>{ 
        saveJobApplication(idInt);
        toast("You successfully applied the job");}
    return (
        <div >
            <div className="bg-[url('https://i.ibb.co/fCfW2mZ/bg1.png')] bg-no-repeat bg-left-bottom h-80  text-center  bg-sky-50" >
                <div className="bg-[url('https://i.ibb.co/qFrrvdF/bg2.png')] bg-no-repeat bg-right-top h-64 items-center flex justify-center  ">
                    <h1 className="text-5xl font-bold  "> Job Details</h1>
                </div>

            </div>
            <div className="grid mx-3 grid-cols-3 lg:grid-cols-4 max-w-7xl lg:mx-auto my-16 gap-4  ">
                <div className="col-span-3">
                    <h1 className=" mt-6 text-lg font-bold">Job Description :  <span className="text-base font-medium text-gray-500"> {job_description}</span></h1>
                    <h1 className="mt-6 text-lg font-bold">Job Reponsibility :  <span className="text-base font-medium text-gray-500"> {job_responsibility}</span></h1>
                    <h1 className="mt-6 text-lg font-bold">Education Requerment :  <span className="text-base font-medium text-gray-500"> {educational_requirements}</span></h1>
                    <h1 className="mt-6 text-lg font-bold">Experience :  <span className="text-base font-medium text-gray-500"> {experiences}</span></h1>

                </div>
                <div className="col-span-2 md:col-span-1 ">
                <div className="p-3 bg-sky-100 rounded-md">
                    <h3 className="text-xl font-bold ">Job Details</h3>
                    <hr />
                    <div className="flex items-start gap-2">
                        <img src={dollor_icon} alt="" />
                        <p className="text-base text-gray-500"> <span className="text-base font-medium text-black">Salary :</span> {salary} </p>
                    </div>
                    <div className="flex items-start gap-2 mt-2">
                        <img src="../../../public/assets/icons/calendar.png" alt="" />
                        <p className="text-base text-gray-500"> <span className="text-base font-medium text-black">Job Title :</span> {job_title} </p>
                    </div>
                    <h3 className="text-xl font-bold my-2">Contact Information</h3>
                    <hr />
                    <div className="flex items-start gap-2">
                        <img src={call_icon} alt="" />
                        <p className="text-base text-gray-500"> <span className="text-base font-medium text-black">Phone :</span> {contact_information.phone} </p>
                    </div>
                    <div className="flex items-start gap-2 my-2">
                        <img src={email_icon} alt="" />
                        <p className="text-base text-gray-500"> <span className="text-base font-medium text-black">Email :</span> {contact_information.email} </p>
                    </div>
                    <div className="flex items-start gap-2">
                        <img src={address_icon} alt="" />
                        <p className="text-base text-gray-500"> <span className="text-base font-medium text-black">Address :</span> {contact_information.address} </p>
                    </div>
                    
                    
                    
                </div>
               
 <button onClick={notify} className="text-white text-lg font-bold bg-gradient-to-r from-[#7E90FE] to-[#9873FF] btn w-full mt-2">Apply Now</button>

                </div>
 
            </div>
 <ToastContainer />
        </div>
    );
};

export default Details;