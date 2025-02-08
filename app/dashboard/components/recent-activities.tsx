import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const activities = [
  {
    action: "Applied to",
    company: "Google",
    position: "Software Engineer",
    date: "2 hours ago",
  },
  {
    action: "Interview scheduled with",
    company: "Amazon",
    position: "Frontend Developer",
    date: "1 day ago",
  },
  {
    action: "Received offer from",
    company: "Microsoft",
    position: "Full Stack Developer",
    date: "3 days ago",
  },
];

export default function RecentActivities() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activities</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {activities.map((activity, index) => (
            <li key={index} className="flex items-start space-x-2">
              <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-primary" />
              <div>
                <p className="text-sm">
                  <span className="font-medium">{activity.action}</span>{" "}
                  <span className="font-bold">{activity.company}</span>
                </p>
                <p className="text-xs text-muted-foreground">
                  {activity.position}
                </p>
                <p className="text-xs text-muted-foreground">{activity.date}</p>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
