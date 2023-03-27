import Link from "next/link";
import styles from "./nav.module.scss";
import { useOktaAuth } from "@okta/okta-react";

export const Nav = () => {
  const { nav, navUl, navListItem } = styles;
  const { authState, oktaAuth } = useOktaAuth();

  interface IRoutes {
    [key: string]: string;
  }

  const unAuthenticatedRoutes: IRoutes = {
    Home: "/",
    About: "/about",
    Help: "/help",
    Login: "/login",
  };

  const authenticatedRoutes: IRoutes = {
    Home: "/",
    Dashboard: "/protected",
  };

  let renderRoutes = unAuthenticatedRoutes;

  if (authState?.isAuthenticated) {
    renderRoutes = authenticatedRoutes;
  }

  const handleSignOut = async () => {
    await oktaAuth.signOut();
  };

  return (
    <div className={nav}>
      <ul className={navUl}>
        {Object.keys(renderRoutes).map((item) => (
          <Link key={item} href={renderRoutes[item]}>
            <li className={navListItem}>{item}</li>
          </Link>
        ))}
        {authState?.isAuthenticated && (
          <li className={navListItem} onClick={handleSignOut}>
            Logout
          </li>
        )}
      </ul>
    </div>
  );
};
