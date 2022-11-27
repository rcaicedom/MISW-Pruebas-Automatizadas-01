const selNewPost = "a.ember-view.gh-btn.gh-btn-primary.view-actions-top-row";
const selPostTitleInput = "textarea.gh-editor-title.ember-text-area.gh-input.ember-view";
const selPostBodyInput = "div.koenig-editor__editor.__mobiledoc-editor";
const selPostPublishButton = "button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger";
const selPostFinalPublishButton = "button.gh-btn.gh-btn-large.gh-btn-pulse.ember-view";
const selPostContinueButton = "button.gh-btn.gh-btn-black.gh-btn-large";


export function getNewPostButton() {
  return cy.get(selNewPost);
}

export function getPostTitleInput() {
  return cy.get(selPostTitleInput);
}
export function gerPostBodyInput() {
  return cy.get(selPostBodyInput);
}

export function getPostPublishButton() {
  return cy.get(selPostPublishButton);
}

export function getPostContinueButton() {
  return cy.get(selPostContinueButton).contains("Continue, final review");
}

export function getPostFinalPublish() {
  return cy.get(selPostFinalPublishButton);
}

