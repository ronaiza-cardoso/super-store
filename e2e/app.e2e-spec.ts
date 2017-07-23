import { SuperStorePage } from './app.po';

describe('super-store App', () => {
  let page: SuperStorePage;

  beforeEach(() => {
    page = new SuperStorePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
