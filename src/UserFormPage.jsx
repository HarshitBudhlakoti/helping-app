import { useFormik } from "formik";

// eslint-disable-next-line react/prop-types
const UserFormPage = ({ problemName }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      address: "",
      pincode:'',
      phone: "",
      description: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <button></button>
      <div className="flex mt-2 flex-col justify-center items-center ">
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col w-max h-max rounded-xl p-8 gap-3 bg-gray-200 shadow-lg shadow-black"
        >
          <label className="font-bold text-xl" htmlFor="name">
            Name
          </label>
          <input
            className="border-2 border-gray-500 rounded-lg h-10 p-2"
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

          <div className="flex flex-col">
          <label className="font-bold text-xl" htmlFor="multipleProblem">
            Have multiple {problemName} problems ?
          </label>
            <label>
              <input className="mr-2" type="radio" name="multipleProblem" />
              Yes
            </label>
            <label>
              <input className="mr-2" type="radio" name="multipleProblem" />
              No
            </label>
          </div>
          <label className="font-bold text-xl" htmlFor="description">
            Description ( optional )
          </label>
          <textarea
          name="description"
            className="border-2 border-gray-500 rounded-lg w-80 h-20 p-2 w-full"
            placeholder={`describe your ${problemName} problem here.`}
          />

          <button
            className="text-white rounded-lg font-semibold text-xl bg-blue-500 hover:bg-blue-600 w-full self-center px-6 py-2 mt-2"
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
