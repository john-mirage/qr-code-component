import "./main.css";
import WebCard from "@components/web-card";
import WebLightbox from "@components/web-lightbox";

interface WebLightBoxInterface extends HTMLElement {
  isOpen: boolean;
}

customElements.define("web-card", WebCard, { extends: "main" });
customElements.define("web-lightbox", WebLightbox, { extends: "aside" });

const webCardComment = document.createComment(" Card ");
const webCard = document.createElement("main", { is: "web-card" });
const webLightbox = <WebLightBoxInterface>document.createElement("aside", { is: "web-lightbox" });

window.addEventListener('load', () => {
  document.body.prepend(webCardComment, webCard);
});

webCard.addEventListener("open-lightbox", () => {
  if (!webLightbox.isOpen) {
    document.body.prepend(webLightbox);
  }
});
