import Main from 'main';

export default class Secondary {
  constructor() {
    this.Main = new Main();
  }

  log() {
    console.log('Hi!');
    this.newFeat();
  }

  newFeat() {
    console.log('new thing');
  }

  awesomeThing() {
    console.log('awesssoommeeee');
  }

  render() {
    console.log(this.Main.render());
    this.log();
  }
}
