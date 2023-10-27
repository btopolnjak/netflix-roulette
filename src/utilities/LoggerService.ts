class Logger {
  private logs: any[];
  private static instance: Logger | null;

  private constructor() {
    this.logs = [];
  }

  log(message: any): void {
    this.logs.push(message);
  }

  showLogs(): void {
    console.log(this.logs);
  }

  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }
}

export default Logger;
