import Button from "./components/button";

function App() {

  function handleLogin() {
    alert("Login clicked");
  }

  function handleDelete() {
    alert("Delete clicked");
  }

  function handleProfile() {
    alert("Profile clicked");
  }

  function handleSave() {
    alert("Data saved");
  }

  return (
    <div className="app">

      <h1>Reusable Button</h1>

      <p>
        Same Button component with different actions
      </p>

      <div className="buttons">

        <Button
          text="Login"
          onClick={handleLogin}
          type="primary"
        />

        <Button
          text="Delete"
          onClick={handleDelete}
          type="danger"
        />

        <Button
          text="View Profile"
          onClick={handleProfile}
          type="secondary"
        />

        <Button
          text="Save"
          onClick={handleSave}
          type="success"
        />

      </div>

    </div>
  );
}

export default App;