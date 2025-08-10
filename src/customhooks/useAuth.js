import { useEffect, useState } from "react";

const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("demo_token");
    if (token) {
      console.log("userAuth: token found -- fetching profile");

      setTimeout(() => setUser({ name: "Demo User", role: "admin" }), 400);
    }
  }, []);

  const login = (name = "Demo User") => {
    localStorage.setItem("demo_token", "abc123");
    setUser({ name, role: "admin" });
    console.log("userAuth: login", name);
  };

  const logout = () => {
    localStorage.removeItem("demo_token");
    setUser(null);
    console.log("useAuth: logout");
  };

  return { user, login, logout, isLoggedIn: !!user };
};

export default useAuth;
