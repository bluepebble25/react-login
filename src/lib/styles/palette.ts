class Palette {
  white: string;
  black: string;
  red: string;
  blue: string;
  yellow: string;
  green: string;
  darkgreen: string;
  grey: string;
  lightgrey: string;

  constructor() {
    this.white = '#fff';
    this.black = '';
    this.red = '#FF6B6B';
    this.blue = '#4D96FF';
    this.yellow = '#FFD93D';
    this.green = '#6BCB77';
    this.darkgreen = '#1B5E20';
    this.grey = '';
    this.lightgrey = '';
  }
}

const palette = new Palette();

export default palette;
