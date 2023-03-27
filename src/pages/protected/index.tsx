import { useOktaAuth } from "@okta/okta-react";

const Protected = () => {
  const { authState } = useOktaAuth();
  if (authState?.isAuthenticated) {
    return <h1>Loggedin</h1>;
  } else return <h1>Not logged in</h1>;
};

export default Protected;
