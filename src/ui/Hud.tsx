class Hud {
  private scoreEl: HTMLElement | null;

  constructor() {
    this.scoreEl = document.getElementById("hud-score");
  }

  setScore(score: number) {
    if (this.scoreEl) {
      this.scoreEl.textContent = String(score);
    }
  }

  // Future features: setWave(), setCombo(), setMisses(), setLives() here
  // Same pattern: grab the element once, expose one method to update it.
}

export const hud = new Hud();
