describe("Blackhole: Practicando con TypeScript", () => {
  it("Checking basic Data Type in TypeScript", () => {
    let test: string;
    let num: number;
    let isTested: boolean;
    let testCases: string[]; // String Array => Array de String
    let testSteps: number[]; // Number Array => Array de Númerosg
    let testResults: boolean[]; // Boolean Array => Array de String
    let testSuites: {}; // an Object => Un Objeto
    let testPlans: {}[]; // Objects Array => Array de Objetos
    //let testTypes = 'api-testing' / 'db-testing' / 'ui-testing'; La / es OR

    num = 78;
    test = num.toString();
    isTested = false;
    testSuites = {
      num,
      test,
      isTested,
    };
    testCases = ["TC1", "TC2", "TC3", "TC4"]; // Array de String.

    testSuites = {
      testId: "",
    };

    // Interface y Type se pueden importar.

    // NO se puede modificar.
    type Suites = {
      num: number;
      test: string;
      isTested: boolean;
    };

    // Es como si fuese una clase el interface se puede modificar.
    interface SuitesInt {
      testId: string;
      testData: string[];
      data: Suites;
    }

    type Execution = SuitesInt[];

    // Array of objects.
    const data: Execution = [
      {
        testId: "123456",
        testData: ["a", "a"],
        data: {
          num: 98,
          test: "Validate TypeScript",
          isTested: true,
        },
      },
    ];

    const testSuitesV2: Suites = {
      num, // num: 78
      test, // test: '78'
      isTested, // isTested: false
    };

    //* Para tipear y crear interfaces.
    const whatType = typeof data;
    whatType;

    //* Tipeo variado/opcional.
    //type apiResponse = string | number | undefined;

    type apiResponse = {
      testId: number;
      data: string;
    };

    const response = [
      {
        testId: 1,
        data: "passed",
      },
      {
        testId: 2,
        data: "failed",
      },
    ];

    //* Tipado con funciones.
    function getTestId(data: apiResponse) {
      try {
        const findId = data.find(({ data }) => data === "passed");

        // Si no lo encuentra.
        if (!findId) throw new Error("FindId is not found");

        return findId;
      } catch (error) {
        console.log(error);
      }
    }

    getTestId(response);
  });
});
