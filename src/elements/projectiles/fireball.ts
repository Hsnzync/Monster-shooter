import { GameObject } from '../../game-object'

export class Fireball extends GameObject {
  constructor(x: number, y: number) {
    super('fireball')

    this.posX = x
    this.posY = y
  }

  public update(): void {
    this.posX += 3
    this.element.style.transform = `translate(${this.posX}px, ${this.posY}px)`
  }

  public removeElement(): void {
    this.element.remove()
  }
}
