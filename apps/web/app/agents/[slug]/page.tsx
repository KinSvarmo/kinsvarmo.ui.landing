import { seededAgents } from "@kingsvarmo/shared";
import { Providers } from "@/lib/providers";
import { AgentRunClient } from "./AgentRunClient";

export function generateStaticParams() {
  return seededAgents.map((agent) => ({ slug: agent.slug }));
}

export default async function AgentRunPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <Providers>
      <AgentRunClient slug={slug} />
    </Providers>
  );
}
