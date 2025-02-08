"use client";

import { useEffect, useState } from "react";

interface Job {
  id: string;
  title: string;
  company: string;
  location?: string;
  status: string;
  appliedDate: string;
}

export default function JobList() {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    async function fetchJobs() {
      const res = await fetch("/api/jobs");
      const data = await res.json();
      setJobs(data);
    }
    fetchJobs();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Job Applications</h1>
      <a
        href="/jobs/new"
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4 inline-block"
      >
        Add New Job
      </a>
      <div className="space-y-4">
        {jobs.map((job) => (
          <div key={job.id} className="p-4 border rounded shadow">
            <h2 className="text-lg font-semibold">{job.title}</h2>
            <p className="text-gray-600">
              {job.company} - {job.location || "Remote"}
            </p>
            <p className="text-sm text-gray-500">Status: {job.status}</p>
            <div className="mt-2 space-x-2">
              <a href={`/jobs/edit/${job.id}`} className="text-blue-500">
                Edit
              </a>
              <button
                onClick={async () => {
                  await fetch(`/api/jobs/${job.id}`, { method: "DELETE" });
                  setJobs(jobs.filter((j) => j.id !== job.id));
                }}
                className="text-red-500"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
