import { useState } from "react";
import { useRouter } from 'next/router'
import axios from 'axios'
import Loading from "../components/Loading";
import Authentication from "../util/authentication/Authentication";

const auth = new Authentication()

const Login = () => {
  const router = useRouter()
  const initialForm = {
    username: "",
    password: ""
  }

  const initialState = {
    loading: false,
    error: false
  }

  const [form, setForm] = useState(initialForm)
  const [state, setState] = useState(initialState)

  const changeHandler = e => setForm({ ...form, [e.target.name]: e.target.value })

  const loginHandler = async () => {
    setState({ ...state, loading: true })
    const loginResponse = await axios.post('http://localhost:3000/api/v1/user/login', form).then(res => res.data).then(data => data)
    if (loginResponse.msg === "OK") {
      auth.saveToLocalStorage(loginResponse.data)
      router.push("/dashboard/")
    } else {
      setState({ ...state, loading: false, error: "Username or Password is incorrect" })
    }
  }

  return (
    <section>
      <h2>Login Page</h2>
      <table>
        <tbody>
          <tr>
            <td>Username: </td>
            <td>
              <input
                name="username"
                value={form.username}
                onChange={e => changeHandler(e)}
              />
            </td>
          </tr>
          <tr>
            <td>Password: </td>
            <td>
              <input
                name="password"
                value={form.password}
                onChange={e => changeHandler(e)}
                type="password"
              />
            </td>
          </tr>
          <tr>
            <td>
              <button>Register</button>
              <button onClick={() => loginHandler()}>Login</button>
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      {state.error ? (<small>{state.error}</small>) : ""}
      {state.loading ? <Loading /> : ""}
    </section>
  );
};

export default Login;
