import Phaser from "phaser";

export class Enemy extends Phaser.GameObjects.Sprite {
  private speed: number;
  private isHit: boolean = false;

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

    scene.anims.create({
      key: "enemy_die",
      frames: scene.anims.generateFrameNumbers("enemy3_die", {
        start: 0,
        end: 16,
      }),
      frameRate: 15,
      repeat: 0,
    });

    this.play("enemy_fly");
  }

  hit() {
    if (this.isHit) return;
    this.isHit = true;
    this.play("enemy_die");
    this.once("animationcomplete", () => {
      this.isHit = false;
      this.x = 850;
      this.play("enemy_fly");
    });
  }

  update() {
    if (this.isHit) return;
    this.x -= this.speed * (1 / 60);
    if (this.x < -50) {
      this.x = 850;
    }
  }
}
