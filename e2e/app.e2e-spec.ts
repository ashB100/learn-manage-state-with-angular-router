import { ManageUiStateWithRouterPage } from './app.po';

describe('manage-ui-state-with-router App', () => {
  let page: ManageUiStateWithRouterPage;

  beforeEach(() => {
    page = new ManageUiStateWithRouterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
