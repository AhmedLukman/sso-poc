import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = () => {
    loginWithRedirect({
      authorizationParams: {
        organization: "org_OPlZYBfFFpXBc8Cp",
        // connection: "sso-poc",
      },
    });
  };

  return <button onClick={handleLogin}>Log In</button>;
};

export default LoginButton;