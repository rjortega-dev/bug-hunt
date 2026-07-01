import Phaser from "phaser";

export class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: "GameScene" });
  }

  create() {
    const bg_back = this.add.image(400, 300, "bg_back").setScrollFactor(0);
    bg_back.setDisplaySize(800, 600);

    const bg_middle = this.add.image(400, 300, "bg_middle").setScrollFactor(0);
    bg_middle.setDisplaySize(800, 600);

    const bg_foreground = this.add
      .image(400, 300, "bg_foreground")
      .setScrollFactor(0);
    bg_foreground.setDisplaySize(800, 600);
  }

  update() {}
}
