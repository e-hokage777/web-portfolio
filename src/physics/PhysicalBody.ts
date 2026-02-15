import type PhysicalEnvironment from "./PhysicalEnvironment";

export default class PhysicalBody {
  environment: PhysicalEnvironment;

  constructor(environment: PhysicalEnvironment) {
    this.environment = environment;
  }
}
