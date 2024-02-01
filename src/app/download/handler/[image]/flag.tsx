// components/Flag.tsx
import React from "react";

interface FlagProps {
  name: string;
}

const flagEmojis: { [key: string]: string } = {
  // North America
  US: "🇺🇸",
  CA: "🇨🇦",
  MX: "🇲🇽",
  // European Union
  GB: "🇬🇧",
  DE: "🇩🇪",
  FR: "🇫🇷",
  ES: "🇪🇸",
  IT: "🇮🇹",
  NL: "🇳🇱",
  BE: "🇧🇪",
  PT: "🇵🇹",
  SE: "🇸🇪",
  DK: "🇩🇰",
  AT: "🇦🇹",
  FI: "🇫🇮",
  IE: "🇮🇪",
  GR: "🇬🇷",
  LU: "🇱🇺",
  CY: "🇨🇾",
  EE: "🇪🇪",
  SK: "🇸🇰",
  SI: "🇸🇮",
  LT: "🇱🇹",
  LV: "🇱🇻",
  MT: "🇲🇹",
  PL: "🇵🇱",
  CZ: "🇨🇿",
  HU: "🇭🇺",
  HR: "🇭🇷",
  RO: "🇷🇴",
  BG: "🇧🇬",
  // South America
  BR: "🇧🇷",
  AR: "🇦🇷",
  CO: "🇨🇴",
  PE: "🇵🇪",
  VE: "🇻🇪",
  CL: "🇨🇱",
  EC: "🇪🇨",
  BO: "🇧🇴",
  PY: "🇵🇾",
  UY: "🇺🇾",
  GY: "🇬🇾",
  SR: "🇸🇷",
  GF: "🇬🇫",
  // Africa
  ZA: "🇿🇦",
  EG: "🇪🇬",
  NG: "🇳🇬",
  ET: "🇪🇹",
  KE: "🇰🇪",
  DZ: "🇩🇿",
  SD: "🇸🇩",
  GH: "🇬🇭",
  TN: "🇹🇳",
  CI: "🇨🇮",
  CM: "🇨🇲",
  MG: "🇲🇬",
  MA: "🇲🇦",
  MZ: "🇲🇿",
  CF: "🇨🇫",
  UG: "🇺🇬",
  RW: "🇷🇼",
  ZM: "🇿🇲",
  AO: "🇦🇴",
  SN: "🇸🇳",
  MW: "🇲🇼",
  MR: "🇲🇷",
  LR: "🇱🇷",
  BI: "🇧🇮",
  BJ: "🇧🇯",
  NE: "🇳🇪",
  TG: "🇹🇬",
  LS: "🇱🇸",
  GM: "🇬🇲",
  DJ: "🇩🇯",
  // Asia
  CN: "🇨🇳",
  IN: "🇮🇳",
  ID: "🇮🇩",
  PK: "🇵🇰",
  BD: "🇧🇩",
  JP: "🇯🇵",
  PH: "🇵🇭",
  VN: "🇻🇳",
  TR: "🇹🇷",
  IR: "🇮🇷",
  TH: "🇹🇭",
  MM: "🇲🇲",
  KR: "🇰🇷",
  IQ: "🇮🇶",
  AF: "🇦🇫",
  SA: "🇸🇦",
  UZ: "🇺🇿",
  MY: "🇲🇾",
  KH: "🇰🇭",
  LK: "🇱🇰",
  SY: "🇸🇾",
  NP: "🇳🇵",
  YE: "🇾🇪",
  KP: "🇰🇵",
  JO: "🇯🇴",
  LA: "🇱🇦",
  KG: "🇰🇬",
  TJ: "🇹🇯",
  TM: "🇹🇲",
  BT: "🇧🇹",
  KW: "🇰🇼",
  QA: "🇶🇦",
  AE: "🇦🇪",
  OM: "🇴🇲",
  // Oceania
  AU: "🇦🇺",
  NZ: "🇳🇿",
  FJ: "🇫🇯",
  PG: "🇵🇬",
  SB: "🇸🇧",
  WS: "🇼🇸",
  KI: "🇰🇮",
  TV: "🇹🇻",
  TO: "🇹🇴",
  VU: "🇻🇺",
  FM: "🇫🇲",
  MH: "🇲🇭",
  NR: "🇳🇷",
  // Add more country codes and corresponding emojis as needed
};

const Flag: React.FC<FlagProps> = ({ name }) => {
  const emoji = flagEmojis[name];
  if (!emoji) {
    return null; // handle unknown country codes gracefully
  }
  return <span>{emoji}</span>;
};

export default Flag;
