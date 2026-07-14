import Phaser from "phaser";
import { Enemy } from "../entities/Enemy";

export class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: "GameScene" });
  }

  private enemies: Enemy[] = [];
  private readonly enemyCount = 3;
  private score: number = 0;
  private scoreText!: Phaser.GameObjects.Text;

  create() {
    const bg_back = this.add.image(400, 300, "bg_back").setScrollFactor(0);
    bg_back.setDisplaySize(800, 600);

    const bg_middle = this.add.image(400, 300, "bg_middle").setScrollFactor(0);
    bg_middle.setDisplaySize(800, 600);

    const bg_foreground = this.add
      .image(400, 300, "bg_foreground")
      .setScrollFactor(0);
    bg_foreground.setDisplaySize(800, 600);

    for (let i = 0; i < this.enemyCount; i++) {
      const spawnX = 850 + i * 150;
      const enemy = new Enemy(this, spawnX, 300);
      enemy.on("pointerdown", () => {
        enemy.hit();
        this.score += 10;
        this.scoreText.setText(`Score: ${this.score}`);
      });
      this.enemies.push(enemy);
    }

    this.scoreText = this.add.text(16, 16, "Score: 0", {
      fontSize: "24px",
      color: "#ffffff",
    });
  }

  update() {
    for (const enemy of this.enemies) {
      enemy.update();
    }
  }
}
