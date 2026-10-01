import useFetch from "./hooks/useFetch";

function App() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (loading) {
    return (
      <div className="status-page">
        <div className="loader"></div>
        <h2>Loading Users...</h2>
        <p>Please wait while we fetch the data.</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="status-page">
        <div className="error-icon">!</div>
        <h2>Something went wrong</h2>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="app">
      <header className="header">
        <div>
          <span className="badge">USER DIRECTORY</span>

          <h1>Meet Our Users 👋</h1>

          <p>
            Explore user information fetched from our API.
          </p>
        </div>

        <div className="user-count">
          <strong>{data.length}</strong>
          <span>Users</span>
        </div>
      </header>

      <main className="users-container">
        <div className="section-title">
          <div>
            <h2>All Users</h2>
            <p>Here are the users available in our system.</p>
          </div>

          <span className="result-count">
            {data.length} results
          </span>
        </div>

        <div className="users-grid">
          {data.map((user) => (
            <div className="user-card" key={user.id}>
              
              <div className="card-top">
                <div className="avatar">
                  {user.name.charAt(0)}
                </div>

                <span className="active-dot">
                  ● Active
                </span>
              </div>

              <div className="user-info">
                <h3>{user.name}</h3>

                <p className="username">
                  @{user.username}
                </p>
              </div>

              <div className="details">
                <div className="detail">
                  <span className="detail-icon">✉️</span>

                  <div>
                    <small>Email</small>
                    <p>{user.email}</p>
                  </div>
                </div>

                <div className="detail">
                  <span className="detail-icon">📱</span>

                  <div>
                    <small>Phone</small>
                    <p>{user.phone}</p>
                  </div>
                </div>

                <div className="detail">
                  <span className="detail-icon">🌐</span>

                  <div>
                    <small>Website</small>
                    <p>{user.website}</p>
                  </div>
                </div>
              </div>

              <div className="company">
                <span>🏢</span>
                <div>
                  <small>Company</small>
                  <p>{user.company.name}</p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;