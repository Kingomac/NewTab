import { app, CreatePage } from "../";
class PageCreator extends HTMLElement {
  private pDivTitle: HTMLHeadingElement;
  pTitle: HTMLInputElement;
  pUrl: HTMLInputElement;
  pPosition: HTMLInputElement;
  pBgColor: HTMLInputElement;
  private pBgColorText: HTMLSpanElement;
  pTextColor: HTMLInputElement;
  private pTextColorText: HTMLSpanElement;
  pBgColorHover: HTMLInputElement;
  private pBgColorHoverText: HTMLSpanElement;
  pTextColorHover: HTMLInputElement;
  private pTextColorHoverText: HTMLSpanElement;
  pBgColorActive: HTMLInputElement;
  private pBgColorActiveText: HTMLSpanElement;
  pTextColorActive: HTMLInputElement;
  private pTextColorActiveText: HTMLSpanElement;
  pBgDiv: HTMLDivElement;
  private pTextDiv: HTMLDivElement;
  pSubmit: HTMLButtonElement;
  pSubmitAction: () => void;
  private pDiv: HTMLDivElement;
  shadow: ShadowRoot;
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });

    this.pDiv = document.createElement("div");

    this.pDivTitle = document.createElement("h1");
    this.pDivTitle.innerText = "Añadir páginas";

    this.pTitle = document.createElement("input");
    this.pTitle.type = "text";
    this.pTitle.placeholder = "Título";
    this.pTitle.style.width = "98%";

    this.pUrl = document.createElement("input");
    this.pUrl.type = "text";
    this.pUrl.placeholder = "Url";
    this.pUrl.style.width = "46%";

    this.pPosition = document.createElement("input");
    this.pPosition.type = "number";
    this.pPosition.placeholder = "Position";
    this.pPosition.style.width = "46%";
    this.pPosition.style.display = "inline-block";

    this.pBgColorText = document.createElement("span");
    this.pBgColorText.innerText = "Bg: ";
    this.pBgColor = document.createElement("input");
    this.pBgColor.type = "color";

    this.pBgColorHoverText = document.createElement("span");
    this.pBgColorHoverText.innerText = "Bg hover: ";
    this.pBgColorHover = document.createElement("input");
    this.pBgColorHover.type = "color";

    this.pBgColorActiveText = document.createElement("span");
    this.pBgColorActiveText.innerText = "Bg active: ";
    this.pBgColorActive = document.createElement("input");
    this.pBgColorActive.type = "color";

    this.pBgDiv = document.createElement("div");
    this.pBgDiv.append(
      this.pBgColorText,
      this.pBgColor,
      this.pBgColorHoverText,
      this.pBgColorHover,
      this.pBgColorActiveText,
      this.pBgColorActive
    );
    this.pBgDiv.style.width = "100%";

    this.pTextColorText = document.createElement("span");
    this.pTextColorText.innerText = "Text: ";
    this.pTextColor = document.createElement("input");
    this.pTextColor.type = "color";

    this.pTextColorHoverText = document.createElement("span");
    this.pTextColorHoverText.innerText = "Text: ";
    this.pTextColorHover = document.createElement("input");
    this.pTextColorHover.type = "color";

    this.pTextColorActiveText = document.createElement("span");
    this.pTextColorActiveText.innerText = "Text: ";
    this.pTextColorActive = document.createElement("input");
    this.pTextColorActive.type = "color";

    this.pTextDiv = document.createElement("div");
    this.pTextDiv.append(
      this.pTextColorText,
      this.pTextColor,
      this.pTextColorHoverText,
      this.pTextColorHover,
      this.pTextColorActiveText,
      this.pTextColorActive
    );
    this.pTextDiv.style.width = "100%";

    this.pSubmit = document.createElement("button");
    this.pSubmit.innerText = "Añadir";
    this.pSubmit.addEventListener("click", CreatePage);
  }
  connectedCallback() {
    this.shadow.innerHTML = `
    <style>
    h1 {
      width:100%;
      text-align:center;
    }
    input {
      margin: 2px;
      font-size: 14px;
      font-family: Century Gothic;
      padding: 5px;
      border: solid 2px #292d3e;
      border-radius: 4px;
      color: #292d3e;
      transition: ease-in-out 0.2s;
    }
    
    input:focus {
      border: solid 2px #82aaff;
    }
    
    button {
      width: 100%;
      margin-top: 4px;
      padding: 5px;
      border: none;
      border-radius: 3px;
      font-family: Century Gothic;
      background-color: #82aaff;
      color: white;
      font-weight: bold;
      font-size: 14px;
      text-transform: uppercase;
      cursor: pointer;
      transition: ease-in-out 0.2s;
    }
    
    button:hover {
      background-color: #959dcb;
    }
    
    button:active {
      background-color: #9ab8f7;
    }
    h1 {
      margin-top: 0;
      font-size: 22px;
    }
    </style>
    `;
    this.pDiv.append(
      this.pDivTitle,
      this.pTitle,
      this.pUrl,
      this.pPosition,
      this.pBgDiv,
      this.pTextDiv,
      this.pSubmit
    );
    this.pDiv.style.padding = "10px";
    this.pDiv.style.background = "#292d3e";
    this.pDiv.style.border = "solid 1px #82aaff";
    this.pDiv.style.borderRadius = "4px";
    this.pDiv.style.textAlign = "center";
    this.shadow.append(this.pDiv);
    console.log(this.pTitle);
  }
}

export default PageCreator;
