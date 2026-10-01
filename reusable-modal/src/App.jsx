import { useState } from "react";
import Modal from "./components/modal";

function App() {
  const [showProfile, setShowProfile] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleLogin() {
    if (name.trim() === "" || email.trim() === "") {
      alert("Please enter name and email");
      return;
    }

    alert("Login successful");

    setShowLogin(false);

    setName("");
    setEmail("");
  }

  return (
    <div className="app">

      <h1>Reusable Modal</h1>

      <p className="description">
        Same Modal component with different content
      </p>

      <div className="buttons">

        <button
          className="profile-button"
          onClick={() => setShowProfile(true)}
        >
          View Profile
        </button>

        <button
          className="delete-button"
          onClick={() => setShowDelete(true)}
        >
          Delete User
        </button>

        <button
          className="login-button"
          onClick={() => setShowLogin(true)}
        >
          Login
        </button>

      </div>


     

      {showProfile && (
        <Modal
          title="User Profile"
          onClose={() => setShowProfile(false)}
        >
          <div className="profile-content">
            <div className="profile-avatar">
              K
            </div>

            <h3>Kanishtha Jain</h3>

            <p>Web Development Student</p>

            <p>📧 kanishtha@example.com</p>
          </div>
        </Modal>
      )}


      

      {showDelete && (
        <Modal
          title="Delete User"
          onClose={() => setShowDelete(false)}
        >
          <div className="delete-content">

            <div className="warning-icon">
              ⚠️
            </div>

            <p>
              Are you sure you want to delete this user?
            </p>

            <button
              className="confirm-delete"
              onClick={() => {
                alert("User deleted");
                setShowDelete(false);
              }}
            >
              Yes, Delete
            </button>

          </div>
        </Modal>
      )}


   

      {showLogin && (
        <Modal
          title="Login"
          onClose={() => setShowLogin(false)}
        >
          <div className="login-form">

            <label>Name</label>

            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(event) =>
                setName(event.target.value)
              }
            />

            <label>Email</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(event) =>
                setEmail(event.target.value)
              }
            />

            <button
              className="login-submit"
              onClick={handleLogin}
            >
              Login
            </button>

          </div>
        </Modal>
      )}

    </div>
  );
}

export default App;