import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="body"
export default class extends Controller {
  static targets = ["body", "imageTrack"]

  connect() {
    window.addEventListener('mousedown', (e) => {
      if(this.imageTrackTarget.dataset.mouseDownAt === '0') return;

      this.imageTrackTarget.dataset.mouseDownAt = e.clientX

      this.mouseDelta = parseFloat(this.imageTrackTarget.dataset.mouseDownAt) - e.clientX

      this.maxDelta = window.innerWidth / 2

      this.percentage = (this.mouseDelta / this.maxDelta) * 100
      console.log(this.percentage)

      this.imageTrackTarget.style.transform = `translate(${this.percentage}, -50%)`
    })
  }
}
