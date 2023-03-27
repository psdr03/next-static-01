const OKTA_BASE_URL = "dev-31845553.okta.com";
const OKTA_CLIENT_ID = "0oa8rwep3osV7ceeu5d7";

export const oktaAuthConfig = {
  baseUri: OKTA_BASE_URL,
  issuer: `https://${OKTA_BASE_URL}/oauth2/default`,
  clientId: OKTA_CLIENT_ID,
  redirectUri: `/login/callback`,
  scopes: ["openid", "profile", "email"],
  authParams: {
    // To avoid redirect do not set "pkce" or "display" here. OKTA-335945
    issuer: `https://${OKTA_BASE_URL}/oauth2/default`,
    scopes: ["openid", "profile", "email"],
    tokenManager: {
      storage: "sessionStorage",
    },
  },
  // useInteractionCodeFlow: true,
};
