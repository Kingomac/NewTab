import "@simonwep/pickr/dist/themes/nano.min.css";
import Pickr from "@simonwep/pickr";

class ColorPicker extends HTMLElement {
  picker: Pickr;
  pickerDiv: HTMLDivElement;
	el:string;
  constructor(el:string) {
    super();
    this.pickerDiv = document.createElement("div");
    this.pickerDiv.className = "color-picker";
		this.el = el;
  }
		connectedCallback() {
    this.append(this.pickerDiv);
    this.picker = Pickr.create({
      el:this.el + ' .color-picker',
      theme: "nano",
      autoReposition: true,
      components: {
        // Main components
        preview: true,
        opacity: true,
        hue: true,
        // Input / output Options
        interaction: {
          hex: true,
          rgba: false,
          hsla: false,
          hsva: false,
          cmyk: false,
          input: true,
          clear: true,
          save: false,
        },
      },
    });
    this.picker.setColorRepresentation("HEXA");
    this.picker.on("hide", () => {
      this.picker.applyColor();
      const btn = this.querySelector("div").querySelector("button");
      btn.style.backgroundColor = this.picker
        .getSelectedColor()
        .toHEXA()
        .toString();
    });
  }
}

export default ColorPicker;
