module.exports = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: [
    "<rootDir>/setup-jest.ts"
  ],
  moduleDirectories: [
    "node_modules",
    "src"
  ],
  globalSetup: "jest-preset-angular/global-setup",
  moduleNameMapper: {
    "#(.*)": "<rootDir>/node_modules/$1"
  },
  modulePaths: [
    "<rootDir>"
  ],

};