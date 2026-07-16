class Controls {
  private pauseButtonEl: HTMLElement | null;

  constructor() {
    this.pauseButtonEl = document.getElementById("pause-button");
  }

  onPauseToggle(callback: () => void) {
    if (!this.pauseButtonEl) return;
    this.pauseButtonEl.addEventListener("click", callback);
  }

  setPauseLabel(label: string) {
    if (this.pauseButtonEl) {
      this.pauseButtonEl.textContent = label;
    }
  }
}

export const controls = new Controls();
