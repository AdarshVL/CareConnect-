import { MapPin, Navigation } from 'lucide-react';

interface MapPlaceholderProps {
  className?: string;
  showRoute?: boolean;
  ambulancePosition?: { progress: number };
}

const MapPlaceholder = ({ className = '', showRoute = false, ambulancePosition }: MapPlaceholderProps) => {
  return (
    <div className={`relative bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl overflow-hidden ${className}`}>
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary/30" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Mock roads */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 right-0 h-1 bg-primary/20 rounded-full" />
        <div className="absolute top-2/3 left-0 right-0 h-1 bg-primary/20 rounded-full" />
        <div className="absolute left-1/4 top-0 bottom-0 w-1 bg-primary/20 rounded-full" />
        <div className="absolute left-3/4 top-0 bottom-0 w-1 bg-primary/20 rounded-full" />
      </div>

      {showRoute && (
        <>
          {/* Route line */}
          <svg className="absolute inset-0 w-full h-full">
            <path
              d="M 50 300 Q 150 200 200 150 T 350 50"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="4"
              strokeDasharray="10 5"
              className="animate-pulse"
            />
          </svg>

          {/* Start point (User location) */}
          <div className="absolute bottom-8 left-12">
            <div className="relative">
              <div className="w-4 h-4 rounded-full bg-emergency animate-ping absolute" />
              <div className="w-4 h-4 rounded-full bg-emergency relative z-10 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-emergency-foreground" />
              </div>
            </div>
            <span className="text-xs font-medium text-foreground mt-1 block">You</span>
          </div>

          {/* Ambulance */}
          {ambulancePosition && (
            <div 
              className="absolute transition-all duration-1000"
              style={{
                left: `${20 + ambulancePosition.progress * 0.6}%`,
                bottom: `${20 + ambulancePosition.progress * 0.5}%`
              }}
            >
              <div className="bg-emergency text-emergency-foreground p-2 rounded-lg shadow-emergency animate-pulse">
                <span className="text-xl">🚑</span>
              </div>
            </div>
          )}

          {/* End point (Hospital) */}
          <div className="absolute top-8 right-12">
            <div className="w-10 h-10 rounded-full bg-success flex items-center justify-center shadow-lg">
              <span className="text-lg">🏥</span>
            </div>
            <span className="text-xs font-medium text-foreground mt-1 block text-center">Hospital</span>
          </div>
        </>
      )}

      {!showRoute && (
        <>
          {/* Location markers */}
          <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
            <div className="bg-primary text-primary-foreground p-2 rounded-full shadow-lg">
              <MapPin className="h-5 w-5" />
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="bg-success text-success-foreground p-2 rounded-full shadow-lg">
              <MapPin className="h-5 w-5" />
            </div>
          </div>
          <div className="absolute top-1/3 right-1/4 transform -translate-x-1/2 -translate-y-1/2">
            <div className="bg-primary text-primary-foreground p-2 rounded-full shadow-lg">
              <MapPin className="h-5 w-5" />
            </div>
          </div>
        </>
      )}

      {/* Map attribution */}
      <div className="absolute bottom-2 right-2 text-xs text-muted-foreground bg-background/80 px-2 py-1 rounded">
        <Navigation className="h-3 w-3 inline mr-1" />
        Live Map
      </div>
    </div>
  );
};

export default MapPlaceholder;
