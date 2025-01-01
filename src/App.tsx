import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "./components/login-button";
import { LogoutButton } from "./components/logout-button";
import { UserProfile } from "./components/user-profile";
import { ProtectedRoute } from "./components/protected-route";

export const App = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex-shrink-0">
                <h1 className="text-xl font-bold">SSO Demo</h1>
              </div>
              <div>{!isAuthenticated ? <LoginButton /> : <LogoutButton />}</div>
            </div>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/login" element={<LoginButton />} />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <UserProfile />
                </ProtectedRoute>
              }
            />
            <Route path="/" element={<UserProfile />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};
