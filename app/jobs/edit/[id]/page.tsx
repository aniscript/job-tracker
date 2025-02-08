"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";

export default function EditJobPage() {
  const router = useRouter();
  const { id } = useParams();
  const [job, setJob] = useState({
    title: "",
    company: "",
    location: "",
    status: "Applied",
  });

  useEffect(() => {
    async function fetchJob() {
      const res = await fetch(`/api/jobs/${id}`);
      const data = await res.json();
      setJob(data);
    }
    fetchJob();
  }, [id]);

  async function handleUpdate(e: React.FormEvent) {
    e.preventDefault();
    await fetch(`/api/jobs/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(job),
    });
    router.push("/jobs");
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Edit Job</h1>
      <form onSubmit={handleUpdate} className="space-y-4">
        <input
          type="text"
          value={job.title}
          className="border p-2 w-full"
          onChange={(e) => setJob({ ...job, title: e.target.value })}
          required
        />
        <input
          type="text"
          value={job.company}
          className="border p-2 w-full"
          onChange={(e) => setJob({ ...job, company: e.target.value })}
          required
        />
        <input
          type="text"
          value={job.location}
          className="border p-2 w-full"
          onChange={(e) => setJob({ ...job, location: e.target.value })}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Update Job
        </button>
      </form>
    </div>
  );
}
