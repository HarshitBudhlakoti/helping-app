import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { BsBackspaceFill } from "react-icons/bs";

// eslint-disable-next-line react/prop-types
function AdminLoginPage({ func }) {
  const userData = [{ email: "admin@gmail.com", password: "admin123" }];
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: () => {
      if (
        formik.values.password === userData[0].password &&
        formik.values.email === userData[0].email
      ) {
        alert("login success");
        localStorage.setItem("admin", JSON.stringify(true));
        navigate("/adminPage");
        func(true);
      } else {
        alert("invalid email or password");
      }
    },
  });

  return (
    <>
      <Link to="/" className="text-white fixed top-0 left-0 text-3xl m-4">
        <BsBackspaceFill />
      </Link>
      <form
        onSubmit={formik.handleSubmit}
        className="h-screen flex justify-center items-center flex-col gap-2 bg-[url('https://img.freepik.com/premium-vector/network-connection-background-abstract-style_23-2148875738.jpg')] bg-cover  bg-no-repeat"
      >
        <div>
          <div className="text-red-500 text-3xl font-extrabold text-center pb-10">
            Admin - login
          </div>
          <div className="flex flex-col sm:flex-row sm:gap-5 gap-2 ">
            <input
              required
              type="email"
              id="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              className="py-1 px-2 text-center font-bold w-60 rounded-md mb-4 shadow-md shadow-black focus:outline-white"
              placeholder="Email"
            />
          </div>
          <div className="flex flex-col sm:flex-row sm:gap-5 gap-2 ">
            <input
              required
              id="password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              type="text"
              className="py-1 px-2 text-center font-bold w-60 rounded-md shadow-md shadow-black focus:outline-white"
              placeholder="Password"
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="mt-5">
              <button
                type="submit"
                className="font-bold w-60 text-center py-1 px-2 hover:bg-orange-600 bg-orange-500 text-white rounded-md active:bg-orange-900 s"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
export default AdminLoginPage;
