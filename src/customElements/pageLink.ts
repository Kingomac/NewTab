import PageLinkContextMenu from "./pageLinkContextMenu";

class PageLink extends HTMLElement {
  pageId: number;
  shadow: ShadowRoot;
  showingContextMenu: boolean = false;
  constructor(id: number) {
    super();
    this.pageId = id;
    this.shadow = this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const link = document.createElement("button");
    link.className = "list-el";
    link.innerText = this.innerHTML;
    this.shadow.innerHTML = `<style>
    .list-el{
      margin-top: 4px;
      cursor: pointer;
      display: block;
      padding: 10px;
      color: ${this.getAttribute("txt") || "grey"};
      text-decoration: none;
      text-align: center;
      background-color: ${this.getAttribute("bg") || "#a0d2eb"};
      transition: linear 0.2s;
      border-radius: 2px;
      box-shadow: #ffffff5d 0 0 4px;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 14px;
      font-family: Arial;
      border: none;
      width: 100%;
    }
    .list-el:hover {
      background: ${this.getAttribute("bgh") || "#89b8cf"};
      color: ${this.getAttribute("txth") || "white"};
    }
    .list-el:active {
      background-color: ${this.getAttribute("bga") || "white"};
      color: ${this.getAttribute("txta") || "whitesmoke"};
    }</style>
    `;
    this.shadow.append(link);
    this.addEventListener("contextmenu", (e) => {
      if (!this.showingContextMenu) {
        this.showingContextMenu = true;
        const contextMenu = new PageLinkContextMenu(
          e.clientX,
          e.clientY,
          this.pageId
        );
        this.shadow.append(contextMenu);
      } else {
        this.showingContextMenu = false;
        this.shadow.querySelector("page-link-context-menu").remove();
      }
      console.log("ajjajja what the fuck do you think you are doing");
      e.preventDefault();
    });
    this.addEventListener("click", () => {
      if (this.showingContextMenu) {
        this.showingContextMenu = false;
        this.shadow.querySelector("page-link-context-menu").remove();
      } else {
        const tab = window.open(this.getAttribute("to"), "_blank");
        tab.focus();
      }
    });
  }
}

export default PageLink;
