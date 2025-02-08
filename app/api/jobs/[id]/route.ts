import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const { title, company, location, status, appliedDate } = await req.json();

    const updatedJob = await prisma.job.update({
      where: { id },
      data: { title, company, location, status, appliedDate },
    });

    return NextResponse.json(updatedJob, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update job" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    await prisma.job.delete({
      where: { id },
    });

    return NextResponse.json({ message: "Job deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete job" },
      { status: 500 }
    );
  }
}
