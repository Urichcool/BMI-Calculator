export const metricBMIFunc = (height: string, weight: string): number => {
  const normalisedHeight: number = Number(
    `${height[0]}.${height[1]}${height[2]}`
  );
  const normalisedWeight: number = Number(weight);
  return normalisedWeight / (normalisedHeight * normalisedHeight);
};
