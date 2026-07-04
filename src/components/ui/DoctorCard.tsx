import { Star, MapPin, Clock, BadgeCheck, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Doctor } from '@/data/mockData';
import { useNavigate } from 'react-router-dom';

interface DoctorCardProps {
  doctor: Doctor;
}

const DoctorCard = ({ doctor }: DoctorCardProps) => {
  const navigate = useNavigate();

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 animate-fade-in overflow-hidden border-0 shadow-md">
      <CardContent className="p-0">
        <div className="flex gap-4 p-4">
          {/* Avatar */}
          <div className="relative">
            <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center overflow-hidden">
              <span className="text-3xl font-bold text-primary">
                {doctor.name.split(' ')[1]?.[0] || doctor.name[0]}
              </span>
            </div>
            {doctor.verified && (
              <div className="absolute -bottom-1 -right-1 bg-success rounded-full p-1">
                <BadgeCheck className="h-4 w-4 text-success-foreground" />
              </div>
            )}
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="font-semibold text-foreground truncate">{doctor.name}</h3>
                <p className="text-sm text-muted-foreground">{doctor.speciality}</p>
              </div>
              <Badge variant={doctor.available ? "default" : "secondary"} className={doctor.available ? "bg-success/10 text-success border-success/20" : ""}>
                {doctor.available ? 'Available' : 'Busy'}
              </Badge>
            </div>

            <div className="flex items-center gap-3 mt-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-warning text-warning" />
                <span className="font-medium text-foreground">{doctor.rating}</span>
                <span>({doctor.reviewCount})</span>
              </span>
              <span>•</span>
              <span>{doctor.experience} yrs exp</span>
            </div>

            <div className="flex items-center gap-1 mt-1 text-sm text-muted-foreground">
              <MapPin className="h-3.5 w-3.5" />
              <span className="truncate">{doctor.location.address}</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-4 py-3 bg-muted/30 border-t">
          <div>
            <p className="text-lg font-bold text-foreground">₹{doctor.fees}</p>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {doctor.nextAvailable}
            </p>
          </div>
          <Button 
            variant="hero" 
            size="sm"
            onClick={() => navigate(`/doctor/${doctor.id}`)}
          >
            <Calendar className="h-4 w-4 mr-1" />
            Book Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default DoctorCard;
