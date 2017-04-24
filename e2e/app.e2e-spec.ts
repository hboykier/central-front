import { CentralFrontPage } from './app.po';

describe('central-front App', () => {
  let page: CentralFrontPage;

  beforeEach(() => {
    page = new CentralFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
