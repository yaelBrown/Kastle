const Register = () => {
  return (
    <section>
      <h2>Register</h2>
      <table>
        <tr>
          <td>
            <h3>Alias:</h3>
          </td>
          <td>
            <input/>
          </td>
        </tr>

        <tr>
          <td>
            <h3>Email:</h3>
          </td>
          <td>
            <input/>
          </td>
        </tr>

        <tr>
          <td>
            <h3>First Name: </h3>
          </td>
          <td>
            <input/>
          </td>
        </tr>

        <tr>
          <td>
            <h3>Last Name:</h3>
          </td>
          <td>
            <input/>
          </td>
        </tr>
      </table>
      
      <table>
        <tr>
          <button>Reset</button>
          <button>Login</button>
          <button>Register</button>
        </tr>
      </table>
      
    </section>
  );
};

export default Register;
