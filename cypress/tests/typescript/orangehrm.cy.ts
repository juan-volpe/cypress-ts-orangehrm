describe('Blackhole: Practicando con TypeScript', () => {
    it('Checking basic Data Type in TypeScript', () => {
        
        let test: string;
        let num: number;
        let isTested: boolean;
        let testCases: string[]; // String Array => Array de String
        let testSteps: number[]; // Number Array => Array de Númerosg
        let testResults: boolean[]; // Boolean Array => Array de String
        let testSuites: {} // an Object => Un Objeto
        let testPlans: {}[] // Objects Array => Array de Objetos
        //let testTypes = 'api-testing' / 'db-testing' / 'ui-testing'; La / es OR

        num = 78;
        test = num.toString();
        isTested = false;
        testSuites = {
            num, 
            test,
            isTested
        }
        testCases = ['TC1', 'TC2', 'TC3', 'TC4']; // Array de String.

        type Suites = {
            num: number,
            test: string,
            isTested: boolean
        }

        const testSuitesV2: Suites = {
            num,
            test,
            isTested
        }

        //* Para tipear y crear interfaces.
        const whatType = typeof test;
    })
})