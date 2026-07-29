import { Heart, Shield, Clock, MapPin, Star, Users, Ambulance, Building2, Stethoscope, UserCheck, Database, Bell, Map } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import SearchBar from '@/components/SearchBar';
import DoctorCard from '@/components/DoctorCard';
import LabCard from '@/components/LabCard';
import EmergencyButton from '@/components/EmergencyButton';
import { Button } from '@/components/ui/button';
import { doctors, labs } from '@/data/mockData';

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Shield,
      title: 'Verified Providers',
      description: 'All doctors and labs are verified for quality care'
    },
    {
      icon: Clock,
      title: 'Instant Booking',
      description: 'Book appointments in seconds, not hours'
    },
    {
      icon: MapPin,
      title: 'Location Based',
      description: 'Find healthcare providers near you instantly'
    },
    {
      icon: Ambulance,
      title: 'Emergency Ready',
      description: 'One-tap SOS for immediate medical assistance'
    }
  ];

  const stats = [
    { value: '10,000+', label: 'Verified Doctors' },
    { value: '500+', label: 'Diagnostic Labs' },
    { value: '50,000+', label: 'Happy Patients' },
    { value: '24/7', label: 'Emergency Support' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-success/5" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-success/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="container mx-auto px-4 py-16 md:py-24 relative">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
              <Heart className="h-4 w-4" />
              Trusted by 50,000+ patients
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in-up">
              Find the Right Care.{' '}
              <span className="text-primary">Right Now.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-10 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Discover verified doctors, diagnostic labs, and get emergency assistance — all in one platform designed to save lives.
            </p>

            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <SearchBar onSearch={() => navigate('/dashboard')} />
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mt-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            {[
              { icon: Stethoscope, label: 'Find Doctors', href: '/dashboard' },
              { icon: Building2, label: 'CT/MRI Labs', href: '/dashboard?tab=labs' },
              { icon: Users, label: 'Specialists', href: '/dashboard' },
              { icon: Ambulance, label: 'Emergency', href: '/emergency', emergency: true }
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => navigate(item.href)}
                className={`flex flex-col items-center gap-2 p-4 rounded-xl transition-all hover:scale-105 ${
                  item.emergency 
                    ? 'bg-emergency/10 text-emergency hover:bg-emergency/20' 
                    : 'bg-card shadow-md hover:shadow-lg'
                }`}
              >
                <item.icon className="h-6 w-6" />
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y bg-muted/30">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</p>
                <p className="text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose CareConnect+?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We combine technology with healthcare to provide you the fastest, most reliable way to find medical care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={feature.title} 
                className="bg-card rounded-2xl p-6 shadow-md hover:shadow-lg transition-all animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Doctors */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Top Rated Doctors</h2>
              <p className="text-muted-foreground mt-1">Find the best specialists near you</p>
            </div>
            <Button variant="outline" onClick={() => navigate('/dashboard')}>
              View All
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {doctors.slice(0, 3).map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Labs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Diagnostic Labs</h2>
              <p className="text-muted-foreground mt-1">CT, MRI, Blood Tests and more</p>
            </div>
            <Button variant="outline" onClick={() => navigate('/dashboard?tab=labs')}>
              View All
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {labs.slice(0, 2).map((lab) => (
              <LabCard key={lab.id} lab={lab} />
            ))}
          </div>
        </div>
      </section>

      {/* About Project Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-success/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">About This Project</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              CareConnect+ is a comprehensive healthcare discovery and emergency response platform 
              designed to provide fast, reliable, and life-saving healthcare access to everyone.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 text-left">
              {[
                {
                  icon: UserCheck,
                  title: 'User Authentication',
                  description: 'Secure login/signup for patients to save appointments and medical history'
                },
                {
                  icon: Database,
                  title: 'Cloud Database',
                  description: 'Connected to Lovable Cloud to store real doctor and lab data with proper CRUD operations'
                },
                {
                  icon: Bell,
                  title: 'Real-time Notifications',
                  description: 'Toast alerts when appointment status changes or emergency updates occur'
                },
                {
                  icon: Map,
                  title: 'Google Maps Integration',
                  description: 'Location-based doctor/lab discovery and live ambulance tracking'
                }
              ].map((feature) => (
                <div key={feature.title} className="flex gap-4 p-4 bg-card rounded-xl shadow-sm">
                  <div className="w-10 h-10 rounded-lg gradient-hero flex items-center justify-center shrink-0">
                    <feature.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg gradient-hero flex items-center justify-center">
                <Heart className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-bold text-foreground">CareConnect+</span>
            </div>
            <p className="text-sm text-muted-foreground text-center">
              Saving lives through technology — Real-time emergency handling, live tracking, and instant notifications.
            </p>
          </div>
          <div className="border-t mt-6 pt-6 text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} CareConnect+. All rights reserved. Built with ❤️ for better healthcare access.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Emergency Button */}
      <EmergencyButton floating />
    </div>
  );
};

export default Index;
