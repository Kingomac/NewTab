import PageLink from "./customElements/pageLink";
import PageCreatorModal from "./customElements/pageCreatorModal";
import PageList from "./customElements/pageList";
import PageLinkContextMenu from "./customElements/pageLinkContextMenu";
import ColorPicker from "./customElements/colorPicker";
import PageModifierModal from "./customElements/pageModifierModal";

export default () => {
  const elements = [
    {
      tag: "page-link",
      el: PageLink,
    },
    {
      tag: "page-creator-modal",
      el: PageCreatorModal,
    },
    {
      tag: "page-list",
      el: PageList,
    },
    {
      tag: "page-link-context-menu",
      el: PageLinkContextMenu,
    },
    {
      tag: "color-picker",
      el: ColorPicker,
    },
    {
      tag: "page-modifier-modal",
      el: PageModifierModal,
    },
  ];

  elements.forEach((e) => {
    window.customElements.define(e.tag, e.el);
  });
};
