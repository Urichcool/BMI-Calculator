import {
  metricBMIFunc,
  imperialBMIFunc,
  BMISuggestFunc,
  MetricIdeaMassFunc,
  ImperialIdeaMassFunc,
  BMIMeaningFunction
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

describe("BMIMeaningFunction", () => {
  test("Is Underweight", () => {
    expect(BMIMeaningFunction(18.4)).toBe("A BMI of less than 18.5 indicates that you are underweight, so you may need to put on some weight. You are recommended to ask your doctor or a dietitian for advice.");
  });
  test("Is Healthy Weight", () => {
    expect(BMIMeaningFunction(18.5)).toBe(
      "A BMI of 18.5-24.9 indicates that you are at a healthy weight for your height. By maintaining a healthy weight, you lower your risk of developing serious health problems."
    );
  });
  test("Is Overweight", () => {
    expect(BMIMeaningFunction(25)).toBe(
      "A BMI of 25-29.9 indicates that you are slightly overweight. You may be advised to lose some weight for health reasons. You are recommended to talk to your doctor or a dietitian for advice."
    );
  });
  test("Is Obese", () => {
    expect(BMIMeaningFunction(30)).toBe(
      "A BMI of over 30 indicates that you are heavily overweight. Your health may be at risk if you do not lose weight. You are recommended to talk to your doctor or a dietitian for advice."
    );
  });
  test("Is empty string", () => {
     expect(BMIMeaningFunction(0)).toBe(
       "Enter your height and weight and you’ll see what your BMI result means"
     );
  })
});