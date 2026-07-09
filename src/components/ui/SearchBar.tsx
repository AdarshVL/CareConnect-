import { useState } from 'react';
import { Search, MapPin, Stethoscope } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { specialities } from '@/data/mockData';

interface SearchBarProps {
  onSearch?: (location: string, speciality: string) => void;
  variant?: 'hero' | 'compact';
}

const SearchBar = ({ onSearch, variant = 'hero' }: SearchBarProps) => {
  const [location, setLocation] = useState('');
  const [speciality, setSpeciality] = useState('');

  const handleSearch = () => {
    onSearch?.(location, speciality);
  };

  if (variant === 'compact') {
    return (
      <div className="flex gap-2 w-full max-w-2xl">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search doctors, labs, hospitals..."
            className="pl-10"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <Button variant="hero" onClick={handleSearch}>
          Search
        </Button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-card rounded-2xl shadow-xl p-2 md:p-3 animate-scale-in">
        <div className="flex flex-col md:flex-row gap-2 md:gap-3">
          {/* Location Input */}
          <div className="relative flex-1">
            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-primary" />
            <Input
              placeholder="Enter your location"
              className="pl-12 h-12 md:h-14 text-base border-0 bg-muted/50 focus-visible:ring-primary"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px bg-border" />

          {/* Speciality Select */}
          <div className="relative flex-1">
            <Stethoscope className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-primary z-10" />
            <Select value={speciality} onValueChange={setSpeciality}>
              <SelectTrigger className="pl-12 h-12 md:h-14 text-base border-0 bg-muted/50 focus:ring-primary">
                <SelectValue placeholder="Select speciality" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Specialities</SelectItem>
                {specialities.map((spec) => (
                  <SelectItem key={spec} value={spec.toLowerCase()}>
                    {spec}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Search Button */}
          <Button 
            variant="hero" 
            size="xl" 
            className="w-full md:w-auto"
            onClick={handleSearch}
          >
            <Search className="h-5 w-5 mr-2" />
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
