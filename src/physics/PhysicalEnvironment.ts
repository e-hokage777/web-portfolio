export default class PhysicalEnvironment {
  friction: number;
  airResistance: number;
  constructor({
    friction = 5, // newtorns
    airResistance = 5,
  }: {
    friction?: number;
    airResistance?: number;
  }) {
    this.friction = friction;
    this.airResistance = airResistance;
  }
}
