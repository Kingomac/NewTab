import defineCustomElements from "./defineCustomElements";
import AppDatabase from "./app";
import PageCreator from "./customElements/pageCreator";
import PageList from "./customElements/pageList";

export const app = new AppDatabase();

defineCustomElements();
const pageCreator = new PageCreator();
const pageList = new PageList();

export async function CreatePage() {
  console.log("adding");
  await app.pages.add({
    title: pageCreator.pTitle.textContent,
    bgColor: pageCreator.pBgColor.textContent,
    bgColorActive: pageCreator.pBgColorActive.textContent,
    bgColorHover: pageCreator.pBgColorHover.textContent,
    textColor: pageCreator.pTextColor.textContent,
    textColorActive: pageCreator.pTextColorActive.textContent,
    textColoHover: pageCreator.pTextColorHover.textContent,
    position: pageCreator.pPosition.valueAsNumber,
    url: pageCreator.pUrl.textContent,
  });
}
