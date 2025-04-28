
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <Shield className="w-16 h-16 mx-auto text-primary" />
          <h1 className="text-5xl font-bold text-white">
            Protect Yourself from Phishing Attacks
          </h1>
          <p className="text-xl text-gray-400">
            Our advanced URL detection system helps you identify and avoid
            potentially dangerous websites before they can harm you.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/login">Get Started</Link>
            </Button>
            <Button variant="outline" asChild size="lg">
              <Link to="/signup">Create Account</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
