import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div className="p-12">
        <h1 className="text-4xl font-extrabold">
          WHAT HELP DO YOU NEED FROM US ?
        </h1>
        <div className="flex gap-10">
          <Link
            to="ElectricianForm"
            className="w-max mt-16 shadow-xl hover:shadow-gray-500 border-2 border-black p-2 hover:cursor-pointer"
          >
            <img className="w-72 h-48 object-cover" src="electrician.jpeg" />
            <h2 className="text-2xl text-center font-bold p-2">Electrician</h2>
          </Link>

          <Link
            to="mechanicForm"
            className="w-max mt-16 shadow-xl hover:shadow-gray-500 border-2 border-black p-2 hover:cursor-pointer"
          >
            <img className="w-72 h-48 object-cover" src="mechanic.jpg" />
            <h2 className="text-2xl text-center font-bold p-2">Mechanic</h2>
          </Link>
          <Link
            to="pestForm"
            className="w-max mt-16 shadow-xl hover:shadow-gray-500 border-2 border-black p-2 hover:cursor-pointer"
          >
            <img className="w-72 h-48 object-cover" src="pest control.jpg" />
            <h2 className="text-2xl text-center font-bold p-2">Pest control</h2>
          </Link>
          <Link
            to="plumberForm"
            className="w-max mt-16 shadow-xl hover:shadow-gray-500 border-2 border-black p-2 hover:cursor-pointer"
          >
            <img className="w-72 h-48 object-cover" src="plumber.jpg" />
            <h2 className="text-2xl text-center font-bold p-2">Plumber</h2>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomePage;
