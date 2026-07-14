import Phaser from "phaser";
import "./style.css";
import { BootScene } from "./scenes/BootScene";
import { GameScene } from "./scenes/GameScene";

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: "#0a0a0f",
  pixelArt: true,
  parent: "game-root",
  scene: [BootScene, GameScene],
};

new Phaser.Game(config);
