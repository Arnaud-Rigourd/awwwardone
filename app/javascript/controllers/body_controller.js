import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="body"
export default class extends Controller {
  static targets = ["body"]

  connect() {
    // console.log(this.bodyTarget)
  }
}
