import dynamic from "next/dynamic";

// load client-side
const OktaSignInWidget = dynamic(
  () => import("@/components/oktaWidgetWrapper"),
  {
    ssr: false,
  }
);

const Login = () => {
  return (
    <>
      <h1>Login</h1>
      <OktaSignInWidget />
    </>
  );
};

export default Login;
