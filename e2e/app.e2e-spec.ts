import { AdminappPage } from './app.po';

describe('adminapp App', () => {
  let page: AdminappPage;

  beforeEach(() => {
    page = new AdminappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
