module.exports = {
  roots: ["<rootDir>/packages", "<rootDir>/src"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  setupFiles: [],
  collectCoverageFrom: [
    "**/*.{ts,tsx}",
    "!**/node_modules/**",
    "!**/*.story.tsx",
    "!**/__stubs__/**"
  ],

  moduleNameMapper: {
    "\\.(css|scss)$": "<rootDir>/config/jest/styles-mock.js",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/packages/config/jest/files-mock.js",
    "^unify/(.*)$": "<rootDir>/packages/$1"
  },
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50
    }
  }
};
