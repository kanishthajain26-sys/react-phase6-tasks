import { useState } from "react";
import useDebounce from "./hooks/useDebounce";

function App() {
  const [search, setSearch] = useState("");

  const debouncedSearch = useDebounce(search, 500);

  return (
    <div className="app">
      <div className="search-card">
        <h1>Search 🔎</h1>

        <input
          type="text"
          placeholder="Search something..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <div className="result">
          <p>
            <strong>Typing value:</strong> {search}
          </p>

          <p>
            <strong>Debounced value:</strong>{" "}
            {debouncedSearch}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;