import Phaser from "phaser";
import { Enemy } from "../entities/Enemy";
import { hud } from "../ui/Hud";
import { startScreen } from "../ui/StartScreen";
import { controls } from "../ui/Controls";

export class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: "GameScene" });
  }

  private enemies: Enemy[] = [];
  private readonly enemyCount = 3;
  private score: number = 0;
  private isManuallyPaused: boolean = false;
  private bgm!: Phaser.Sound.BaseSound;

  create() {
    const bg_back = this.add.image(400, 300, "bg_back").setScrollFactor(0);
    bg_back.setDisplaySize(800, 600);

    const bg_middle = this.add.image(400, 300, "bg_middle").setScrollFactor(0);
    bg_middle.setDisplaySize(800, 600);

    const bg_foreground = this.add
      .image(400, 300, "bg_foreground")
      .setScrollFactor(0);
    bg_foreground.setDisplaySize(800, 600);

    hud.setScore(this.score);

    startScreen.onStart(() => {
      this.startGame();
    });

    controls.onPauseToggle(() => {
      this.togglePause();
    });

    controls.onResumeClick(() => {
      this.togglePause();
    });

    this.game.events.on("blur", () => {
      if (!this.isManuallyPaused) {
        this.isManuallyPaused = true;
        this.scene.pause();
        this.bgm?.pause();
        controls.setPauseLabel("Resume");
        controls.showPauseOverlay();
      }
    });
  }

  private togglePause() {
    this.isManuallyPaused = !this.isManuallyPaused;
    if (this.isManuallyPaused) {
      this.scene.pause();
      this.bgm?.pause();
      controls.setPauseLabel("Resume");
      controls.showPauseOverlay();
    } else {
      this.scene.resume();
      this.bgm?.resume();
      controls.setPauseLabel("Pause");
      controls.hidePauseOverlay();
    }
  }

  private startGame() {
    for (let i = 0; i < this.enemyCount; i++) {
      const spawnX = 850 + i * 150;
      const enemy = new Enemy(this, spawnX, 300);
      enemy.on("pointerdown", () => {
        enemy.hit();
        this.score += 10;
        hud.setScore(this.score);
      });
      this.enemies.push(enemy);
    }

    this.bgm = this.sound.add("bgm", { loop: true, volume: 0.5 });
    this.bgm.play();
  }

  update() {
    for (const enemy of this.enemies) {
      enemy.update();
    }
  }
}
