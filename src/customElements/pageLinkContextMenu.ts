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
      position: absolute;
      border-radius: 5px;
      border: solid 3px #711C91;
			transition: ease-in-out .2s;
    }
		div:hover {
				border-color: #D300C4;
		}
    button {
      cursor: pointer;
			color: #0ABDC6;
			font-family: Century Gothic;
			text-transform: uppercase;
			font-weight: bold;
      width: 100%;
      height: 100%;
      color: #0ABDC6;
      background-color: #000B1E;
      padding: 10px;
			border: none;
			transition: ease-in-out .2s;
    }
    button:hover {
      background-color: #1c61c2;
    }
    button:active {
      background-color: #000B1E;
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
