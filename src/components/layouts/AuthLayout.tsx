
import { Card } from "@/components/ui/card";

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
}

const AuthLayout = ({ children, title, description }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 p-4">
      <Card className="w-full max-w-md p-6 space-y-6 bg-white/5 backdrop-blur-lg border-white/10">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-white">{title}</h1>
          <p className="text-gray-400">{description}</p>
        </div>
        {children}
      </Card>
    </div>
  );
};

export default AuthLayout;
