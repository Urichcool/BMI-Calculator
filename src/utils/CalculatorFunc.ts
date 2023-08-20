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

export const BMIMeaningFunction = (result: number): string => {
  if (result === 0) {
    return "";
  }
  if (result < 18.5) {
    return "A BMI of less than 18.5 indicates that you are underweight, so you may need to put on some weight. You are recommended to ask your doctor or a dietitian for advice.";
  }
  if (result >= 18.5 && result < 24.9) {
    return "A BMI of 18.5-24.9 indicates that you are at a healthy weight for your height. By maintaining a healthy weight, you lower your risk of developing serious health problems.";
  }
  if (result >= 24.9 && result < 29.9) {
    return "A BMI of 25-29.9 indicates that you are slightly overweight. You may be advised to lose some weight for health reasons. You are recommended to talk to your doctor or a dietitian for advice.";
  }
  return "A BMI of over 30 indicates that you are heavily overweight. Your health may be at risk if you do not lose weight. You are recommended to talk to your doctor or a dietitian for advice.";
}
