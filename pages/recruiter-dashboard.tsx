import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Briefcase,
  Users,
  DollarSign,
  Star,
  Clock,
  CheckCircle,
  Search,
  Filter
} from 'lucide-react'
import EditProfile from '@/components/editProfileSection'

export default function RecruiterDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      <main className="max-w-7xl mx-auto">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Welcome back, Sarah!</h1>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Here's an overview of your recruitment activities.</p>
        </div>

        {/* Edit Profile */}
        <EditProfile />

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Job Postings</CardTitle>
              <Briefcase className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">+2 from last week</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Applicants</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">248</div>
              <p className="text-xs text-muted-foreground">+18% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Hired This Month</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">+2 from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg. Time to Hire</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">6 days</div>
              <p className="text-xs text-muted-foreground">-1 day from last month</p>
            </CardContent>
          </Card>
        </div>


        {/* Active Job Postings */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Active Job Postings</CardTitle>
            <CardDescription>Manage your current job listings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { title: "Senior React Developer", applicants: 45, daysLeft: 7 },
                { title: "UX/UI Designer", applicants: 32, daysLeft: 12 },
                { title: "DevOps Engineer", applicants: 18, daysLeft: 5 },
              ].map((job, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">{job.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{job.applicants} applicants</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary">{job.daysLeft} days left</Badge>
                    <Button variant="outline" size="sm">View</Button>
                  </div>
                </div>
              ))}
            </div>
            <Button className="w-full mt-4">Post New Job</Button>
          </CardContent>
        </Card>

        {/* Recent Applicants */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Recent Applicants</CardTitle>
            <CardDescription>Review and manage recent job applications</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Alex Johnson", role: "Senior React Developer", experience: "8 years", rating: 4.8 },
                { name: "Emily Chen", role: "UX/UI Designer", experience: "5 years", rating: 4.6 },
                { name: "Michael Brown", role: "DevOps Engineer", experience: "6 years", rating: 4.9 },
              ].map((applicant, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <Avatar className="w-10 h-10">
                    <AvatarFallback>{applicant.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="flex-grow">
                    <h3 className="font-semibold">{applicant.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{applicant.role} • {applicant.experience}</p>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    <span>{applicant.rating}</span>
                  </div>
                  <Button variant="outline" size="sm">Review</Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Hiring Pipeline */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Hiring Pipeline</CardTitle>
            <CardDescription>Track candidates through the hiring process</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { stage: "Application Review", count: 52 },
                { stage: "Phone Screening", count: 18 },
                { stage: "Technical Interview", count: 10 },
                { stage: "Final Interview", count: 5 },
                { stage: "Offer Stage", count: 2 },
              ].map((stage, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">{stage.stage}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{stage.count} candidates</p>
                  </div>
                  <Progress value={(stage.count / 52) * 100} className="w-1/3" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Search and Filter */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Search Candidates</CardTitle>
            <CardDescription>Find the perfect match for your job openings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-2">
              <div className="flex-grow">
                <Label htmlFor="search" className="sr-only">Search</Label>
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input id="search" placeholder="Search by skill, job title, or keyword" className="pl-8" />
                </div>
              </div>
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" />
                Filters
              </Button>
              <Button>Search</Button>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Frequently used recruiter tools</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                <Briefcase className="h-6 w-6 mb-2" />
                Create Job Posting
              </Button>
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                <Users className="h-6 w-6 mb-2" />
                Talent Pool
              </Button>
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                <Star className="h-6 w-6 mb-2" />
                Review Applicants
              </Button>
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                <DollarSign className="h-6 w-6 mb-2" />
                Manage Offers
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}