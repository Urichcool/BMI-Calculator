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



export const BMISuggestFunc = (
  result: number
): "underweight" | "a healthy weight" | "overweight" | "obese" => {
  if (result < 18.5) {
    return "underweight";
  }
  if (result >= 18.5 && result < 24.9) {
    return "a healthy weight";
  }
  if (result >= 24.9 && result < 29.9) {
    return "overweight";
  }
  return "obese";
};



export const MetricIdeaMassFunc = (cm: number): string => {
  const downRange: string = ((18.5 * Math.pow(cm, 2)) / 10000).toFixed(1);
  const upRange: string = ((24.9 * Math.pow(cm, 2)) / 10000).toFixed(1);
  return `${downRange}kgs - ${upRange}kgs`;
};



export const ImperialIdeaMassFunc = (feet: number, inches: number): string => {
  const totalInches: number = feet * 12 + inches;
  const idealMinWeight: number = Math.floor(
    (18.5 * Math.pow(totalInches, 2)) / 703
  );
  const idealMaxWeight: number = Math.floor(
    (24.9 * Math.pow(totalInches, 2)) / 703
  );
  const minStone: number = Math.floor(idealMinWeight / 14);
  const minPounds: number = Math.floor(idealMinWeight % 14);
  const maxStone: number = Math.floor(idealMaxWeight / 14);
  const maxPounds: number = Math.floor(idealMaxWeight % 14);
  return `${minStone}st ${minPounds}lbs - ${maxStone}st ${maxPounds}lbs`;
};
