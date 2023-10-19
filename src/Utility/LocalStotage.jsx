
const getStoredJobApplication = () =>{
    const storedJobApplication = localStorage.getItem('job-applications');
// console.log(storedJobApplication)
    if(storedJobApplication){
        return JSON.parse(storedJobApplication)
    }
    else{return []}
     
}

const saveJobApplication = id =>{
    const storedJobApplications = getStoredJobApplication();
    const exists = storedJobApplications.find(jobId => jobId == id)
    if(!exists){
        storedJobApplications.push(id);
        localStorage.setItem('job-applications',JSON.stringify(storedJobApplications))
    }
   
}
export {getStoredJobApplication, saveJobApplication}