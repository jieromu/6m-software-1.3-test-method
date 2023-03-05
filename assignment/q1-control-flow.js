/*
    Task
    - Implement a switch statement to check against `env` variable.
    - If `env` is "DEV", no change to `databaseCredential`.
    - If `env` is "STAGE", modify `databaseCredential` to "stageuser:password".
    - If `env` is "PROD", modify `databaseCredential` to "produser:password"
    
*/

const env = "DEV"; // Toggle between these possible values "DEV" | "STAGE" | "PROD"

// Proposong if we should change databaseCredential from const to let
// else due to the assignment of value to a const, 
// it will throw TypeError: Assignment to constant variable.
let databaseCredential = "devuser:password";

// Task: Add code here
// This implementation is not case sensitive
switch(env.toUpperCase()){
    default:
        databaseCredential = null;
        break;
    case "DEV":
        break;
    case "STAGE":
        databaseCredential = "stageuser:password";
        break;
    case "PROD":
        databaseCredential = "produser:password";
}

console.log(`Database credential for environment ${env.toUpperCase()} is ${databaseCredential}`);