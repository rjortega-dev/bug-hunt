import Phaser from "phaser";

export class BootScene extends Phaser.Scene {
  constructor() {
    super({ key: "BootScene" });
  }

  preload() {
    // Enemy3 sprites
    this.load.spritesheet("enemy3_idle", "/assets/enemies/enemy3_idle.png", { frameWidth: 64, frameHeight: 64 });
    this.load.spritesheet("enemy3_fly", "/assets/enemies/enemy3_fly.png", { frameWidth: 64, frameHeight: 64 });
    this.load.spritesheet("enemy3_hit", "/assets/enemies/enemy3_hit.png", { frameWidth: 64, frameHeight: 64 });
    this.load.spritesheet("enemy3_die", "/assets/enemies/enemy3_die.png", { frameWidth: 64, frameHeight: 64 });
    this.load.spritesheet("enemy3_attack_start", "/assets/enemies/enemy3_attack_smash_start.png", { frameWidth: 64, frameHeight: 64 });
    this.load.spritesheet("enemy3_attack_loop", "/assets/enemies/enemy3_attack_smash_loop.png", { frameWidth: 64, frameHeight: 64 });
    this.load.spritesheet("enemy3_smash_end", "/assets/enemies/enemy3_smash_end.png", { frameWidth: 64, frameHeight: 64 });

    // Moth
    this.load.spritesheet("moth", "/assets/enemies/fly_spook_moth.png", { frameWidth: 25, frameHeight: 25 });

    // Background layers
    this.load.image("bg_far", "/assets/background/far_buildings.png");
    this.load.image("bg_back", "/assets/background/back_buildings.png");
    this.load.image("bg_foreground", "/assets/background/2_foreground.png");

    // Duck companion
    this.load.spritesheet("duck", "/assets/duck/duck_sprite.png", { frameWidth: 88, frameHeight: 66 });

    // Music
    this.load.audio("bgm", "/assets/music/cyberpunk_street.ogg");
  }

  create() {
  console.log("BootScene ready");
  // Will transition to GameScene once assets are loaded
  }
}