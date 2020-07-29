import defineCustomElements from "./defineCustomElements";
import AppDatabase from "./app";
import PageList from "./customElements/pageList";

export const app = new AppDatabase();

defineCustomElements();
const pageList = new PageList();
export async function RemovePage(id: number) {
    await app.pages.delete(id);
}
