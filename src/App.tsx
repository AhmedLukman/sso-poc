import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./login-button";
import LogoutButton from "./logout-button";
import Profile from "./user-profile";

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <div>
      <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
        {!isAuthenticated && <LoginButton />}
        {isAuthenticated && <LogoutButton />}
      </div>
      <Profile />
    </div>
  );
}

export default App;
