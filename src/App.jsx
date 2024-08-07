/*eslint no-unused-vars: "off"*/
import { useUser } from "@clerk/clerk-react";
import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const App = () => {
  const [count, setCount] = useState(0);
  const { user, isLoaded, isSignedIn } = useUser();
  if (!isSignedIn && isLoaded) {
    return <Navigate to={"/auth/sign-in"} />;
  }
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default App;
