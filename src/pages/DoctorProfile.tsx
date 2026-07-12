import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Star, MapPin, Clock, BadgeCheck, Calendar, Phone, 
  MessageSquare, Award, GraduationCap, ArrowLeft, Share2
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import EmergencyButton from '@/components/EmergencyButton';
import MapPlaceholder from '@/components/MapPlaceholder';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { doctors } from '@/data/mockData';
import { toast } from '@/hooks/use-toast';

const DoctorProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  
  const doctor = doctors.find(d => d.id === id);

  if (!doctor) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Doctor not found</h1>
          <Button onClick={() => navigate('/dashboard')}>Go Back</Button>
        </div>
      </div>
    );
  }

  const timeSlots = [
    { time: '10:00 AM', available: true },
    { time: '11:00 AM', available: true },
    { time: '12:00 PM', available: false },
    { time: '2:00 PM', available: true },
    { time: '3:00 PM', available: true },
    { time: '4:00 PM', available: true },
    { time: '5:00 PM', available: false },
    { time: '6:00 PM', available: true },
  ];

  const reviews = [
    { name: 'Rahul S.', rating: 5, comment: 'Excellent doctor! Very thorough and caring.', date: '2 days ago' },
    { name: 'Priya M.', rating: 5, comment: 'Best cardiologist in Delhi. Highly recommend!', date: '1 week ago' },
    { name: 'Amit K.', rating: 4, comment: 'Good experience, but wait time was a bit long.', date: '2 weeks ago' },
  ];

  const handleBooking = () => {
    if (!selectedSlot) {
      toast({
        title: 'Select a time slot',
        description: 'Please choose an available time slot to book your appointment.',
        variant: 'destructive'
      });
      return;
    }

    toast({
      title: 'Appointment Booked! 🎉',
      description: `Your appointment with ${doctor.name} is confirmed for ${selectedSlot}.`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 py-6">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          className="mb-4" 
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Doctor Info Card */}
            <Card className="border-0 shadow-md overflow-hidden">
              <div className="gradient-hero h-24" />
              <CardContent className="relative pt-0">
                <div className="flex flex-col md:flex-row gap-4 -mt-12">
                  {/* Avatar */}
                  <div className="relative">
                    <div className="w-24 h-24 rounded-2xl bg-card border-4 border-card flex items-center justify-center overflow-hidden shadow-lg">
                      <span className="text-4xl font-bold text-primary">
                        {doctor.name.split(' ')[1]?.[0] || doctor.name[0]}
                      </span>
                    </div>
                    {doctor.verified && (
                      <div className="absolute -bottom-1 -right-1 bg-success rounded-full p-1.5 shadow-md">
                        <BadgeCheck className="h-4 w-4 text-success-foreground" />
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex-1 pt-4 md:pt-8">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h1 className="text-2xl font-bold text-foreground">{doctor.name}</h1>
                        <p className="text-muted-foreground">{doctor.speciality}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="icon">
                          <Share2 className="h-4 w-4" />
                        </Button>
                        <Badge variant={doctor.available ? "default" : "secondary"} 
                          className={doctor.available ? "bg-success text-success-foreground" : ""}>
                          {doctor.available ? 'Available Today' : 'Not Available'}
                        </Badge>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 mt-4 text-sm">
                      <span className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-warning text-warning" />
                        <span className="font-semibold">{doctor.rating}</span>
                        <span className="text-muted-foreground">({doctor.reviewCount} reviews)</span>
                      </span>
                      <span className="flex items-center gap-1 text-muted-foreground">
                        <Award className="h-4 w-4" />
                        {doctor.experience} years experience
                      </span>
                      <span className="flex items-center gap-1 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        {doctor.location.address}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tabs */}
            <Tabs defaultValue="about">
              <TabsList className="w-full justify-start">
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                <TabsTrigger value="location">Location</TabsTrigger>
              </TabsList>

              <TabsContent value="about" className="mt-4 space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">About Doctor</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      {doctor.name} is a highly experienced {doctor.speciality.toLowerCase()} with over {doctor.experience} years of practice. 
                      Known for exceptional patient care and expertise in treating complex conditions.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 pt-4">
                      <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                        <GraduationCap className="h-5 w-5 text-primary" />
                        <div>
                          <p className="text-sm font-medium">Education</p>
                          <p className="text-xs text-muted-foreground">MBBS, MD - AIIMS Delhi</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                        <Award className="h-5 w-5 text-primary" />
                        <div>
                          <p className="text-sm font-medium">Specialization</p>
                          <p className="text-xs text-muted-foreground">{doctor.speciality}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Patient Reviews</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {reviews.map((review, index) => (
                      <div key={index} className="border-b last:border-0 pb-4 last:pb-0">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                              <span className="text-xs font-medium text-primary">{review.name[0]}</span>
                            </div>
                            <span className="font-medium">{review.name}</span>
                          </div>
                          <span className="text-xs text-muted-foreground">{review.date}</span>
                        </div>
                        <div className="flex items-center gap-1 mb-2">
                          {Array.from({ length: review.rating }).map((_, i) => (
                            <Star key={i} className="h-3 w-3 fill-warning text-warning" />
                          ))}
                        </div>
                        <p className="text-sm text-muted-foreground">{review.comment}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="location" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Clinic Location</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <MapPlaceholder className="h-64 mb-4" />
                    <div className="flex items-start gap-2">
                      <MapPin className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium">{doctor.location.address}</p>
                        <p className="text-sm text-muted-foreground">New Delhi, India</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Booking Sidebar */}
          <div className="space-y-4">
            <Card className="border-0 shadow-md sticky top-20">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Book Appointment</span>
                  <span className="text-2xl font-bold text-primary">₹{doctor.fees}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Date Selection */}
                <div>
                  <p className="text-sm font-medium mb-2">Select Date</p>
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {['Today', 'Tomorrow', 'Wed', 'Thu', 'Fri'].map((day, i) => (
                      <button
                        key={day}
                        className={`flex flex-col items-center p-3 rounded-lg min-w-[60px] transition-all ${
                          i === 0 
                            ? 'bg-primary text-primary-foreground' 
                            : 'bg-muted hover:bg-muted/80'
                        }`}
                      >
                        <span className="text-xs">{day}</span>
                        <span className="font-bold">{26 + i}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Time Slots */}
                <div>
                  <p className="text-sm font-medium mb-2">Select Time</p>
                  <div className="grid grid-cols-3 gap-2">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot.time}
                        disabled={!slot.available}
                        onClick={() => setSelectedSlot(slot.time)}
                        className={`py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                          selectedSlot === slot.time
                            ? 'bg-primary text-primary-foreground'
                            : slot.available
                            ? 'bg-muted hover:bg-muted/80'
                            : 'bg-muted/50 text-muted-foreground cursor-not-allowed'
                        }`}
                      >
                        {slot.time}
                      </button>
                    ))}
                  </div>
                </div>

                <Button 
                  variant="hero" 
                  className="w-full" 
                  size="lg"
                  onClick={handleBooking}
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  Book Appointment
                </Button>

                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1">
                    <Phone className="h-4 w-4 mr-2" />
                    Call
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Chat
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <EmergencyButton floating />
    </div>
  );
};

export default DoctorProfile;
