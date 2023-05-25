import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { BsBackspaceFill } from "react-icons/bs";

// eslint-disable-next-line react/prop-types
const AdminPage = ({ status }) => {
  const data = JSON.parse(localStorage.getItem("data")) || [];
  const navigate = useNavigate();
  useEffect(() => {
    if (status === false) {
      navigate("/adminLoginPage");
    }
  }, []);

  const [finalData, setFinalData] = useState(data);
  const deleteItem = (n) => {
    const d = finalData.filter((_, i) => n !== i);
    setFinalData(d);
    localStorage.setItem("data", JSON.stringify(d));
  };
  if (finalData[0] === undefined) {
    return (
      <div className="bg-[url('https://images.unsplash.com/photo-1464618663641-bbdd760ae84a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2Vic2l0ZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D&w=1000&q=80')] bg-cover bg-no-repeat">
        <Link to="/" className="fixed top-0 right-0 text-3xl m-4">
          <BsBackspaceFill />
        </Link>
        <div className="text-xl font-bold flex h-screen justify-center items-center">
          No Data found !
        </div>
      </div>
    );
  } else {
    return (
      <div className="bg-[url('https://images.unsplash.com/photo-1464618663641-bbdd760ae84a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2Vic2l0ZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D&w=1000&q=80')] bg-cover h-screen bg-scroll  bg-no-repeat">
        <Link to="/" className="fixed top-0 right-0 text-3xl m-4">
          <BsBackspaceFill />
        </Link>
        <div className="p-5">
          <table className="border-2 solid border-black p-4 text-xl">
            <tr className="border-2 solid border-black p-4">
              <th className="border-2 solid border-black p-2">S.no.</th>
              <th className="border-2 solid border-black p-2">Name</th>
              <th className="border-2 solid border-black p-2">Phone</th>
              <th className="border-2 solid border-black p-2">Address</th>
              <th className="border-2 solid border-black p-2">Pincode</th>
              <th className="border-2 solid border-black p-2">Problem</th>
              <th className="border-2 solid border-black p-2">Status</th>
            </tr>
            {finalData.map((item, i) => {
              return (
                // eslint-disable-next-line react/jsx-key
                <tr className="border-2 solid border-black p-4 font-semibold">
                  <td className="border-2 solid border-black p-2">{i + 1}</td>
                  <td className="border-2 solid border-black p-2">
                    {item.name}
                  </td>
                  <td className="border-2 solid border-black p-2">
                    {item.phone}
                  </td>
                  <td className="border-2 solid border-black p-2">
                    {item.address}
                  </td>
                  <td className="border-2 solid border-black p-2">
                    {item.pincode}
                  </td>
                  <td className="border-2 solid border-black p-2">
                    {item.problem}
                  </td>
                  <button
                    onClick={() => deleteItem(i)}
                    className="px-4 py-1 bg-green-500 hover:bg-green-700 m-4 font-bold rounded-xl shadow-md shadow-black"
                  >
                    Mark as done
                  </button>
                  <button
                    onClick={() => deleteItem(i)}
                    className="px-4 py-1 bg-red-500 hover:bg-red-700 m-4 font-bold rounded-xl shadow-md shadow-black"
                  >
                    Delete
                  </button>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    );
  }
};

export default AdminPage;
