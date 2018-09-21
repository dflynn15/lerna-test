export default class Main {
  constuctor() {
    this.name = new Symbol('Daniel');
  }

  newFeat() {
    console.log('cool thing');
  }

  newerFeat() {
    console.log('newer feature');
  }

  niceThing() {
    console.log('nice');
  }

  render() {
    console.log(this.name.toString());
  }
}
