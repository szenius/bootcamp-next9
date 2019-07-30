module.exports = {
    moduleFileExtensions: [
      "ts",
      "tsx",
      "js"
    ],
    transform: {
      "^.+\\.tsx?$": "ts-jest"
    },
    testMatch: [
      "**/test.(ts|tsx)"
    ],
    globals: {
      "ts-jest": {
        babelConfig: true,
        tsConfig: "<rootDir>/jest.tsconfig.json"
      }
    },
    coveragePathIgnorePatterns: [
      "/node_modules/",
      "enzyme.js"
    ],
    setupFilesAfterEnv: ["<rootDir>/jest.enzyme.js"],
    coverageReporters: [
      "json",
      "lcov",
      "text",
      "text-summary"
    ],
    moduleNameMapper: {
      "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/jest.mocks.js",
      "\\.(css|less|scss)$": "<rootDir>/jest.mocks.js"
    }
  };
  