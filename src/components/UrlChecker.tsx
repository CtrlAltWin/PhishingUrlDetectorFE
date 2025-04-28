
import React, { useState } from 'react';
import { Shield, ShieldCheck, ShieldX, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';

type UrlStatus = 'idle' | 'loading' | 'safe' | 'dangerous';

const UrlChecker = () => {
  const [url, setUrl] = useState('');
  const [status, setStatus] = useState<UrlStatus>('idle');
  const [history, setHistory] = useState<Array<{ url: string; status: UrlStatus }>>([]);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!url) {
      toast({
        title: "Error",
        description: "Please enter a URL",
        variant: "destructive",
      });
      return;
    }

    setStatus('loading');

    // API Integration Point:
    // 1. Make API call to check URL
    // try {
    //   const response = await checkUrl(url);
    //   setStatus(response.isSafe ? 'safe' : 'dangerous');
    //   setHistory(prev => [...prev, { url, status: response.isSafe ? 'safe' : 'dangerous' }]);
    // } catch (error) {
    //   toast({
    //     title: "Error",
    //     description: "Failed to check URL",
    //     variant: "destructive",
    //   });
    // }

    // Temporary mock response
    setTimeout(() => {
      const mockStatus: UrlStatus = Math.random() > 0.5 ? 'safe' : 'dangerous';
      setStatus(mockStatus);
      setHistory(prev => [{ url, status: mockStatus }, ...prev.slice(0, 4)]);
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-8">
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <Shield className="w-16 h-16 text-primary mb-2" />
        </div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          Phishing URL Detector
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Stay safe online! Enter any suspicious URL below, and we'll analyze it for potential phishing threats. 
          Our advanced detection system helps protect you from malicious websites.
        </p>
      </div>

      <Card className="p-8 shadow-lg border-2 hover:border-primary/50 transition-colors">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <Input
              type="url"
              placeholder="Enter a suspicious URL to check..."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full pl-4 pr-12 py-6 text-lg bg-white/50 backdrop-blur-sm"
            />
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
          <Button 
            type="submit" 
            className="w-full py-6 text-lg bg-gradient-to-r from-primary to-purple-600 hover:opacity-90 transition-opacity"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? (
              <div className="animate-pulse">Analyzing URL...</div>
            ) : (
              "Check URL Safety"
            )}
          </Button>
        </form>

        {status !== 'idle' && status !== 'loading' && (
          <div className={`mt-6 p-6 rounded-lg flex items-center gap-4 ${
            status === 'safe' 
              ? 'bg-green-50 text-green-700 border border-green-200' 
              : 'bg-red-50 text-red-700 border border-red-200'
          }`}>
            {status === 'safe' ? (
              <>
                <ShieldCheck className="w-8 h-8" />
                <div>
                  <h3 className="font-semibold text-lg">Safe to Visit</h3>
                  <p>This URL appears to be legitimate and safe to access.</p>
                </div>
              </>
            ) : (
              <>
                <ShieldX className="w-8 h-8" />
                <div>
                  <h3 className="font-semibold text-lg">Potential Threat Detected!</h3>
                  <p>This URL shows signs of being potentially malicious. We recommend avoiding this website.</p>
                </div>
              </>
            )}
          </div>
        )}
      </Card>

      {history.length > 0 && (
        <Card className="p-6 bg-white/50 backdrop-blur-sm">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Recently Checked URLs</h2>
          <div className="space-y-3">
            {history.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100"
              >
                {item.status === 'safe' ? (
                  <ShieldCheck className="w-5 h-5 text-green-500" />
                ) : (
                  <ShieldX className="w-5 h-5 text-red-500" />
                )}
                <span className="truncate font-medium text-gray-700">{item.url}</span>
              </div>
            ))}
          </div>
        </Card>
      )}
      
      <div className="text-center text-sm text-gray-500 mt-8">
        <p>Our URL checker helps identify potential phishing attempts and malicious websites.</p>
        <p>Stay protected while browsing the internet!</p>
      </div>
    </div>
  );
};

export default UrlChecker;
