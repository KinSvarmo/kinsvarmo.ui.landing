import { createConfig, http } from "wagmi";
import { injected } from "wagmi/connectors";
import { ogTestnet } from "./chain";

export const wagmiConfig = createConfig({
  chains: [ogTestnet],
  connectors: [injected()],
  ssr: true,
  transports: {
    [ogTestnet.id]: http(),
  },
});

declare module "wagmi" {
  interface Register {
    config: typeof wagmiConfig;
  }
}
