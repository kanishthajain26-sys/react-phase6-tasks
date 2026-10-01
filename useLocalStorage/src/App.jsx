import { useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [user, setUser] = useLocalStorage(
    "rememberedUser",
    null
  );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  function handleLogin(event) {
    event.preventDefault();

    if (name.trim() === "" || email.trim() === "") {
      alert("Please enter name and email");
      return;
    }

    const loggedInUser = {
      name: name,
      email: email,
    };

    if (rememberMe) {
      setUser(loggedInUser, true);
    } else {
      setUser(loggedInUser, false);
    }
  }

  function handleLogout() {
    setUser(null, false);

    setName("");
    setEmail("");
    setRememberMe(false);
  }

  if (user) {
    return (
      <div className="login-page">
        <div className="login-card">
          <div className="success-icon">
            ✓
          </div>

          <h1>Welcome! 👋</h1>

          <p className="subtitle">
            You are successfully logged in.
          </p>

          <div className="user-details">
            <div>
              <span>Name</span>
              <strong>{user.name}</strong>
            </div>

            <div>
              <span>Email</span>
              <strong>{user.email}</strong>
            </div>
          </div>

          <button
            className="logout-button"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-icon">
          🔐
        </div>

        <h1>Welcome Back</h1>

        <p className="subtitle">
          Login to continue
        </p>

        <form onSubmit={handleLogin}>
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

          <label className="remember">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(event) =>
                setRememberMe(event.target.checked)
              }
            />

            <span>Remember Me</span>
          </label>

          <button
            type="submit"
            className="login-button"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;