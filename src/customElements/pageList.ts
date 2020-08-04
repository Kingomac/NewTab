import { app } from "..";
import PageLink from "./pageLink";
import IPage from "../models/Page";

class PageList extends HTMLElement {
  pages: IPage[];
  createPageBtn: HTMLButtonElement;
  constructor() {
    super();
    this.createPageBtn = document.createElement("button");
    this.createPageBtn.innerText = "Añadir";
    this.createPageBtn.className = "create-page-modal-invoker-btn";
    this.createPageBtn.onclick = () => {
      (<HTMLDivElement>(
        document
          .querySelector("page-creator-modal")
          .querySelector(".modal-frame")
      )).style.display = "block";
    };
  }
  async connectedCallback() {
    await this.updatePages();
  }
  async updatePages(): Promise<void> {
    await this.removePages();
    this.pages = await app.getPagesByOrder();
    this.pages.forEach((p) => {
      const element = new PageLink(p.id);
      element.setAttribute("to", p.url);
      element.innerHTML = p.title;
      element.setAttribute("bg", p.bgColor);
      element.setAttribute("txt", p.textColor);
      element.setAttribute("bgh", p.bgColorHover);
      element.setAttribute("bga", p.bgColorActive);
      element.setAttribute("txth", p.textColorHover);
      element.setAttribute("txta", p.textColorActive);
      this.append(element);
    });
    this.append(this.createPageBtn);
  }
  async removePages(): Promise<void> {
    this.querySelectorAll("page-link").forEach((p) => {
      p.remove();
    });
  }
}

export default PageList;
