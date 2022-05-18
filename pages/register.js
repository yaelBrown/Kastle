import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
// import Loading from "../components/Loading";

const Register = () => {
  const router = useRouter();
  const initialForm = {
    alias: "",
    email: "",
    fname: "",
    lname: "",
    password: "",
  };
  const initialState = {
    loading: false,
    error: "",
    msg: false,
  };

  const [form, setForm] = useState(initialForm);
  const [state, setState] = useState(initialState);

  const changeHandler = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const registerHandler = async () => {
    setState({ ...state, loading: true, error: "", msg: false });
    const registerResponse = await axios
      .post("http://localhost:3000/api/v1/users", form)
      .then((res) => res.data)
      .then((data) => data);
    if (registerResponse.msg === "CREATED") {
      setState({ ...state, loading: false, msg: "User Created Successfully" });
      const timer = setTimeout(() => {
        router.push("/login");
      }, 2500);
      return () => clearTimeout(timer);
    } else {
      setState({ ...state, loading: false, error: "Error creating user" });
    }
  };

  const displayMessage = () => {
    if (state.msg) {
      return <small>{state.msg}</small>;
    }
  };

  const displayError = () => {
    if (state.error) {
      return <small>{state.error}</small>;
    }
  };

  return (
    <section>
      <h2>Register</h2>
      <table>
        <tr>
          <td>
            <h3>Alias:</h3>
          </td>
          <td>
            <input
              name="alias"
              value={form.alias}
              onChange={(e) => changeHandler(e)}
            />
          </td>
        </tr>

        <tr>
          <td>
            <h3>Email:</h3>
          </td>
          <td>
            <input
              name="email"
              value={form.email}
              onChange={(e) => changeHandler(e)}
            />
          </td>
        </tr>

        <tr>
          <td>
            <h3>Password:</h3>
          </td>
          <td>
            <input
              name="password"
              value={form.password}
              type="password"
              onChange={(e) => changeHandler(e)}
            />
          </td>
        </tr>

        <tr>
          <td>
            <h3>First Name: </h3>
          </td>
          <td>
            <input
              name="fname"
              value={form.fname}
              onChange={(e) => changeHandler(e)}
            />
          </td>
        </tr>

        <tr>
          <td>
            <h3>Last Name:</h3>
          </td>
          <td>
            <input
              name="lname"
              value={form.lname}
              onChange={(e) => changeHandler(e)}
            />
          </td>
        </tr>
      </table>

      <table>
        <tr>
          <button onClick={() => setForm(initialForm)}>Reset</button>
          <button onClick={() => router.push("/login")}>Login</button>
          <button onClick={() => registerHandler()}>Register</button>
        </tr>
      </table>

      {displayMessage()}
      {displayError()}
    </section>
  );
};

export default Register;
