import Phaser from "phaser";
import "./style.css";
import { BootScene } from "./scenes/BootScene";

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: "#0a0a0f",
  pixelArt: true,
  scene: [BootScene],
};

new Phaser.Game(config);
