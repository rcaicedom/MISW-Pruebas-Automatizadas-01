const { Given, When, Then } = require('@cucumber/cucumber');


When ('I enter email {string}',async function(email){
	let element = await this.driver.$('#ember6');
	return await element.setValue(email)}
	)
When ('I enter password {string}',async function(password){
	let element = await this.driver.$('#ember8');
	return await element.setValue(password)
	})
When('I click sign up',async function(){
	let element = await this.driver.$('#ember10');
	return await element.click()
	})
When('I click members',async function(){
	let element = await this.driver.$('#ember35');
	return await element.click()
	})
When('I click add new member',async function(){
	let element = await this.driver.$('#ember65');
	return await element.click()
	})
When ('I enter member name {string}',async function(name){
	let element = await this.driver.$('#member-name');
	return await element.setValue(name)
	})
When ('I enter member email {string}',async function(email){
	let element = await this.driver.$('#member-email');
	return await element.setValue(email)
	})
When('I click save member',async function(){
	let element = await this.driver.$('#ember70');
	return await element.click()
	})
When('I go back to members',async function(){
	let element = await this.driver.$('#ember69');
	return await element.click()
	})


When('I click posts',async function(){
	let element = await this.driver.$('.gh-nav-list-new.relative > a[href="#/posts/"]');
	return await element.click()
	})
When('I click add new post',async function(){
	let element = await this.driver.$('a[href="#/editor/post/"]');
	return await element.click()
	})
When ('I enter post title {string}',async function(title){
	let element = await this.driver.$('.gh-editor-title.ember-text-area.gh-input.ember-view');
	return await element.setValue(title)
	})
When('I click post body',async function(){
	let element = await this.driver.$('.koenig-editor__editor.__mobiledoc-editor');
	return await element.click()
	})
When ('I enter post text {string}',async function(text){
	let element = await this.driver.$('.koenig-editor__editor.__mobiledoc-editor');
	return await element.setValue(text)
	})
When('I click publish post',async function(){
	let element = await this.driver.$('button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger');
	return await element.click()
	})
When('I click continue',async function(){
	let element = await this.driver.$('button.gh-btn.gh-btn-black.gh-btn-large');
	return await element.click()
	})
When('I click publish post right now',async function(){
	let element = await this.driver.$('button.gh-btn.gh-btn-large.gh-btn-pulse.ember-view');
	return await element.click()
	})
When('I return to editor', async function(){
	let element = await this.driver.$('button.gh-back-to-editor');
	await element.click();
	})
When('I return to posts list', async function(){
	let element = await this.driver.$('a[href="#/posts/"]');
	return await element.click()
	})
When('I open post type filter', async function(){
	let element = await this.driver.$('.ember-power-select-selected-item');
	return await element.click()
	})
When('Open all posts drop down', async function(){
	let element = await this.driver.$('body > div.gh-app > div > main > section > div > header > section > div > div.gh-contentfilter-menu.gh-contentfilter-type > div.ember-view.ember-basic-dropdown-trigger.ember-power-select-trigger.gh-contentfilter-menu-trigger');
	return await element.click()
	})
When('click published posts', async function(){
	let element = await this.driver.$('/html/body/div[1]/div/ul/li[3]');
	return await element.click()
	})
When('I click the image to go the site', async function(){
	let element = await this.driver.$('/html/body/div[4]/div/div/div/a/div/div/div[2]');
	return await element.click()
	})
When('I click in post {string}', async function(postTitle){
	let element = await this.driver.$('/html/body/div[2]/div/main/section/section/ol/li/a[1]');
	return await element.click()
	})
When('I open post settings', async function(){
	let element = await this.driver.$('body > div.gh-app > div > main > button');
	return await element.click()
	})
When('I write future date', async function(){
	let element = await this.driver.$('/html/body/div[2]/div/main/div/div/div/div/div[2]/form/div[2]/div/div[1]/div/div[1]/div/input');
	return await element.setValue('2023-11-10')
	})
When('I click draft posts', async function(){
	let element = await this.driver.$('/html/body/div[1]/div/ul/li[1]');
	return await element.click()
	})
When('I click order dropdown', async function(){
	let element = await this.driver.$('body > div.gh-app > div > main > section > div > header > section > div > div.gh-contentfilter-menu.gh-contentfilter-sort > div.ember-view.ember-basic-dropdown-trigger.ember-power-select-trigger.gh-contentfilter-menu-trigger');
	return await element.click()
	})
When('I click older first', async function(){
	let element = await this.driver.$('/html/body/div[1]/div/ul/li[2]');
	return await element.click()
	})
	
	
	
When('I click pages',async function(){
	let element = await this.driver.$('a[href="#/pages/"]');
	return await element.click()
	})
When('I click add new page',async function(){
	let element = await this.driver.$('a[href="#/editor/page/"]');
	return await element.click()
	})
When ('I enter page title {string}',async function(title){
	let element = await this.driver.$('.gh-editor-title.ember-text-area.gh-input.ember-view');
	return await element.setValue(title)
	})
When('I click page body',async function(){
	let element = await this.driver.$('.koenig-editor__editor.__mobiledoc-editor');
	return await element.click()
	})
When ('I enter page text {string}',async function(text){
	let element = await this.driver.$('.koenig-editor__editor.__mobiledoc-editor');
	return await element.setValue(text)
	})
When('I click publish page',async function(){
	let element = await this.driver.$('button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger');
	return await element.click()
	})
When('I click publish page right now',async function(){
	let element = await this.driver.$('button.gh-btn.gh-btn-large.gh-btn-pulse.ember-view');
	return await element.click()
	})
When('I return to pages list', async function(){
	let element = await this.driver.$('/html/body/div[2]/div/main/div/section/header/div/a');
	return await element.click()
	})
When('Open all pages drop down', async function(){
	let element = await this.driver.$('body > div.gh-app > div > main > section > div > header > section > div > div.gh-contentfilter-menu.gh-contentfilter-type > div.ember-view.ember-basic-dropdown-trigger.ember-power-select-trigger.gh-contentfilter-menu-trigger');
	return await element.click()
	})
When('click published pages', async function(){
	let element = await this.driver.$('/html/body/div[1]/div/ul/li[3]');
	return await element.click()
	})
When('I click draft pages', async function(){
	let element = await this.driver.$('/html/body/div[1]/div/ul/li[2]');
	return await element.click()
	})
When('I click page with title {string}', async function(postTitle){
	let element = await this.driver.$('/html/body/div[2]/div/main/section/section/div[1]/ol/li[1]/a[1]');
	return await element.click()
	})
When('I open page settings', async function(){
	let element = await this.driver.$('body > div.gh-app > div > main > button');
	return await element.click()
	})
When('I click delete page', async function(){
	let element = await this.driver.$('/html/body/div[2]/div/main/div/div/div/div/div[2]/form/button');
	return await element.click()
	})
When('I click confirm delete page', async function(){
	let element = await this.driver.$('/html/body/div[5]/div/div/div[2]/button[2]');
	return await element.click()
	})
