import Dexie from "dexie";
import IPage from "./models/Page";

class AppDatabase extends Dexie {
  pages: Dexie.Table<IPage, number>;
  constructor() {
    super("NewTab");
    this.version(2).stores({
      pages: " ++id, title, url, position, color",
    });
  }
  async getPagesByOrder() {
    let pages: IPage[] = [];
    await this.pages.each((p) => {
      pages.push(p);
    });
    return pages.sort((a, b) => {
      if (a.position < b.position) {
        return -1;
      } else if (a.position > b.position) {
        return 1;
      } else {
        return 0;
      }
    });
  }
}
export default AppDatabase;
