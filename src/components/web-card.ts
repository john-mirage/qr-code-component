import { gsap } from "gsap";
import qrCodeImage from "@images/image-qr-code.png";

class WebCard extends HTMLElement {
  initialCall: boolean;
  imageElement: HTMLImageElement;
  titleElement: HTMLHeadingElement;
  descriptionElement: HTMLParagraphElement;

  constructor() {
    super();
    this.initialCall = true;
    this.imageElement = document.createElement("img");
    this.titleElement = document.createElement("h1");
    this.descriptionElement = document.createElement("p");
    this.imageElement.setAttribute("class", "rounded-img mb-md cursor-pointer transition-img hover:opacity-75");
    this.imageElement.setAttribute("tabindex", "0");
    this.imageElement.setAttribute("draggable", "false");
    this.imageElement.setAttribute("src", qrCodeImage);
    this.imageElement.setAttribute("alt", "QR code of the Frontend Mentor website");
    this.titleElement.setAttribute("class", "text-heading font-heading text-dark-blue mb-sm focus-visible:outline-dark-blue");
    this.titleElement.textContent = "Improve your front-end skills by building projects";
    this.descriptionElement.setAttribute("class", "text-body font-body tracking-body text-grayish-blue");
    this.descriptionElement.textContent = "Scan the QR code to visit Frontend Mentor and take your coding skills to the next level";
    this.openLightbox = this.openLightbox.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  connectedCallback() {
    if (this.initialCall) {
      this.setAttribute("class", "w-full max-w-card mx-auto px-sm pt-sm pb-lg rounded-card bg-white text-center shadow-xl opacity-0 -translate-y-lg");
      this.append(this.imageElement, this.titleElement, this.descriptionElement);
      this.initialCall = false;
    }
    gsap.to(this, {opacity: 1, transform: "none", duration: 0.5});
    this.imageElement.addEventListener("click", this.openLightbox);
    this.imageElement.addEventListener("keyup", this.handleKeyUp);
  }

  disconnectedCallback() {
    this.imageElement.removeEventListener("click", this.openLightbox);
    this.imageElement.removeEventListener("keyup", this.handleKeyUp);
  }

  handleKeyUp(event: KeyboardEvent) {
    if (event.key === "Enter") {
      this.openLightbox();
    }
  }

  openLightbox() {
    const customEvent = new CustomEvent("open-lightbox");
    this.dispatchEvent(customEvent);
  }
}

export default WebCard;