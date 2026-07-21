class Controls {
  private pauseButtonEl: HTMLElement | null;
  private pauseOverlayEl: HTMLElement | null;
  private resumeButtonEl: HTMLElement | null;

  constructor() {
    this.pauseButtonEl = document.getElementById("pause-button");
    this.pauseOverlayEl = document.getElementById("pause-overlay");
    this.resumeButtonEl = document.getElementById("resume-button");
  }

  onPauseToggle(callback: () => void) {
    if (!this.pauseButtonEl) return;
    this.pauseButtonEl.addEventListener("click", callback);
  }

  onResumeClick(callback: () => void) {
    if (!this.resumeButtonEl) return;
    this.resumeButtonEl.addEventListener("click", callback);
  }

  onEscapePress(callback: () => void) {
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        callback();
      }
    });
  }

  setPauseLabel(label: string) {
    if (this.pauseButtonEl) {
      this.pauseButtonEl.textContent = label;
    }
  }

  showPauseOverlay() {
    if (this.pauseOverlayEl) {
      this.pauseOverlayEl.style.display = "flex";
    }
  }

  hidePauseOverlay() {
    if (this.pauseOverlayEl) {
      this.pauseOverlayEl.style.display = "none";
    }
  }
}

export const controls = new Controls();
