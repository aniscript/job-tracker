import { CheckCircle, BarChart2, Calendar, Bell } from "lucide-react";

const features = [
  {
    icon: <CheckCircle className="h-6 w-6 text-primary" />,
    title: "Application Tracking",
    description: "Keep track of all your job applications in one place.",
  },
  {
    icon: <BarChart2 className="h-6 w-6 text-primary" />,
    title: "Analytics",
    description: "Get insights into your job search progress and success rate.",
  },
  {
    icon: <Calendar className="h-6 w-6 text-primary" />,
    title: "Interview Scheduler",
    description: "Schedule and manage your interviews effortlessly.",
  },
  {
    icon: <Bell className="h-6 w-6 text-primary" />,
    title: "Reminders",
    description: "Never miss a deadline with customizable reminders.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-card p-6 rounded-lg shadow-md">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
