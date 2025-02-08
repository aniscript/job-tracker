import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { title, company, location, status, appliedDate } = await req.json();

    const job = await prisma.job.create({
      data: { title, company, location, status, appliedDate },
    });

    return NextResponse.json(job, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: `Failed to create job: ${error}` },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const jobs = await prisma.job.findMany();
    return NextResponse.json(jobs, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch jobs" },
      { status: 500 }
    );
  }
}
