import { gsap } from "gsap";
import qrCodeImage from "@images/image-qr-code.png";

class WebLightbox extends HTMLElement {
  initialCall: boolean;
  isOpen: boolean;
  imageElement: HTMLImageElement;

  constructor() {
    super();
    this.initialCall = true;
    this.isOpen = false;
    this.imageElement = document.createElement("img");
    this.imageElement.setAttribute("class", "rounded-img opacity-0 scale-50");
    this.imageElement.setAttribute("src", qrCodeImage);
    this.imageElement.setAttribute("alt", "QR code of the Frontend Mentor website");
    this.imageElement.setAttribute("draggable", "false");
    this.handleClick = this.handleClick.bind(this);
    this.handleEscapeKey = this.handleEscapeKey.bind(this);
  }

  connectedCallback() {
    if (this.initialCall) {
      this.setAttribute("class", "fixed z-50 top-0 left-0 p-sm flex justify-center items-center w-full h-full bg-transparent");
      this.append(this.imageElement);
      this.initialCall = false;
    }
    this.isOpen = true;
    gsap.to(this, {backgroundColor: "rgba(0, 0, 0, 0.8)", duration: 0.3});
    gsap.to(this.imageElement, {opacity: 1, scale: 1, duration: 0.3});
    this.addEventListener("click", this.handleClick);
    window.addEventListener("keyup", this.handleEscapeKey);
  }

  disconnectedCallback() {
    this.removeEventListener("click", this.handleClick);
    window.removeEventListener("keyup", this.handleEscapeKey);
  }

  handleClick(event: MouseEvent) {
    if (this.isOpen && event.target !== this.imageElement) {
      this.isOpen = false;
      this.closeLightbox();
    }
  }

  handleEscapeKey(event: KeyboardEvent) {
    if (this.isOpen && event.key === "Escape") {
      this.isOpen = false;
      this.closeLightbox();
    }
  }

  closeLightbox() {
    gsap.to(this, {backgroundColor: "transparent", duration: 0.3});
    gsap.to(this.imageElement, {opacity: 0, scale: 0.5, duration: 0.3});
    setTimeout(() => {
      this.remove();
    }, 300);
  }
}

export default WebLightbox;