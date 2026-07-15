class StartScreen {
  private overlayEl: HTMLElement | null;
  private buttonEl: HTMLElement | null;

  constructor() {
    this.overlayEl = document.getElementById("start-overlay");
    this.buttonEl = document.getElementById("start-button");
  }

  onStart(callback: () => void) {
    if (!this.buttonEl) return;
    this.buttonEl.addEventListener(
      "click",
      () => {
        callback();
        this.hide();
      },
      { once: true },
    );
  }

  private hide() {
    if (this.overlayEl) {
      this.overlayEl.style.display = "none";
    }
  }
}

export const startScreen = new StartScreen();
