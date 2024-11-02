import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { DollarSign, Star, Briefcase, Camera, ExternalLink, Calendar, Clock, XCircle } from 'lucide-react'

export default function FreelancerDashboard() {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4 sm:p-6">
            <main className="max-w-7xl mx-auto">
                {/* Welcome Section */}
                <div className="mb-8">
                    <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Welcome back, Alex!</h1>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Here's what's happening with your account today.</p>
                </div>


                {/* Edit Profile Section */}
                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle>Edit Profile</CardTitle>
                        <CardDescription>Update your personal information and skills</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form className="space-y-4">
                            <div className="flex items-center space-x-4">
                                <Avatar className="w-20 h-20">
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>AL</AvatarFallback>
                                </Avatar>
                                <Button variant="outline" size="sm">
                                    <Camera className="mr-2 h-4 w-4" />
                                    Change Photo
                                </Button>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                                <div>
                                    <Label htmlFor="fullName">Full Name</Label>
                                    <Input id="fullName" defaultValue="Alex Lee" />
                                </div>
                                <div>
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" type="email" defaultValue="alex.lee@example.com" />
                                </div>
                                <div>
                                    <Label htmlFor="phone-number">Phone Number</Label>
                                    <Input id="phone-number" type="number" placeholder="+970**********" />
                                </div>
                                <div>
                                    <Label htmlFor="title">Professional Title</Label>
                                    <Input id="title" defaultValue="Full Stack Developer" />
                                </div>
                                <div>
                                    <Label htmlFor="hourlyRate">Hourly Rate ($)</Label>
                                    <Input id="hourlyRate" type="number" defaultValue="50" />
                                </div>
                                <div>
                                    <Label htmlFor="country">Country</Label>
                                    <Input id="country" type="text" defaultValue="Palestine" />
                                </div>
                            </div>
                            <div>
                                <Label htmlFor="bio">Bio</Label>
                                <Textarea id="bio" rows={4} defaultValue="Experienced full stack developer with a passion for creating efficient and scalable web applications..." />
                            </div>
                            <div>
                                <Label htmlFor="skills">Skills</Label>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    <Badge>React</Badge>
                                    <Badge>Node.js</Badge>
                                    <Badge>TypeScript</Badge>
                                    <Badge>MongoDB</Badge>
                                    <Button variant="outline" size="sm">+ Add Skill</Button>
                                </div>
                            </div>
                            <Button type="submit">Save Changes</Button>
                        </form>
                    </CardContent>
                </Card>

                {/* Dashboard Grid */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
                    {/* Earnings Overview */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Earnings</CardTitle>
                            <CardDescription>Your earnings this month</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">$1,234.56</div>
                            <Progress value={75} className="mt-2" />
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">75% of your monthly goal</p>
                        </CardContent>
                    </Card>

                    {/* Job Success Score */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Job Success Score</CardTitle>
                            <CardDescription>Based on your last 6 months</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center">
                                <Star className="h-5 w-5 text-yellow-400 mr-2" />
                                <span className="text-2xl font-bold">98%</span>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Excellent! Keep up the good work.</p>
                        </CardContent>
                    </Card>

                    {/* Profile Completeness */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Profile Completeness</CardTitle>
                            <CardDescription>Improve your chances of getting hired</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Progress value={90} className="mt-2" />
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Your profile is 90% complete</p>
                            <Button variant="link" className="mt-2 p-0">Complete your profile</Button>
                        </CardContent>
                    </Card>
                </div>

                {/* Jobs Grid */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
                    {/* Ongoing Jobs*/}
                    <Card>
                        <CardHeader>
                            <CardTitle>Ongoing Jobs</CardTitle>
                            <CardDescription>Your current active projects</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {[
                                    { title: "E-commerce Website Redesign", client: "FashionStore Inc.", progress: 60 },
                                    { title: "Mobile App Development", client: "TechStartup LLC", progress: 30 },
                                    { title: "Database Migration", client: "BigCorp Enterprises", progress: 80 },
                                ].map((job, index) => (
                                    <div key={index} className="flex items-center space-x-4">
                                        <div className="bg-blue-100 dark:bg-blue-800 rounded-full p-2">
                                            <Clock className="h-5 w-5 text-blue-600 dark:text-blue-300" />
                                        </div>
                                        <div className="flex-grow">
                                            <h3 className="font-semibold">{job.title}</h3>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">{job.client}</p>
                                            <Progress value={job.progress} className="mt-2" />
                                        </div>
                                        <Badge variant="outline">{job.progress}%</Badge>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                    {/* Canceled Jobs */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Canceled Jobs</CardTitle>
                            <CardDescription>Projects that were terminated before completion</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {[
                                    { title: "Website Maintenance", client: "LocalBiz Co.", date: "Canceled on Apr 15, 2023" },
                                    { title: "Logo Design", client: "StartupX", date: "Canceled on Feb 28, 2023" },
                                ].map((job, index) => (
                                    <div key={index} className="flex items-start space-x-4">
                                        <div className="bg-red-100 dark:bg-red-800 rounded-full p-2">
                                            <XCircle className="h-5 w-5 text-red-600 dark:text-red-300" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">{job.title}</h3>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">{job.client}</p>
                                            <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mt-1">
                                                <Calendar className="h-3 w-3 mr-1" />
                                                {job.date}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Previous Jobs */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Previous Jobs</CardTitle>
                            <CardDescription>Your work history</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {[
                                    { title: "E-commerce Website Development", client: "TechStore Inc.", date: "Jan 2023 - Mar 2023" },
                                    { title: "Mobile App UI Design", client: "FitnessPal", date: "Nov 2022 - Dec 2022" },
                                    { title: "Database Optimization", client: "DataCorp", date: "Aug 2022 - Oct 2022" },
                                ].map((job, index) => (
                                    <div key={index} className="flex items-start space-x-4">
                                        <div className="bg-green-100 dark:bg-green-800 rounded-full p-2">
                                            <Briefcase className="h-5 w-5 text-green-600 dark:text-green-300" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">{job.title}</h3>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">{job.client}</p>
                                            <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mt-1">
                                                <Calendar className="h-3 w-3 mr-1" />
                                                {job.date}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>


                {/* Work Gallery Section */}
                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle>Work Gallery</CardTitle>
                        <CardDescription>Showcase your best projects</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {[1, 2, 3].map((item) => (
                                <div key={item} className="relative group">
                                    <img
                                        src={`/placeholder.svg?height=200&width=300`}
                                        alt={`Project ${item}`}
                                        className="w-full h-48 object-cover rounded-lg"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                                        <Button variant="secondary" size="sm">
                                            <ExternalLink className="mr-2 h-4 w-4" />
                                            View Project
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <Button variant="outline" className="mt-4">Add New Project</Button>
                    </CardContent>
                </Card>

                {/* Previous Jobs Section */}
                {/* <Card className="mb-8">
                    <CardHeader>
                        <CardTitle>Previous Jobs</CardTitle>
                        <CardDescription>Your work history</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {[
                                { title: "E-commerce Website Development", client: "TechStore Inc.", date: "Jan 2023 - Mar 2023" },
                                { title: "Mobile App UI Design", client: "FitnessPal", date: "Nov 2022 - Dec 2022" },
                                { title: "Database Optimization", client: "DataCorp", date: "Aug 2022 - Oct 2022" },
                            ].map((job, index) => (
                                <div key={index} className="flex items-start space-x-4">
                                    <div className="bg-green-100 dark:bg-green-800 rounded-full p-2">
                                        <Briefcase className="h-5 w-5 text-green-600 dark:text-green-300" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">{job.title}</h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">{job.client}</p>
                                        <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mt-1">
                                            <Calendar className="h-3 w-3 mr-1" />
                                            {job.date}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card> */}

                {/* Job Recommendations */}
                <div>
                    <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">Recommended Jobs in 
                        <span className='text-green-600 font-semibold'> Web Development</span>
                    </h2>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {[1, 2, 3].map((job) => (
                            <Card key={job}>
                                <CardHeader>
                                    <CardTitle>Web Developer Needed for E-commerce Project</CardTitle>
                                    <CardDescription>Posted 2 hours ago</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-2">
                                        <DollarSign className="h-4 w-4 mr-1" />
                                        $50-$100/hour
                                    </div>
                                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-4">
                                        <Briefcase className="h-4 w-4 mr-1" />
                                        Intermediate ($$)
                                    </div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                                        We are looking for a skilled web developer to help build our new e-commerce platform...
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        <Badge variant="secondary">React</Badge>
                                        <Badge variant="secondary">Node.js</Badge>
                                        <Badge variant="secondary">MongoDB</Badge>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                    <div className="mt-6 text-center">
                        <Button variant="outline">View More Jobs</Button>
                    </div>
                </div>
            </main>
        </div>
    )
}