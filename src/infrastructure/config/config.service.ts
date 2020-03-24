

export class ConfigService {

  private envState: string;

  constructor() {

    this.envState = process.env.NODE_ENV;

    console.log(`Esta es la variable NODE_ENV ${this.envState}`);
  }

}