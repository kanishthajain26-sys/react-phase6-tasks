import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useState } from "react";

function App() {
  const [page, setPage] = useState("login");

  return (
    <div>

      <div className="nav">
        <button onClick={() => setPage("login")}>
          Login
        </button>

        <button onClick={() => setPage("signup")}>
          Signup
        </button>
      </div>

      {page === "login" && <Login />}

      {page === "signup" && <Signup />}

    </div>
  );
}

export default App;