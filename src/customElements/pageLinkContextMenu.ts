class PageLinkContextMenu extends HTMLElement {
  pageId: number;
  shadow: ShadowRoot;
  x: number;
  y: number;
  constructor(x: number, y: number) {
    super();
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
    const el1 = document.createElement("button");
    const el2 = document.createElement("button");
    el1.onclick = (e) => {
      console.log("Click on button 1 from context menu");
    };
    el1.innerHTML = "Modificar";
    el2.innerHTML = "Eliminar";
    div.appendChild(el1);
    div.appendChild(el2);
    div.style.top = `${this.y - div.clientHeight}px`;
    div.style.left = `${this.x - div.clientWidth}px`;
    this.shadow.append(div);
  }
}

export default PageLinkContextMenu;
