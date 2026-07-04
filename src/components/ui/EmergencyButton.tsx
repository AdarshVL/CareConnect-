import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface EmergencyButtonProps {
  floating?: boolean;
}

const EmergencyButton = ({ floating = true }: EmergencyButtonProps) => {
  const navigate = useNavigate();

  const handleEmergency = () => {
    navigate('/emergency');
  };

  if (floating) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          {/* Pulse rings */}
          <div className="absolute inset-0 rounded-full bg-emergency/30 animate-pulse-ring" />
          <div className="absolute inset-0 rounded-full bg-emergency/20 animate-pulse-ring" style={{ animationDelay: '0.5s' }} />
          
          <Button
            onClick={handleEmergency}
            variant="emergency"
            size="iconXl"
            className="rounded-full relative z-10"
          >
            <Phone className="h-8 w-8" />
          </Button>
        </div>
        <p className="text-center text-xs font-semibold text-emergency mt-2">SOS</p>
      </div>
    );
  }

  return (
    <Button onClick={handleEmergency} variant="emergency" size="lg">
      <Phone className="h-5 w-5 mr-2" />
      Emergency SOS
    </Button>
  );
};

export default EmergencyButton;
