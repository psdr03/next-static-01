import { Nav } from "../nav";
import { useEffect } from "react";
import { Security } from "@okta/okta-react";
import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";
import { oktaAuthConfig } from "@/config/oktaConfig";
import { useRouter } from "next/router";

const oktaAuth = new OktaAuth(oktaAuthConfig);

const Layout = ({ children }: any) => {
  const router = useRouter();
  const triggerLogin = () => {
    router.push("/login");
  };

  const restoreOriginalUri = async (_oktaAuth: any, originalUri: any) => {
    router.replace(toRelativeUrl(originalUri || "/", window.location.origin));
  };
  const customAuthHandler = async () => {
    const previousAuthState = oktaAuth.authStateManager.getPreviousAuthState();
    if (!previousAuthState || !previousAuthState.isAuthenticated) {
      triggerLogin();
    }
  };

  useEffect(() => {});
  return (
    <Security
      oktaAuth={oktaAuth}
      onAuthRequired={customAuthHandler}
      restoreOriginalUri={restoreOriginalUri}
    >
      <Nav />
      {children}
    </Security>
  );
};

export default Layout;
