import Phaser from "phaser";

export class BootScene extends Phaser.Scene {
  constructor() {
    super({ key: "BootScene" });
  }

  preload() {
    // We'll load assets here later
  }

  create() {
    console.log("BootScene ready");
    // Will transition to GameScene once assets are loaded
  }
}
