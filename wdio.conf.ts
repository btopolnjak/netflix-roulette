export const config: WebdriverIO.Config = {
  before: async () => {
    const { spawn } = require("child_process");
    const reactApp = spawn("npm", ["run", "start"], {
      cwd: ".",
      stdio: "inherit",
    });
    await new Promise((resolve) => setTimeout(resolve, 5000));
  },
  runner: "local",
  autoCompileOpts: {
    autoCompile: true,
    tsNodeOpts: {
      project: "./test/tsconfig.json",
      transpileOnly: true,
    },
  },
  specs: ["./test/specs/**/*.ts"],
  exclude: [],
  maxInstances: 10,
  capabilities: [
    {
      browserName: "chrome",
      acceptInsecureCerts: true,
    },
  ],
  logLevel: "info",
  bail: 0,
  baseUrl: "http://localhost:3000",
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: ["chromedriver"],
  framework: "mocha",
  reporters: ["spec"],
  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
};
