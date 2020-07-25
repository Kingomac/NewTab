import defineCustomElements from "./defineCustomElements";
import AppDatabase from "./app";
import PageCreator from "./customElements/pageCreator";
import PageList from "./customElements/pageList";

export const app = new AppDatabase();

defineCustomElements();
const pageList = new PageList();

export async function CreatePage(pageCreator: PageCreator) {
  console.log("adding");
  await app.pages.add({
    title: pageCreator.pTitle.value,
    bgColor: pageCreator.pBgColor.picker.getSelectedColor().toHEXA().toString(),
    bgColorActive: pageCreator.pBgColorActive.picker
      .getSelectedColor()
      .toHEXA()
      .toString(),
    bgColorHover: pageCreator.pBgColorHover.picker
      .getSelectedColor()
      .toHEXA()
      .toString(),
    textColor: pageCreator.pTextColor.picker
      .getSelectedColor()
      .toHEXA()
      .toString(),
    textColorActive: pageCreator.pTextColorActive.picker
      .getSelectedColor()
      .toHEXA()
      .toString(),
    textColorHover: pageCreator.pTextColorHover.picker
      .getSelectedColor()
      .toHEXA()
      .toString(),
    position: pageCreator.pPosition.valueAsNumber,
    url: pageCreator.pUrl.value,
  });
}
