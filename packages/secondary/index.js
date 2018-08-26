import Main from 'main';

export default class Secondary {
  constructor() {
    this.Main = new Main();
  }

  render() {
    console.log(this.Main.render());
  }
}
