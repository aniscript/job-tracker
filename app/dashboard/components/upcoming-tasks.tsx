import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

const tasks = [
  { title: "Prepare for Google interview", date: "Tomorrow, 2:00 PM" },
  { title: "Follow up with Amazon recruiter", date: "Friday, 10:00 AM" },
  { title: "Update resume", date: "Next Monday" },
  { title: "Research Spotify company culture", date: "Next Wednesday" },
];

export default function UpcomingTasks() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Tasks</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {tasks.map((task, index) => (
            <li key={index} className="flex items-center space-x-2">
              <Checkbox id={`task-${index}`} />
              <div>
                <label
                  htmlFor={`task-${index}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {task.title}
                </label>
                <p className="text-xs text-muted-foreground">{task.date}</p>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
