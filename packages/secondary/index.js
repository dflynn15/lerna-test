import Main from 'main';

export default class Secondary {
  constructor() {
    this.Main = new Main();
  }

  log() {
    console.log('Hi!');
  }

  render() {
    console.log(this.Main.render());
    this.log();
  }
}
