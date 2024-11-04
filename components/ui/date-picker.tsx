"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

export function DatePicker({ title, DoB, setDoB }: { title: string, DoB: Date , setDoB: Function }) {
    const [date, setDate] = React.useState<Date>()

    const CurrentYear = new Date().getFullYear();
    const StartYear = CurrentYear - 70;
    const EndYear = CurrentYear - 20;

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant={"outline"}
                    className={cn(
                        "w-full block dark:border-green-800 text-left font-normal",
                        !date && "text-muted-foreground"
                    )}
                >
                    <CalendarIcon />
                    {<span>{date?.toDateString() || title}</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 dark:bg-primary dark:border-primary">
                <Calendar
                    fromYear={StartYear}
                    toYear={EndYear}
                    className={cn("text-green-600")}
                    mode="single"
                    selected={DoB}
                    onSelect={setDoB}
                    initialFocus
                />
            </PopoverContent>
        </Popover>
    )
}
