import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="body"
export default class extends Controller {
  static targets = ["body", "imageTrack"]

  connect() {
    window.addEventListener('mousedown', (e) => {
      this.imageTrackTarget.dataset.mouseDownAt = e.clientX
      console.log(this.imageTrackTarget.dataset.mouseDownAt)
    })
  }
}
