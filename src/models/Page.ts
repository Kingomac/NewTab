interface IPage {
  id?: number;
  title: string;
  url: string;
  position: number;
  bgColor: string; // In hexadecimal like 	#0000FF
  bgColorHover: string;
  bgColorActive: string;
  textColor: string;
  textColorHover: string;
  textColorActive: string;
}

export default IPage;
