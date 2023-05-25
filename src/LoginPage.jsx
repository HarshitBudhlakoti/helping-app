import { useFormik } from "formik";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function LoginPage({ func, status }) {
  const userData = [{ email: "user@gmail.com", password: "user123" }];
  const navigate = useNavigate();

  useEffect(() => {
    if (status === true) {
      navigate("/");
    }
  }, []);

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
        localStorage.setItem("user", JSON.stringify(true));
        navigate("/");
        func(true);
      } else {
        alert("invalid email or password");
      }
    },
  });

  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        className="h-screen flex justify-center items-center flex-col gap-2 bg-[url('adminl.avif')] bg-cover  bg-no-repeat"
      >
        <div>
          <div className="text-red-500 text-3xl font-extrabold text-center pb-10">
            A Y S - login
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
            <div className="text-white text-sm font-bold mt-2">own an admin account ? <Link className="text-blue-600" to="/adminPage">click here.</Link></div>
          </div>
        </div>
      </form>
    </>
  );
}
export default LoginPage;
