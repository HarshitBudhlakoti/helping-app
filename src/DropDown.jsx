import { GrUserAdmin } from "react-icons/gr";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
import { Link } from "react-router-dom";

const solutions = [
  {
    name: "Admin",
    to: "/adminPage",
    icon: <GrUserAdmin className="text-red-500 text-3xl" />,
  },
  {
    name: "Call us",
    to: "tel:+91-8791133877",
    icon: <BiPhoneCall className="text-sky-400 text-3xl" />,
  },
  {
    name: "Connect through mail",
    to: "https://mail.google.com/mail/?view=cm&fs=1&to=someone@example.com&su=SUBJECT&body=BODY&bcc=someone.else@example.com",
    icon: <AiOutlineMail className="text-red-500 text-3xl" />,
  },
  {
    name: "About us",
    to: "bTS",
    icon: <FcAbout className="text-green-400 text-3xl" />,
  },
];

export default function Example() {
  return (
    <div className="w-80 px-4 sm:px-0 lg:max-w-xl">
      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
        <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-1">
          {solutions.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-300 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                {item.icon}
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-900">{item.name}</p>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
