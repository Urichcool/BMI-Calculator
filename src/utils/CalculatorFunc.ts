export const metricBMIFunc = (cm: number, kg: number): number => {
  const metricCalc: number = kg / Math.pow(cm / 100, 2);
  if (Number.isNaN(metricCalc) || !Number.isFinite(metricCalc)) {
    return 0;
  }
  return Number(metricCalc.toFixed(1));
};

export const imperialBMIFunc = (
  stone: number,
  pounds: number,
  feet: number,
  inches: number
): number => {
  const imperialCalc: number =
    ((stone * 14 + pounds) / Math.pow(feet * 12 + inches, 2)) * 703;
  if (Number.isNaN(imperialCalc) || !Number.isFinite(imperialCalc)) {
    return 0;
  }
  return Number(imperialCalc.toFixed(1));
};
