import { spawn, ChildProcess } from "child_process";

let reactApp: ChildProcess | null = null;

export const config: WebdriverIO.Config = {
  before: async () => {
    reactApp = spawn("npm", ["run", "start"], {
      cwd: ".",
      stdio: "ignore",
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
      "goog:chromeOptions": {
        args: ["--headless", "--disable-gpu"],
      },
    },
  ],
  logLevel: "info",
  bail: 0,
  baseUrl: "http://localhost:8080",
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: [],
  framework: "mocha",
  reporters: ["spec"],
  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
};
