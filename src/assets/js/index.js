import quoteGenerator from "./modules/quoteGenerator";

class Quotes {
  constructor() {
    this.modules = {
      quoteGenerator,
    };
  }
}

global.Quotes = new Quotes();

if (module.hot) {
  module.hot.accept();
}
