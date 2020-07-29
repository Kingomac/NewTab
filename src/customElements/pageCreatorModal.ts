import ColorPicker from "./colorPicker";
import { app } from "..";

class PageCreatorModal extends HTMLElement {
  modalFrame: HTMLDivElement;
  pTitle: HTMLInputElement;
  pUrl: HTMLInputElement;
  pPosition: HTMLInputElement;
  pTextColor: ColorPicker;
  pTextHoverColor: ColorPicker;
  pTextActiveColor: ColorPicker;
  pBgColor: ColorPicker;
  pBgHoverColor: ColorPicker;
  pBgActiveColor: ColorPicker;
  pageId: number;

  constructor() {
    super();

    this.pTitle = document.createElement("input");
    this.pTitle.type = "text";

    this.pUrl = document.createElement("input");
    this.pUrl.type = "text";
    this.pUrl.style.width = "48%";
    this.pPosition = document.createElement("input");
    this.pPosition.type = "number";
    this.pPosition.style.width = "48%";

    this.pTextColor = new ColorPicker(".modal-frame .modal .color-div");
    this.pTextHoverColor = new ColorPicker(".modal-frame .modal .color-div");
    this.pTextActiveColor = new ColorPicker(".modal-frame .modal .color-div");

    this.pBgColor = new ColorPicker(".modal-frame .modal .color-div");
    this.pBgHoverColor = new ColorPicker(".modal-frame .modal .color-div");
    this.pBgActiveColor = new ColorPicker(".modal-frame .modal .color-div");
  }
  connectedCallback() {
    this.modalFrame = document.createElement("div");
    this.modalFrame.className = "modal-frame";
    const modal: HTMLDivElement = document.createElement("div");
    modal.className = "modal";
    this.pTitle.style.width = "95%";
    this.pTitle.placeholder = "Título";
    const urlPosDiv: HTMLDivElement = document.createElement("div");
    urlPosDiv.className = "modal-col-2";
    this.pUrl.style.width = "50%";
    this.pUrl.placeholder = "Url";
    this.pPosition.style.width = "50%";
    this.pPosition.placeholder = "Posición";
    urlPosDiv.append(this.pUrl, this.pPosition);
    const bgColorDiv: HTMLDivElement = document.createElement("div");
    bgColorDiv.className = "color-div";
    bgColorDiv.append(
      "Background color: ",
      this.pBgColor,
      "Hover:",
      this.pBgHoverColor,
      "Active: ",
      this.pBgActiveColor
    );
    const textColorDiv: HTMLDivElement = document.createElement("div");
    textColorDiv.className = "color-div";
    textColorDiv.append(
      "Text color: ",
      this.pTextColor,
      "Hover: ",
      this.pTextHoverColor,
      "Active: ",
      this.pTextActiveColor
    );

    const createButton: HTMLButtonElement = document.createElement("button");
    const cancelButton: HTMLButtonElement = document.createElement("button");
    createButton.className = "modal-confirm-btn";
    createButton.innerText = "Crear";
    createButton.style.width = "100%";
    createButton.style.marginTop = "20px";
    createButton.onclick = async () => {
				await app.pages.add({
						title: this.pTitle.value,
						url: this.pUrl.value,
						position: this.pPosition.valueAsNumber,
						bgColor: this.pBgColor.picker.getSelectedColor().toHEXA().toString(),
						bgColorHover: this.pBgHoverColor.picker.getSelectedColor().toHEXA().toString(),
						bgColorActive: this.pBgActiveColor.picker.getSelectedColor().toHEXA().toString(),
						textColor: this.pTextColor.picker.getSelectedColor().toHEXA().toString(),
						textColorHover: this.pTextHoverColor.picker.getSelectedColor().toHEXA().toString(),
						textColorActive: this.pTextActiveColor.picker.getSelectedColor().toHEXA().toString(),
				});
				this.modalFrame.style.display = 'none';
    };
    cancelButton.className = "modal-cancel-btn";
    cancelButton.style.width = "100%";
    cancelButton.innerText = "Cancelar";
    cancelButton.onclick = () => {
      this.modalFrame.style.display = "none";
    };
    modal.append(
      this.pTitle,
      urlPosDiv,
      bgColorDiv,
      textColorDiv,
      createButton,
      cancelButton
    );
    this.modalFrame.append(modal);
    this.append(this.modalFrame);
  }

  async LoadPage(): Promise<void> {
    const page = await app.pages.get(this.pageId);
    this.pTitle.value = page.title;
    this.pUrl.value = page.url;
    this.pPosition.valueAsNumber = page.position;
    this.pBgColor.picker.setColor(page.bgColor);
    this.pBgHoverColor.picker.setColor(page.bgColorHover);
    this.pBgActiveColor.picker.setColor(page.bgColorActive);
    this.pTextColor.picker.setColor(page.textColor);
    this.pTextHoverColor.picker.setColor(page.textColorHover);
    this.pTextActiveColor.picker.setColor(page.textColorActive);
  }
  async ShowModal(pageId: number): Promise<void> {
    this.pageId = pageId;
    await this.LoadPage();
    this.modalFrame.style.display = "block";
  }
}

export default PageCreatorModal;
