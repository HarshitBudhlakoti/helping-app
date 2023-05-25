import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import DropDown from "./DropDown";
import { GiHamburgerMenu } from "react-icons/gi";

// eslint-disable-next-line react/prop-types
const HomePage = ({ status }) => {
  console.log("userStatus", status);
  const navigate = useNavigate();
  const [dropDownStatus, setDropDownStatus] = useState(false);
  console.log("status",dropDownStatus)

  const ToggleDropDown = () => {
    setDropDownStatus(!dropDownStatus);
  };

  useEffect(() => {
    if (status === false) {
      navigate("/loginPage");
    }
  }, []);
  return (
    <div className="bg-[url('https://images.unsplash.com/photo-1464618663641-bbdd760ae84a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2Vic2l0ZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D&w=1000&q=80')] bg-cover  bg-no-repeat">
      <div className="fixed top-0 right-0 m-4 text-end">
        <button>
          <GiHamburgerMenu
            onClick={ToggleDropDown}
            className="text-gray-600 hover:text-gray-800 text-4xl"
          />
        </button>
        {dropDownStatus && <DropDown />}
      </div>
      <div className="p-12">
        <h1 className="text-4xl font-extrabold">
          WHAT HELP DO YOU NEED FROM US ?
        </h1>
        <div className="flex gap-20 pt-20 flex-wrap justify-center">
          <Link
            to="electricianForm"
            className="w-max shadow-xl hover:shadow-gray-500 border-2 border-black p-2 hover:cursor-pointer"
          >
            <img className="w-72 h-48 object-cover" src="electrician.jpeg" />
            <h2 className="text-2xl text-center font-bold p-2">Electrician</h2>
          </Link>

          <Link
            to="mechanicForm"
            className="w-max shadow-xl hover:shadow-gray-500 border-2 border-black p-2 hover:cursor-pointer"
          >
            <img className="w-72 h-48 object-cover" src="mechanic.jpg" />
            <h2 className="text-2xl text-center font-bold p-2">Mechanic</h2>
          </Link>
          <Link
            to="pestForm"
            className="w-max shadow-xl hover:shadow-gray-500 border-2 border-black p-2 hover:cursor-pointer"
          >
            <img className="w-72 h-48 object-cover" src="pest control.jpg" />
            <h2 className="text-2xl text-center font-bold p-2">Pest control</h2>
          </Link>
          <Link
            to="plumberForm"
            className="w-max shadow-xl hover:shadow-gray-500 border-2 border-black p-2 hover:cursor-pointer"
          >
            <img className="w-72 h-48 object-cover" src="plumber.jpg" />
            <h2 className="text-2xl text-center font-bold p-2">Plumber</h2>
          </Link>
          <Link
            to="electricianForm"
            className="w-max shadow-xl hover:shadow-gray-500 border-2 border-black p-2 hover:cursor-pointer"
          >
            <img className="w-72 h-48 object-cover" src="electrician.jpeg" />
            <h2 className="text-2xl text-center font-bold p-2">Electrician</h2>
          </Link>

          <Link
            to="mechanicForm"
            className="w-max shadow-xl hover:shadow-gray-500 border-2 border-black p-2 hover:cursor-pointer"
          >
            <img className="w-72 h-48 object-cover" src="mechanic.jpg" />
            <h2 className="text-2xl text-center font-bold p-2">Mechanic</h2>
          </Link>
          <Link
            to="pestForm"
            className="w-max shadow-xl hover:shadow-gray-500 border-2 border-black p-2 hover:cursor-pointer"
          >
            <img className="w-72 h-48 object-cover" src="pest control.jpg" />
            <h2 className="text-2xl text-center font-bold p-2">Pest control</h2>
          </Link>
          <Link
            to="plumberForm"
            className="w-max shadow-xl hover:shadow-gray-500 border-2 border-black p-2 hover:cursor-pointer"
          >
            <img className="w-72 h-48 object-cover" src="plumber.jpg" />
            <h2 className="text-2xl text-center font-bold p-2">Plumber</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
