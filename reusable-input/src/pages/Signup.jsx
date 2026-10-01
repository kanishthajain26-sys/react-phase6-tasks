import Input from "../components/Input";

function Signup() {
  function handleSubmit(event) {
    event.preventDefault();
    alert("Signup submitted");
  }

  return (
    <div className="page">
      <div className="form-card">

        <h1>Signup</h1>
        <p>Create your new account.</p>

        <form onSubmit={handleSubmit}>

          <Input
            label="Name"
            type="text"
            placeholder="Enter your name"
          />

          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
          />

          <Input
            label="Password"
            type="password"
            placeholder="Create a password"
          />

          <button type="submit">
            Signup
          </button>

        </form>

      </div>
    </div>
  );
}

export default Signup;