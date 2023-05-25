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
    <div className="bg-[url('https://images.unsplash.com/photo-1464618663641-bbdd760ae84a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2Vic2l0ZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D&w=1000&q=80')] bg-cover bg-no-repeat">
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
            to="barberForm"
            className="w-max shadow-xl hover:shadow-gray-500 border-2 border-black p-2 hover:cursor-pointer"
          >
            <img className="w-72 h-48 object-cover" src="https://i2-prod.manchestereveningnews.co.uk/incoming/article21411590.ece/ALTERNATES/s615/0_gettyimages-1207048163-170667a.jpg" />
            <h2 className="text-2xl text-center font-bold p-2">Barber</h2>
          </Link>
          <Link
            to="gardnerForm"
            className="w-max shadow-xl hover:shadow-gray-500 border-2 border-black p-2 hover:cursor-pointer"
          >
            <img className="w-72 h-48 object-cover" src="https://d17x34b9fcvxk7.cloudfront.net/static/marketing/images/hero-backgrounds/gardener.jpg" />
            <h2 className="text-2xl text-center font-bold p-2">Gardner</h2>
          </Link>
          <Link
            to="painterForm"
            className="w-max shadow-xl hover:shadow-gray-500 border-2 border-black p-2 hover:cursor-pointer"
          >
            <img className="w-72 h-48 object-cover" src="https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/A724RBEN2AI6PHCTNILJX2YJKM.jpg&w=1484" />
            <h2 className="text-2xl text-center font-bold p-2">Painter</h2>
          </Link>
          <Link
            to="photographerForm"
            className="w-max shadow-xl hover:shadow-gray-500 border-2 border-black p-2 hover:cursor-pointer"
          >
            <img className="w-72 h-48 object-cover" src="https://cdn.naturettl.com/wp-content/uploads/2017/04/22013824/become-professional-wildlife-photographer-1200x675-cropped.jpg" />
            <h2 className="text-2xl text-center font-bold p-2">Photographer</h2>
          </Link>
          <Link
            to="doctorForm"
            className="w-max shadow-xl hover:shadow-gray-500 border-2 border-black p-2 hover:cursor-pointer"
          >
            <img className="w-72 h-48 object-cover" src="https://post.healthline.com/wp-content/uploads/2020/08/Doctors_For_Men-732x549-thumbnail.jpg" />
            <h2 className="text-2xl text-center font-bold p-2">Doctor</h2>
          </Link>
          <Link
            to="cobblerForm"
            className="w-max shadow-xl hover:shadow-gray-500 border-2 border-black p-2 hover:cursor-pointer"
          >
            <img className="w-72 h-48 object-cover" src="https://d3mvlb3hz2g78.cloudfront.net/wp-content/uploads/2018/05/thumb_720_450_dreamstime_l_28510331.jpg" />
            <h2 className="text-2xl text-center font-bold p-2">Cobbler</h2>
          </Link>
          <Link
            to="tailorForm"
            className="w-max shadow-xl hover:shadow-gray-500 border-2 border-black p-2 hover:cursor-pointer"
          >
            <img className="w-72 h-48 object-cover" src="https://thumbs.dreamstime.com/b/tailor-13667198.jpg" />
            <h2 className="text-2xl text-center font-bold p-2">Tailor</h2>
          </Link>
          <Link
            to="tutorForm"
            className="w-max shadow-xl hover:shadow-gray-500 border-2 border-black p-2 hover:cursor-pointer"
          >
            <img className="w-72 h-48 object-cover" src="https://images.theconversation.com/files/268439/original/file-20190409-2921-1a4uike.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip" />
            <h2 className="text-2xl text-center font-bold p-2">Tutor</h2>
          </Link>
          <Link
            to="architectForm"
            className="w-max shadow-xl hover:shadow-gray-500 border-2 border-black p-2 hover:cursor-pointer"
          >
            <img className="w-72 h-48 object-cover" src="https://alis.alberta.ca/media/697205/architect-istock-473849812.jpg" />
            <h2 className="text-2xl text-center font-bold p-2">Architect</h2>
          </Link>
          <Link
            to="carpenterForm"
            className="w-max shadow-xl hover:shadow-gray-500 border-2 border-black p-2 hover:cursor-pointer"
          >
            <img className="w-72 h-48 object-cover" src="https://img.freepik.com/free-photo/carpenter-cutting-mdf-board-inside-workshop_23-2149451104.jpg?w=2000" />
            <h2 className="text-2xl text-center font-bold p-2">Carpenter</h2>
          </Link>
          <Link
            to="beauticianForm"
            className="w-max shadow-xl hover:shadow-gray-500 border-2 border-black p-2 hover:cursor-pointer"
          >
            <img className="w-72 h-48 object-cover" src="https://cruise.jobs/uploads/slots/a-day-in-the-life-of-a-beautician.jpg" />
            <h2 className="text-2xl text-center font-bold p-2">Beautician</h2>
          </Link>
          </div>
      </div>
    </div>
  );
};

export default HomePage;
