import Phaser from "phaser";

export class Enemy extends Phaser.GameObjects.Sprite {
  private speed: number;

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, "enemy3_idle");
    scene.add.existing(this);
    this.setScale(2);
    this.speed = 100;

    scene.anims.create({
      key: "enemy_fly",
      frames: scene.anims.generateFrameNumbers("enemy3_fly", {
        start: 0,
        end: 7,
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.play("enemy_fly");
  }

  update() {
    this.x -= this.speed * (1 / 60);

    if (this.x < -50) {
      this.x = 850;
    }
  }
}
