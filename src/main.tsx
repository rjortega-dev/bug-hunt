import Phaser from "phaser";
import "./style.css";

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: "#0a0a0f",
  scene: [],
};

new Phaser.Game(config);
