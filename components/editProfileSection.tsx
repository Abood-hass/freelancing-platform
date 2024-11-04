import React, { Component, MouseEvent } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Camera } from 'lucide-react'
import { userDataStore } from '@/context/UserData'



export default class EditProfile extends Component {

    UserData;

    fullNameRef = React.createRef<HTMLInputElement>();
    emailRef = React.createRef<HTMLInputElement>();
    phoneNumberRef = React.createRef<HTMLInputElement>();
    titleRef = React.createRef<HTMLInputElement>();
    hourlyRateRef = React.createRef<HTMLInputElement>();
    countryRef = React.createRef<HTMLInputElement>();
    bioRef = React.createRef<HTMLTextAreaElement>();



    constructor(props: any) {
        super(props)
        this.UserData = userDataStore.getUserData();
    }

    EditUserData(event: MouseEvent): void {

    }

    render() {

        return (
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
                                <Input id="fullName"
                                    defaultValue={this.UserData.FirstName + " " + this.UserData.LastName} />
                            </div>
                            <div>
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" defaultValue={this.UserData.Email} />
                            </div>
                            <div>
                                <Label htmlFor="phone-number">Phone Number</Label>
                                <Input id="phone-number" type="number" defaultValue={this.UserData.PhoneNumber} placeholder="+970**********" />
                            </div>
                            <div>
                                <Label htmlFor="title">Professional Title</Label>
                                <Input id="title" defaultValue={this.UserData.ProTitle} />
                            </div>
                            <div>
                                <Label htmlFor="hourlyRate">Hourly Rate ($)</Label>
                                <Input id="hourlyRate" type="number" defaultValue={this.UserData.HourRate} />
                            </div>
                            <div>
                                <Label htmlFor="country">Country</Label>
                                <Input id="country" type="text" defaultValue={this.UserData.Country} />
                            </div>
                        </div>
                        <div>
                            <Label htmlFor="bio">Bio</Label>
                            <Textarea id="bio" rows={4} defaultValue="Experienced full stack developer with a passion for creating efficient and scalable web applications..." />
                        </div>
                        {/* <div>
                            <Label htmlFor="skills">Skills</Label>
                            <div className="flex flex-wrap gap-2 mt-2">
                                <Badge>React</Badge>
                                <Badge>Node.js</Badge>
                                <Badge>TypeScript</Badge>
                                <Badge>MongoDB</Badge>
                                <Button variant="outline" size="sm">+ Add Skill</Button>
                            </div>
                        </div> */}
                        <Button onClick={this.EditUserData}>Save Changes</Button>
                    </form>
                </CardContent>
            </Card>
        )
    }
}
