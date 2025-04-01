"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Circle } from "lucide-react"

const activities = [
  {
    id: 1,
    type: "purchase",
    description: "New order #1234 from John Doe",
    timestamp: "2 minutes ago",
    status: "success",
  },
  {
    id: 2,
    type: "user",
    description: "New user registration: sarah@example.com",
    timestamp: "5 minutes ago",
    status: "info",
  },
  {
    id: 3,
    type: "system",
    description: "System update completed",
    timestamp: "10 minutes ago",
    status: "warning",
  },
  {
    id: 4,
    type: "purchase",
    description: "New order #1235 from Jane Smith",
    timestamp: "15 minutes ago",
    status: "success",
  },
  {
    id: 5,
    type: "alert",
    description: "High server load detected",
    timestamp: "20 minutes ago",
    status: "error",
  },
]

const statusColors = {
  success: "text-green-500",
  error: "text-red-500",
  warning: "text-yellow-500",
  info: "text-blue-500",
}

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-4">
            {activities.map((activity) => (
              <div
                key={activity.id}
                className="flex items-start space-x-4 border-b border-border pb-4 last:border-0"
              >
                <Circle
                  className={`h-2 w-2 mt-2 ${
                    statusColors[activity.status as keyof typeof statusColors]
                  }`}
                />
                <div className="space-y-1">
                  <p className="text-sm">{activity.description}</p>
                  <p className="text-xs text-muted-foreground">
                    {activity.timestamp}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}