import { RemovePage } from "../index";
import PageModifierModal from "./pageModifierModal";

class PageLinkContextMenu extends HTMLElement {
  pageId: number;
  shadow: ShadowRoot;
  x: number;
  y: number;
  constructor(x: number, y: number, pageId: number) {
    super();
    this.pageId = pageId;
    this.shadow = this.attachShadow({ mode: "open" });
    this.x = x;
    this.y = y;
  }
  connectedCallback() {
    this.shadow.innerHTML = `
    <style>
    div {
      display: flex;
      flex-direction: column;
      padding: 3px;
      position: absolute;
      background-color: white;
      border-radious: 5px;
      border: none; 
    }
    button {
      cursor: pointer;
      border: none;
      width: 100%;
      height:100%;
      color: red;
      background-color: white;
      padding: 7px;
    }
    button:hover {
      background-color: gainsboro;
    }
    button:active {
      background-color: whitesmoke;
    }
    </style>
    `;
    const div = document.createElement("div");
    const btnDelete = document.createElement("button");
    const btnModify = document.createElement("button");

    btnDelete.innerHTML = "Eliminar";
    btnDelete.onclick = async () => {
      await RemovePage(this.pageId);
    };
    btnModify.innerHTML = "Modificar";
    btnModify.onclick = async () => {
      const modal = <PageModifierModal>(
        document.querySelector("page-modifier-modal")
      );
      await modal.ShowModal(this.pageId);
    };
    div.append(btnModify, btnDelete);
    div.style.top = `${this.y - div.clientHeight}px`;
    div.style.left = `${this.x - div.clientWidth}px`;
    this.shadow.append(div);
  }
}

export default PageLinkContextMenu;
