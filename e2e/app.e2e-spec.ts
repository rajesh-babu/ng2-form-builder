import { DragAndDropPage } from './app.po';

describe('drag-and-drop App', () => {
  let page: DragAndDropPage;

  beforeEach(() => {
    page = new DragAndDropPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
