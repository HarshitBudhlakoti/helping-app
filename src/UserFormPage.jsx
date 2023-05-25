import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const UserFormPage = ({ problem, data }) => {
  const navigate = useNavigate();
  let oldData = JSON.parse(localStorage.getItem("data")) || data;
  const formik = useFormik({
    initialValues: {
      name: "",
      address: "",
      pincode: "",
      phone: "",
    },
    onSubmit: (values) => {
      localStorage.setItem(
        "data",
        JSON.stringify([...oldData, { ...values, problem }])
      );
      alert("form submitted successfully");

      navigate("/");
      // setData
    },
  });
  return (
    <>
      <div className="flex mt-2 flex-col justify-center items-center ">
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col w-max h-max rounded-xl p-8 gap-4 bg-gray-200 shadow-lg shadow-black"
        >
          <label className="font-bold text-xl" htmlFor="name">
            Name
          </label>
          <input
            className="border-2 border-gray-500 rounded-lg h-10 p-2 w-80"
            placeholder="enter your name here"
            required
            id="name"
            name="name"
            type="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <label className="font-bold text-xl" htmlFor="address">
            Full Address
          </label>
          <input
            className="border-2 border-gray-500 rounded-lg h-10 p-2"
            placeholder="House no. / street / locality"
            required
            id="address"
            name="address"
            type="address"
            onChange={formik.handleChange}
            value={formik.values.address}
          />
          <label className="font-bold text-xl" htmlFor="pincode">
            Pincode
          </label>
          <input
            className="border-2 border-gray-500 rounded-lg h-10 p-2"
            placeholder="example - 263001"
            required
            id="pincode"
            name="pincode"
            type="pincode"
            onChange={formik.handleChange}
            value={formik.values.pincode}
          />
          <label className="font-bold text-xl" htmlFor="phone">
            Phone No.
          </label>
          <input
            className="border-2 border-gray-500 rounded-lg h-10 p-2"
            placeholder="enter your phone number here"
            required
            id="phone"
            name="phone"
            type="phone"
            onChange={formik.handleChange}
            value={formik.values.phone}
          />
          <button
            className="text-white rounded-lg font-semibold text-xl bg-blue-500 hover:bg-blue-600 w-full self-center px-6 py-2 mt-10"
            type="contact"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default UserFormPage;
