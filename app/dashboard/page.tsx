import type { Metadata } from "next";
import DashboardHeader from "./components/dashboard-header";
import StatsWidget from "./components/stats-widget";
import RecentActivities from "./components/recent-activities";
import UpcomingTasks from "./components/upcoming-tasks";
import ApplicationsChart from "./components/applications-chart";
import { AddJobModal } from "./components/add-job-modal";

export const metadata: Metadata = {
  title: "Dashboard | JobTrackr",
  description: "Manage your job applications and track your progress",
};

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-background">
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-muted/50">
          <div className="container mx-auto px-6 py-8">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-semibold">Dashboard</h1>
              <AddJobModal />
            </div>
            <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
              <StatsWidget title="Total Applications" value="42" />
              <StatsWidget title="Interviews Scheduled" value="5" />
              <StatsWidget title="Offers Received" value="2" />
              <StatsWidget title="Application Success Rate" value="12%" />
            </div>
            <div className="grid gap-6 mb-8 md:grid-cols-2">
              <ApplicationsChart />
              <RecentActivities />
            </div>
            <div className="grid gap-6 mb-8 md:grid-cols-2">
              <UpcomingTasks />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
