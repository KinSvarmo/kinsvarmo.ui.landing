import { JobStatusClient } from "./JobStatusClient";

export function generateStaticParams() {
  return [{ jobId: "demo" }];
}

export default async function JobStatusPage({
  params,
}: {
  params: Promise<{ jobId: string }>;
}) {
  const { jobId } = await params;

  return <JobStatusClient jobId={jobId} />;
}
