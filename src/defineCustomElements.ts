import PageLink from "./customElements/pageLink";
import PageCreator from "./customElements/pageCreator";
import PageList from "./customElements/pageList";
import PageLinkContextMenu from "./customElements/pageLinkContextMenu";

export default () => {
  const elements = [
    {
      tag: "page-link",
      el: PageLink,
    },
    {
      tag: "page-creator",
      el: PageCreator,
    },
    {
      tag: "page-list",
      el: PageList,
    },
    {
      tag: "page-link-context-menu",
      el: PageLinkContextMenu,
    },
  ];

  elements.forEach((e) => {
    window.customElements.define(e.tag, e.el);
  });
};
