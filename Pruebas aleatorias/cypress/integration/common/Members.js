const selLinkNewPost = "a.gh-nav-new-post";
const selLinkTags = "a.ember-view";
const selLinkPosts = "a.ember-view";
const selLinkPages = "a.ember-view";
const selHeadingSiteTitle = ".site-title";
const selParagraphSiteDescription = ".site-header-content>p";
const selDivMenuSiteTitle = ".gh-nav-menu-details-sitetitle";
const selSearchButton = "button.gh-nav-btn-search";
const selSearchInput = "input.gh-input-with-select-input";
const selProfileMenu = "div.gh-user-avatar.relative";
const selEditProfileOption = "a.dropdown-item";
const selNewMember = "a.ember-view.gh-btn.gh-btn-primary";
const selNameInput = "#member-name";
const email = "#member-email";
const selNoteInput = "#member-note";
const selSaveMember = "button.gh-btn.gh-btn-primary.gh-btn-icon.ember-view";
const selEdit = "a.ember-view.gh-list-data"

export function getMemberButton() {
  return cy.get(selNewMember);
}

export function clickSaveMember() {
  cy.get(selSaveMember).click();
}
export function getSaveMemberButton() {
  return cy.get(selSaveMember);
}

export function getMemberNameInput() {
  return cy.get(selNameInput);
}

export function getMemberEmailInput() {
  return cy.get(email);
}

export function getMemberNoteInput() {
  return cy.get(selNoteInput);
}

export function getEditMemberButton() {
  return cy.get(selEdit).last();
}



