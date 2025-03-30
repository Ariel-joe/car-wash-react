import { useUserStore } from "../../store/user-store";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useUserStore();

  const navigate = useNavigate();

  // handling login
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      username,
      password,
    };

    const loginSuccess = await login(formData);

    if (loginSuccess) {
      toast.success("Login Successful");
      navigate("/");
    } else {
      toast.error("There was a problem logging you in. Please try again.");
    }
  };
  return (
    <>
      {/* logo goes here */}
      <div className="flex justify-center mb-5 items-center">
        <img src="/img/osharide-official.png" width={"140px"} alt="" />
      </div>

      <h1 className="text-xl font-semibold text-center mb-2">Log In</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-base ">Username</label>
          <input
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            type="text"
            className="p-2 border rounded-md focus:border-blue-800 outline-none"
            placeholder="Enter username"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-base">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="p-2 border rounded-md focus:border-blue-800 outline-none"
            placeholder="Enter password"
          />
        </div>

        <button
          type="submit"
          className="bg-gradient-to-r from-cyan-600 to-blue-500 text-white p-2 text-base rounded-md"
        >
          Login
        </button>
      </form>
    </>
  );
};
export { Login };
