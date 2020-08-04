import defineCustomElements from "./defineCustomElements";
import AppDatabase from "./app";
import PageList from "./customElements/pageList";

export const app = new AppDatabase();

defineCustomElements();
export let pageList: PageList;

document.addEventListener("DOMContentLoaded", () => {
  pageList = <PageList>document.querySelector("page-list");
});

export async function RemovePage(id: number) {
  await app.pages.delete(id);
}
