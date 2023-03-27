import React, { useEffect, useRef } from "react";
import OktaSignIn from "@okta/okta-signin-widget";
import "/node_modules/@okta/okta-signin-widget/dist/css/okta-sign-in.min.css";
import { oktaAuthConfig } from "@/config/oktaConfig";
import { useOktaAuth } from "@okta/okta-react";

const OktaSignInWidget = () => {
  const { oktaAuth } = useOktaAuth();
  const widgetRef = useRef(null);
  useEffect(() => {
    if (!widgetRef.current) {
      return;
    }

    const widget: OktaSignIn = new OktaSignIn(oktaAuthConfig);

    widget.renderEl(
      { el: widgetRef.current },
      (res: any) => {
        oktaAuth.handleLoginRedirect(res.tokens);
      },
      (err) => {
        throw err;
      }
    );

    return () => widget.remove();
  }, [oktaAuth]);

  return <div ref={widgetRef} />;
};

export default OktaSignInWidget;
