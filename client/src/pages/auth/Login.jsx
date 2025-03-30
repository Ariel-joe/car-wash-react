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
      <h1 className="text-2xl font-semibold text-center">Please login!</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label>Username</label>
          <input
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            type="text"
            className="p-2 border"
            placeholder="Enter username"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label>Password</label>
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            className="p-2 border"
            placeholder="Enter password"
          />
        </div>

        <button
          type="submit"
          className="bg-black text-white p-2 text-sm rounded-md"
        >
          Login
        </button>
      </form>
    </>
  );
};
export { Login };
