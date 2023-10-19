import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="my-32 mx-auto text-center">
            <h1 className="text-3xl text-red-600 font-bold">Oops!!..</h1>
            <h2 className="text-2xl text-red-600 font-semibold my-3">Something wrong</h2>
            <Link to={'/'}><button className="btn text-xl font-medium bg-blue-600 text-white hover:bg-blue-700">Go to Home</button> </Link>
        </div>
    );
};

export default Error;