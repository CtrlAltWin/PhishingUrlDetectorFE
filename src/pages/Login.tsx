
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import AuthLayout from "@/components/layouts/AuthLayout";
import { login, DUMMY_USER } from "@/utils/auth";

const Login = () => {
  const [email, setEmail] = useState(DUMMY_USER.email);
  const [password, setPassword] = useState(DUMMY_USER.password);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const user = login(email, password);
    
    if (user) {
      toast({
        title: "Success",
        description: "Logged in successfully!",
      });
      navigate("/check");
    } else {
      toast({
        title: "Error",
        description: "Invalid credentials. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <AuthLayout
      title="Welcome Back"
      description="Sign in to your account to continue"
    >
      <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-md mb-4 text-center">
        <p className="text-yellow-800">
          <strong>Test Credentials:</strong><br />
          Email: {DUMMY_USER.email}<br />
          Password: {DUMMY_USER.password}
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <Button type="submit" className="w-full">
          Sign In
        </Button>
        <p className="text-center text-sm text-gray-400">
          Don't have an account?{" "}
          <Link to="/signup" className="text-primary hover:underline">
            Sign up
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
};

export default Login;
