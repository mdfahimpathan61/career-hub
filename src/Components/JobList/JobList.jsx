

const JobList = ({category}) => {
    const {logo, category_name, availability} = category
    // console.log(category)
    return (
        <div>
            
                
                <div className="p-4 w-fit bg-purple-50">
                    <img className="bg-sky-50 p-2 h-12 w-12" src={logo} alt="" />
                    <h3 className="text-xl font-bold">{category_name}</h3>
                    <p className="text-gray-500">{availability}</p>
                </div>
                
            
            
        </div>
    );
};

export default JobList;