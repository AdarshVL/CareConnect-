export interface Doctor {
  id: string;
  name: string;
  speciality: string;
  fees: number;
  verified: boolean;
  available: boolean;
  location: { lat: number; lng: number; address: string };
  rating: number;
  reviewCount: number;
  experience: number;
  image: string;
  nextAvailable: string;
}

export interface Lab {
  id: string;
  name: string;
  tests: string[];
  priceRange: { min: number; max: number };
  homePickup: boolean;
  verified: boolean;
  location: { lat: number; lng: number; address: string };
  rating: number;
  reviewCount: number;
  image: string;
}

export interface Emergency {
  id: string;
  userName: string;
  type: 'Cardiac' | 'Accident' | 'Stroke' | 'Breathing' | 'Other';
  status: 'Request Sent' | 'Ambulance Dispatched' | 'En Route' | 'Reached Hospital';
  location: { lat: number; lng: number; address: string };
  ambulanceAssigned: string | null;
  estimatedTime: number;
  timestamp: Date;
}

export interface User {
  id: string;
  name: string;
  role: 'Patient' | 'Doctor' | 'Admin';
  phone: string;
  location: { lat: number; lng: number };
  email: string;
}

export const doctors: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Priya Sharma',
    speciality: 'Cardiologist',
    fees: 800,
    verified: true,
    available: true,
    location: { lat: 28.6139, lng: 77.2090, address: 'Apollo Hospital, Delhi' },
    rating: 4.9,
    reviewCount: 234,
    experience: 15,
    image: '/placeholder.svg',
    nextAvailable: 'Today, 4:00 PM'
  },
  {
    id: '2',
    name: 'Dr. Rajesh Kumar',
    speciality: 'Neurologist',
    fees: 1000,
    verified: true,
    available: true,
    location: { lat: 28.6280, lng: 77.2189, address: 'Max Hospital, Saket' },
    rating: 4.8,
    reviewCount: 189,
    experience: 12,
    image: '/placeholder.svg',
    nextAvailable: 'Tomorrow, 10:00 AM'
  },
  {
    id: '3',
    name: 'Dr. Ananya Patel',
    speciality: 'Orthopedic',
    fees: 700,
    verified: true,
    available: false,
    location: { lat: 28.6562, lng: 77.2410, address: 'Fortis Hospital, Noida' },
    rating: 4.7,
    reviewCount: 156,
    experience: 10,
    image: '/placeholder.svg',
    nextAvailable: 'Dec 28, 11:00 AM'
  },
  {
    id: '4',
    name: 'Dr. Vikram Singh',
    speciality: 'General Physician',
    fees: 500,
    verified: true,
    available: true,
    location: { lat: 28.5355, lng: 77.2410, address: 'Care Clinic, Gurgaon' },
    rating: 4.6,
    reviewCount: 312,
    experience: 8,
    image: '/placeholder.svg',
    nextAvailable: 'Today, 6:00 PM'
  },
  {
    id: '5',
    name: 'Dr. Meera Reddy',
    speciality: 'Pediatrician',
    fees: 600,
    verified: true,
    available: true,
    location: { lat: 28.6129, lng: 77.2295, address: 'Rainbow Children Hospital' },
    rating: 4.9,
    reviewCount: 278,
    experience: 14,
    image: '/placeholder.svg',
    nextAvailable: 'Today, 5:30 PM'
  },
  {
    id: '6',
    name: 'Dr. Arjun Nair',
    speciality: 'Dermatologist',
    fees: 750,
    verified: false,
    available: true,
    location: { lat: 28.6448, lng: 77.2167, address: 'Skin Care Clinic, CP' },
    rating: 4.4,
    reviewCount: 98,
    experience: 6,
    image: '/placeholder.svg',
    nextAvailable: 'Tomorrow, 2:00 PM'
  }
];

export const labs: Lab[] = [
  {
    id: '1',
    name: 'Dr. Lal PathLabs',
    tests: ['CT Scan', 'MRI', 'Blood Test', 'X-Ray', 'Ultrasound'],
    priceRange: { min: 500, max: 15000 },
    homePickup: true,
    verified: true,
    location: { lat: 28.6139, lng: 77.2090, address: 'Connaught Place, Delhi' },
    rating: 4.8,
    reviewCount: 1234,
    image: '/placeholder.svg'
  },
  {
    id: '2',
    name: 'Metropolis Healthcare',
    tests: ['CT Scan', 'MRI', 'PET Scan', 'Blood Test'],
    priceRange: { min: 600, max: 18000 },
    homePickup: true,
    verified: true,
    location: { lat: 28.6280, lng: 77.2189, address: 'Nehru Place, Delhi' },
    rating: 4.7,
    reviewCount: 892,
    image: '/placeholder.svg'
  },
  {
    id: '3',
    name: 'SRL Diagnostics',
    tests: ['MRI', 'Blood Test', 'Thyroid Panel', 'Diabetes Panel'],
    priceRange: { min: 400, max: 12000 },
    homePickup: true,
    verified: true,
    location: { lat: 28.6562, lng: 77.2410, address: 'Noida Sector 18' },
    rating: 4.6,
    reviewCount: 567,
    image: '/placeholder.svg'
  },
  {
    id: '4',
    name: 'Thyrocare',
    tests: ['Blood Test', 'Thyroid Panel', 'Full Body Checkup'],
    priceRange: { min: 300, max: 8000 },
    homePickup: true,
    verified: true,
    location: { lat: 28.5355, lng: 77.2410, address: 'Gurgaon Sector 29' },
    rating: 4.5,
    reviewCount: 2341,
    image: '/placeholder.svg'
  }
];

export const emergencyStatuses: Emergency[] = [
  {
    id: '1',
    userName: 'Rahul Verma',
    type: 'Cardiac',
    status: 'En Route',
    location: { lat: 28.6139, lng: 77.2090, address: '45, Rajouri Garden, Delhi' },
    ambulanceAssigned: 'AMB-2847',
    estimatedTime: 8,
    timestamp: new Date()
  }
];

export const specialities = [
  'General Physician',
  'Cardiologist',
  'Neurologist',
  'Orthopedic',
  'Pediatrician',
  'Dermatologist',
  'Gynecologist',
  'ENT Specialist',
  'Ophthalmologist',
  'Psychiatrist'
];

export const emergencyTypes = [
  { type: 'Cardiac', icon: '❤️', color: 'emergency' },
  { type: 'Accident', icon: '🚗', color: 'warning' },
  { type: 'Stroke', icon: '🧠', color: 'emergency' },
  { type: 'Breathing', icon: '🫁', color: 'primary' },
  { type: 'Other', icon: '🏥', color: 'muted' }
];
