import {
  metricBMIFunc,
  imperialBMIFunc,
  BMISuggestFunc,
  MetricIdeaMassFunc,
  ImperialIdeaMassFunc
} from "./CalculatorFunc";

describe("metricBMIFunc", () => {
    test("Correct value", () => {
        expect(metricBMIFunc(185, 80)).toBe(23.4)
    })
    test("Null Height", () => {
      expect(metricBMIFunc(0, 80)).toBe(0);
    });
   test("Null Weight", () => {
     expect(metricBMIFunc(185, 0)).toBe(0);
   });
});

describe("imperialBMIFunc", () => {
   test("Correct value", () => {
     expect(imperialBMIFunc(11,4,5,11)).toBe(22);
   });
   test("Null Height", () => {
     expect(imperialBMIFunc(11, 4, 0, 0)).toBe(0);
   });
   test("Null Weight", () => {
     expect(imperialBMIFunc(0, 0, 5, 11)).toBe(0);
   });
});

describe("BMISuggestFunc", () => {
 test("Is Underweight", () => {
   expect(BMISuggestFunc(18.4)).toBe("underweight");
 });
  test("Is Healthy Weight", () => {
    expect(BMISuggestFunc(18.5)).toBe("a healthy weight");
  });
  test("Is Overweight", () => {
    expect(BMISuggestFunc(25)).toBe("overweight");
  });
  test("Is Obese", () => {
    expect(BMISuggestFunc(30)).toBe("obese");
  });
});

describe("MetricIdeaMassFunc", () => {
  test("Correct value", () => {
    expect(MetricIdeaMassFunc(185)).toBe("63.3kgs - 85.2kgs");
  });
});


describe("ImperialIdeaMassFunc", () => {
  test("Correct value", () => {
    expect(ImperialIdeaMassFunc(5, 11)).toBe("9st 6lbs - 12st 10lbs");
  });
});