import { SignIn } from "@clerk/clerk-react";

const SignInPage = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-slate-300">
      <SignIn />
    </div>
  );
};

export default SignInPage;
