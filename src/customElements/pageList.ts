import { app } from "..";
import PageLink from "./pageLink";

class PageList extends HTMLElement {
  shadow: ShadowRoot;
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }
  async connectedCallback() {
    const pages = await app.getPagesByOrder();
    pages.forEach((p) => {
      const element = new PageLink();
      element.setAttribute("to", p.url);
      element.innerHTML = p.title;
      element.setAttribute("bg", p.bgColor);
      this.shadow.append(element);
    });
  }
}

export default PageList;
