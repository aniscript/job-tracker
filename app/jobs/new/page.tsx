"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewJobPage() {
  const router = useRouter();
  const [job, setJob] = useState({
    title: "",
    company: "",
    location: "",
    status: "Applied",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await fetch("/api/jobs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(job),
    });
    router.push("/jobs");
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add New Job</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Job Title"
          className="border p-2 w-full"
          onChange={(e) => setJob({ ...job, title: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Company"
          className="border p-2 w-full"
          onChange={(e) => setJob({ ...job, company: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Location (optional)"
          className="border p-2 w-full"
          onChange={(e) => setJob({ ...job, location: e.target.value })}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Save Job
        </button>
      </form>
    </div>
  );
}
