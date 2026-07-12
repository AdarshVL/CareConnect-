import { useState } from 'react';
import { 
  Users, Building2, AlertTriangle, CheckCircle2, XCircle, Clock,
  Search, Filter, MoreHorizontal, BadgeCheck, Eye, Trash2
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { toast } from '@/hooks/use-toast';

const AdminDashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const stats = [
    { label: 'Total Doctors', value: 1247, icon: Users, change: '+12 this week', color: 'primary' },
    { label: 'Total Labs', value: 89, icon: Building2, change: '+3 this week', color: 'success' },
    { label: 'Active Emergencies', value: 3, icon: AlertTriangle, change: 'Real-time', color: 'emergency' },
    { label: 'Pending Verifications', value: 24, icon: Clock, change: 'Needs attention', color: 'warning' },
  ];

  const pendingVerifications = [
    { id: 1, name: 'Dr. Sanjay Gupta', type: 'Doctor', speciality: 'Orthopedic', submitted: '2 hours ago' },
    { id: 2, name: 'MedLab Diagnostics', type: 'Lab', speciality: 'Multi-specialty', submitted: '5 hours ago' },
    { id: 3, name: 'Dr. Neha Verma', type: 'Doctor', speciality: 'Dermatologist', submitted: '1 day ago' },
    { id: 4, name: 'HealthFirst Labs', type: 'Lab', speciality: 'Blood Tests', submitted: '2 days ago' },
  ];

  const emergencyLogs = [
    { id: 1, user: 'Rahul Verma', type: 'Cardiac', status: 'En Route', time: '2:30 PM', ambulance: 'AMB-2847' },
    { id: 2, user: 'Priya Singh', type: 'Accident', status: 'Reached Hospital', time: '1:45 PM', ambulance: 'AMB-1923' },
    { id: 3, user: 'Amit Kumar', type: 'Breathing', status: 'Dispatched', time: '2:28 PM', ambulance: 'AMB-3456' },
  ];

  const recentFeedback = [
    { id: 1, user: 'Meera R.', doctor: 'Dr. Priya Sharma', rating: 5, comment: 'Excellent care!', time: '1 hour ago' },
    { id: 2, user: 'Saurabh K.', doctor: 'Dr. Rajesh Kumar', rating: 4, comment: 'Good experience', time: '3 hours ago' },
    { id: 3, user: 'Anita P.', lab: 'Dr. Lal PathLabs', rating: 5, comment: 'Quick and professional', time: '5 hours ago' },
  ];

  const handleApprove = (id: number, name: string) => {
    toast({
      title: 'Verification Approved',
      description: `${name} has been verified successfully.`,
    });
  };

  const handleReject = (id: number, name: string) => {
    toast({
      title: 'Verification Rejected',
      description: `${name}'s application has been rejected.`,
      variant: 'destructive',
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage doctors, labs, and monitor emergencies</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {stats.map((stat) => (
            <Card key={stat.label} className="border-0 shadow-md">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    stat.color === 'primary' ? 'bg-primary/10 text-primary' :
                    stat.color === 'success' ? 'bg-success/10 text-success' :
                    stat.color === 'emergency' ? 'bg-emergency/10 text-emergency' :
                    'bg-warning/10 text-warning'
                  }`}>
                    <stat.icon className="h-5 w-5" />
                  </div>
                  {stat.color === 'emergency' && (
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emergency opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emergency"></span>
                    </span>
                  )}
                </div>
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className={`text-xs mt-1 ${
                  stat.color === 'emergency' ? 'text-emergency' : 'text-muted-foreground'
                }`}>
                  {stat.change}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <Tabs defaultValue="verifications">
          <TabsList className="mb-6">
            <TabsTrigger value="verifications">Pending Verifications</TabsTrigger>
            <TabsTrigger value="emergencies">Emergency Logs</TabsTrigger>
            <TabsTrigger value="feedback">User Feedback</TabsTrigger>
          </TabsList>

          {/* Pending Verifications */}
          <TabsContent value="verifications">
            <Card className="border-0 shadow-md">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Pending Verifications</CardTitle>
                <div className="relative w-64">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search..." 
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Speciality</TableHead>
                      <TableHead>Submitted</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pendingVerifications.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.name}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{item.type}</Badge>
                        </TableCell>
                        <TableCell>{item.speciality}</TableCell>
                        <TableCell className="text-muted-foreground">{item.submitted}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex items-center justify-end gap-2">
                            <Button 
                              variant="success" 
                              size="sm"
                              onClick={() => handleApprove(item.id, item.name)}
                            >
                              <CheckCircle2 className="h-4 w-4 mr-1" />
                              Approve
                            </Button>
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => handleReject(item.id, item.name)}
                            >
                              <XCircle className="h-4 w-4 mr-1" />
                              Reject
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Emergency Logs */}
          <TabsContent value="emergencies">
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emergency opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emergency"></span>
                  </span>
                  Live Emergency Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Time</TableHead>
                      <TableHead>Ambulance</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {emergencyLogs.map((log) => (
                      <TableRow key={log.id}>
                        <TableCell className="font-medium">{log.user}</TableCell>
                        <TableCell>
                          <Badge 
                            variant="outline" 
                            className={log.type === 'Cardiac' ? 'border-emergency text-emergency' : ''}
                          >
                            {log.type}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge 
                            className={
                              log.status === 'En Route' ? 'bg-warning text-warning-foreground' :
                              log.status === 'Reached Hospital' ? 'bg-success text-success-foreground' :
                              'bg-primary text-primary-foreground'
                            }
                          >
                            {log.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{log.time}</TableCell>
                        <TableCell className="font-mono text-sm">{log.ambulance}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* User Feedback */}
          <TabsContent value="feedback">
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle>Recent Feedback</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentFeedback.map((feedback) => (
                    <div key={feedback.id} className="flex items-start justify-between p-4 bg-muted/30 rounded-lg">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-sm font-medium text-primary">{feedback.user[0]}</span>
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{feedback.user}</span>
                            <span className="text-muted-foreground">→</span>
                            <span className="text-sm">{feedback.doctor || feedback.lab}</span>
                          </div>
                          <div className="flex items-center gap-1 my-1">
                            {Array.from({ length: feedback.rating }).map((_, i) => (
                              <span key={i} className="text-warning">★</span>
                            ))}
                          </div>
                          <p className="text-sm text-muted-foreground">{feedback.comment}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground">{feedback.time}</span>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Eye className="h-4 w-4 mr-2" />
                              View Details
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive">
                              <Trash2 className="h-4 w-4 mr-2" />
                              Remove
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
