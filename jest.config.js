module.exports = {
    "transform": {
        "^.+\\.tsx?$": "<rootDir>/node_modules/ts-jest/preprocessor.js"
    },
    "testRegex": ".*\\.test\\.tsx?$",
    "collectCoverage": true,
    "collectCoverageFrom": [
        "src/**/*.ts",
        "!src/**/*.test.ts",
        "!**/node_modules/**"
    ],
    "moduleFileExtensions": [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "node"
    ],
}
