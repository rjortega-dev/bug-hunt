import Phaser from "phaser";
import { Enemy } from "../entities/Enemy";

export class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: "GameScene" });
  }

  private enemy!: Enemy;

  create() {
    const bg_back = this.add.image(400, 300, "bg_back").setScrollFactor(0);
    bg_back.setDisplaySize(800, 600);

    const bg_middle = this.add.image(400, 300, "bg_middle").setScrollFactor(0);
    bg_middle.setDisplaySize(800, 600);

    const bg_foreground = this.add
      .image(400, 300, "bg_foreground")
      .setScrollFactor(0);
    bg_foreground.setDisplaySize(800, 600);

    // y is overwritten with a random value inside Enemy's constructor
    this.enemy = new Enemy(this, 850, 300);

    this.input.on("pointerdown", (pointer: Phaser.Input.Pointer) => {
      const bounds = this.enemy.getBounds();
      if (bounds.contains(pointer.x, pointer.y)) {
        this.enemy.hit();
      }
    });
  }

  update() {
    this.enemy.update();
  }
}
