import { app, CreatePage } from "../";
import ColorPicker from "./colorPicker";
class PageCreator extends HTMLElement {
  private pDivTitle: HTMLHeadingElement;
  pTitle: HTMLInputElement;
  pUrl: HTMLInputElement;
  pPosition: HTMLInputElement;
  pBgColor: ColorPicker;
  private pBgColorText: HTMLSpanElement;
  pTextColor: ColorPicker;
  private pTextColorText: HTMLSpanElement;
  pBgColorHover: ColorPicker;
  private pBgColorHoverText: HTMLSpanElement;
  pTextColorHover: ColorPicker;
  private pTextColorHoverText: HTMLSpanElement;
  pBgColorActive: ColorPicker;
  private pBgColorActiveText: HTMLSpanElement;
  pTextColorActive: ColorPicker;
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
    this.pDiv.className = "creator-div";

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
    this.pBgColor = new ColorPicker();

    this.pBgColorHoverText = document.createElement("span");
    this.pBgColorHoverText.innerText = "Bg hover: ";
    this.pBgColorHover = new ColorPicker();

    this.pBgColorActiveText = document.createElement("span");
    this.pBgColorActiveText.innerText = "Bg active: ";
    this.pBgColorActive = new ColorPicker();

    this.pBgDiv = document.createElement("div");
    this.pBgDiv.className = "color-div";
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
    this.pTextColor = new ColorPicker();

    this.pTextColorHoverText = document.createElement("span");
    this.pTextColorHoverText.innerText = "Text: ";
    this.pTextColorHover = new ColorPicker();

    this.pTextColorActiveText = document.createElement("span");
    this.pTextColorActiveText.innerText = "Text: ";
    this.pTextColorActive = new ColorPicker();

    this.pTextDiv = document.createElement("div");
    this.pTextDiv.className = "color-div";
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
    this.pSubmit.className = "btn-submit";
    this.pSubmit.innerText = "Añadir";
    this.pSubmit.addEventListener("click", () => {
      CreatePage(this);
    });
  }
  connectedCallback() {
    this.shadow.innerHTML = `
    <style>
    .color-div {
      display: flex;
      flex-direction: row;
    }
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
    .pcr-button {
      width: 40px;
      height: 20px;
      margin: 5px;
      border: solid white 1px;
      background-color: #42445A;
    }
    
    .btn-submit {
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
    
    .btn-submit:hover {
      background-color: #959dcb;
    }
    
    .btn-submit:active {
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
  }
}

export default PageCreator;
