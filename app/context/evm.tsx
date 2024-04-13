import { getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'
import { defineChain } from 'viem'
import { WagmiProvider } from 'wagmi'

export const sepolia = defineChain({
  id: 11_155_111,
  name: 'Sepolia',
  nativeCurrency: { name: 'Sepolia Ether', symbol: 'SEP', decimals: 18 },
  rpcUrls: {
    default: {
      http: ['https://1rpc.io/sepolia'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Etherscan',
      url: 'https://sepolia.etherscan.io',
    },
  },
  contracts: {
    multicall3: {
      address: '0xca11bde05977b3631167028862be2a173976ca11',
      blockCreated: 751532,
    },
    ensRegistry: { address: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e' },
    ensUniversalResolver: {
      address: '0x21B000Fd62a880b2125A61e36a284BB757b76025',
      blockCreated: 3914906,
    },
  },
  testnet: true,
})

const config = getDefaultConfig({
  appName: 'zkt-swap-hook',
  projectId: 'f18c88f1b8f4a066d3b705c6b13b71a8',
  chains: [sepolia],
  ssr: true,
})

const queryClient = new QueryClient()

export const EvmProvider = ({ children }: { children: ReactNode }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider locale="en-US">{children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
