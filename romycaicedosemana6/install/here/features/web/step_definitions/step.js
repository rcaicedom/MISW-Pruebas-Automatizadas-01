const { Given, When, Then } = require('@cucumber/cucumber');
When ('I enter email {string}',async function(email){
	let element = await this.driver.$('/html/body/div[2]/div/main/div[1]/div/section/form/div[1]/span/input');
	return await element.setValue(email)}
	)
When ('I enter password {string}',async function(password){
	let element = await this.driver.$('/html/body/div[2]/div/main/div[1]/div/section/form/div[2]/span/input');
	return await element.setValue(password)
	})
When('I click sign up',async function(){
	let element = await this.driver.$('/html/body/div[2]/div/main/div[1]/div/section/form/button/span');
	return await element.click()
	})
When('I click staff',async function(){
	let element = await this.driver.$('/html/body/div[2]/div/nav[1]/section/div[1]/ul[2]/li[5]/a');
	return await element.click()
	})
When('I click invite people',async function(){
	let element = await this.driver.$('/html/body/div[2]/div/main/section/header/section/button/span');
	return await element.click()
	})
When ('I enter member email {string}',async function(email){
	let element = await this.driver.$('/html/body/div[4]/div/div/div/div/div[2]/section/div[1]/fieldset/div[1]/input');
	return await element.setValue(email)
	})
When('I click save member',async function(){
	let element = await this.driver.$('/html/body/div[4]/div/div/div/div/div[2]/section/div[2]/button/span');
	return await element.click()
	})
When('I go back to staff',async function(){
	let element = await this.driver.$('/html/body/div[2]/div/nav[1]/section/div[1]/ul[2]/li[5]/a');
	return await element.click()
	})
When('I click profile',async function(){
    let element = await this.driver.$('/html/body/div[2]/div/nav[1]/section/div[2]/div[1]/div/div[2]');
    return await element.click()
    })
When('I click your profile',async function(){
    let element = await this.driver.$('/html/body/div[1]/div/ul/li[4]/a');
    return await element.click()
    })
When ('I enter username {string}',async function(username){
    let element = await this.driver.$('/html/body/div[2]/div/main/section/section/div/form[1]/div/fieldset/div[1]/input');
    return await element.setValue(username)
    })
When('I click save profile',async function(){
    let element = await this.driver.$('/html/body/div[2]/div/main/section/header/section/button/span');
    return await element.click()
    })
When('I click Tags',async function(){
    let element = await this.driver.$('/html/body/div[2]/div/nav[1]/section/div[1]/ul[2]/li[4]/a');
    return await element.click()
    })
When('I click internal tag',async function(){
    let element = await this.driver.$('/html/body/div[2]/div/main/section/header/section/div/button[2]/span');
    return await element.click()
    })
When('I click public tag',async function(){
    let element = await this.driver.$('/html/body/div[2]/div/main/section/header/section/div/button[1]/span');
    return await element.click()
    })
When('I click new tag',async function(){
    let element = await this.driver.$('/html/body/div[2]/div/main/section/header/section/a/span');
    return await element.click()
    })
When ('I enter tagname {string}',async function(tagname){
    let element = await this.driver.$('/html/body/div[2]/div/main/section/form/div/div[1]/div[1]/div[1]/div[1]/input');
    return await element.setValue(tagname)
    })
When ('I enter tagdesc {string}',async function(tagdesc){
    let element = await this.driver.$('/html/body/div[2]/div/main/section/form/div/div[1]/div[1]/div[3]/textarea');
    return await element.setValue(tagdesc)
    })
When('I click save tag',async function(){
    let element = await this.driver.$('/html/body/div[2]/div/main/section/form/header/section/button/span');
    return await element.click()
    })
When('I click edit tag',async function(){
    let element = await this.driver.$('/html/body/div[2]/div/main/section/section/ol/li[2]/a[4]/div');
    return await element.click()
    })
When('I click delete tag',async function(){
    let element = await this.driver.$('/html/body/div[2]/div/main/section/button/span');
    return await element.click()
    })
When('I click confirm delete tag',async function(){
    let element = await this.driver.$('/html/body/div[4]/div/div/div/div/div[2]/section/div[2]/button[2]/span');
    return await element.click()
    })
When('I click general settings',async function(){
    let element = await this.driver.$('/html/body/div[2]/div/nav[1]/section/div[1]/ul[3]/li[2]/a');
    return await element.click()
    })
When('I click expand',async function(){
    let element = await this.driver.$('/html/body/div[2]/div/main/section/div/section/div[2]/div[1]/div[2]/button/span');
    return await element.click()
    })
When ('I enter general title {string}',async function(generaltitle){
    let element = await this.driver.$('/html/body/div[2]/div/main/section/div/section/div[2]/div[1]/div[1]/div[3]/div/div/div[1]/input');
    return await element.setValue(generaltitle)
    })
When('I click save general',async function(){
    let element = await this.driver.$('/html/body/div[2]/div/main/section/div/header/section/button/span');
    return await element.click()
    })
When('I click navigation',async function(){
    let element = await this.driver.$('/html/body/div[2]/div/nav[1]/section/div[1]/ul[3]/li[3]/a');
    return await element.click()
    })

When('I enter about {string}',async function(about){
    let element = await this.driver.$('/html/body/div[2]/div/main/section/section/div[2]/form/div[1]/div[2]/div/div/span[1]/input');
    return await element.setValue(about)
    })
When('I click save navigation',async function(){
    let element = await this.driver.$('/html/body/div[2]/div/main/section/header/section/button/span');
    return await element.click()
    })
When('I click delete member',async function(){
    let element = await this.driver.$('/html/body/div[2]/div/main/section/section/section[1]/div/div/article/div[2]/div/a[1]');
    return await element.click()
    })