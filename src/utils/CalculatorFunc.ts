import { log } from "console";

export const metricBMIFunc = (height: string, weight: string): number => {
  const normalisedHeight: number = Number(
    `${height[0]}.${height[1]}${height[2]}`
  );
  const normalisedWeight: number = Number(weight);
  return Number(
    (normalisedWeight / (normalisedHeight * normalisedHeight)).toFixed(1)
  );
};

export const imperialBMIFunc = (
  stone: number,
  pounds: number,
  feet: number,
  inches: number
): number => {
  const imperialCalc =
    ((stone * 14 + pounds) / ((feet * 12 + inches) * (feet * 12 + inches))) *
    703;
  if (Number.isNaN(imperialCalc)) {
    return 0;
  }
  return Number(imperialCalc.toFixed(1));
};
