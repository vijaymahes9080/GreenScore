/**
 * Carbon Credit & Cryptographic Proof-of-Impact Engine
 */

export function generateCryptoHash() {
  const chars = '0123456789abcdef';
  let hash = '0x7f';
  for (let i = 0; i < 32; i++) {
    hash += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return hash;
}

export const INITIAL_CARBON_CREDITS = [
  {
    id: "CC-2026-8801",
    projectName: "Verra Certified Solar Offset Array #42",
    tonnage: "50 Tons CO2e",
    standard: "Verra VCS Standard",
    hash: "0x7f9a8b1c4e2d3f5a6b7c8d9e0f1a2b3c",
    status: "Verified & Minted",
    mintedDate: "2026-08-20",
    valueUsd: "$750.00"
  },
  {
    id: "CC-2026-8802",
    projectName: "Gold Standard Mangrove Reforestation",
    tonnage: "25 Tons CO2e",
    standard: "Gold Standard UN SDG",
    hash: "0x7f3c2b1a0f9e8d7c6b5a4f3e2d1c0b9a",
    status: "Verified & Minted",
    mintedDate: "2026-08-18",
    valueUsd: "$425.00"
  }
];
