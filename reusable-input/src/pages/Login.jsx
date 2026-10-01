import Input from "../components/Input";

function Login() {
  function handleSubmit(event) {
    event.preventDefault();
    alert("Login submitted");
  }

  return (
    <div className="page">
      <div className="form-card">

        <h1>Login</h1>
        <p>Welcome back! Please login.</p>

        <form onSubmit={handleSubmit}>

          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
          />

          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
          />

          <button type="submit">
            Login
          </button>

        </form>

      </div>
    </div>
  );
}

export default Login;