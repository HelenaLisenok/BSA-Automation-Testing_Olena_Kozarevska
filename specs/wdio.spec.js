

const { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } = require('constants');
const { expect } = require('chai');
const { App } = require('../src/pages');
const rundomNumber = () => Date.now();

const app = new App();

xdescribe('Registration:', function () {
  beforeEach(async function () {
    await browser.setWindowSize(1440, 960);
    await browser.url('/sign-up');
  });

  afterEach(async function () {
    await browser.reloadSession();
  });

  it('should be able to register doctor', async function () {
    await app.authPage.register({
      name: `John${rundomNumber()}`,
      surname: 'Doctor',
      email: `marcus${rundomNumber()}@gmail.com`,
      password: 'Pa55word',
      phone: '380999999',
      birthDate: '11/11/2000',
      status: 'doctor',
      gender: 'female',
    });

    await browser.waitUntil(
      async function () {
        const url = await browser.getUrl();
        return url === 'http://46.101.234.121/doctors';
      },
      { timeout: 5000 },
    );

    const url = await browser.getUrl();
    expect(url).to.be.eql('http://46.101.234.121/doctors');
  });

  it('should be able to register patient', async function () {
    await app.authPage.register({
      name: `John${rundomNumber()}`,
      surname: 'Patient',
      email: `marcus${rundomNumber()}@gmail.com`,
      password: 'Pa55word',
      phone: '380999999',
      birthDate: '11/11/2000',
      status: 'patient',
      gender: 'male',
    });

    await browser.waitUntil(
      async function () {
        const url = await browser.getUrl();
        return url === 'http://46.101.234.121/doctors';
      },
      { timeout: 5000 },
    );

    const url = await browser.getUrl();
    expect(url).to.be.eql('http://46.101.234.121/doctors');
  });
}); 


describe('Registration:', function () {
  xit ('Should be able to Log in', async function(){
    await browser.url('http://46.101.234.121/sign-in');
    const emailField = await $('input[name="email"]');
    const passwordField= await $('input[name="password"]');
    const signInButton = await $('button');

    await emailField.waitForDisplayed({ timeout: 5000 });
    await emailField.setValue('john_admin1@admin.com');

    await passwordField.waitForDisplayed({ timeout: 5000 });
    await passwordField.setValue('Pa55word');
    await signInButton.waitForDisplayed({ timeout: 5000 });
    await signInButton.click();

    await browser.waitUntil(
      async function () {
        const url = await browser.getUrl();
        return url === 'http://46.101.234.121/doctors';
      },
      { timeout: 5000 },
    );
    await browser.pause(5000);
    url = await browser.getUrl();
    expect(url).to.be.eql('http://46.101.234.121/doctors'); 

  });
  xit ('Should not be able to Log in', async function(){
    await browser.url('http://46.101.234.121/sign-in');
    const emailField = await $('input[name="email"]');
    const passwordField= await $('input[name="password"]');
    const signInButton = await $('button');

    await emailField.waitForDisplayed({ timeout: 5000 });
    await emailField.setValue('john_admin1@adm.com');

    await passwordField.waitForDisplayed({ timeout: 5000 });
    await passwordField.setValue('Pss12345');
    await signInButton.waitForDisplayed({ timeout: 5000 });
    await signInButton.click();
    await browser.reloadSession();
  });
  it ('Should be able to change speciality and hospital', async function(){
  await browser.url('http://46.101.234.121/sign-in');
  const emailField = await $('input[name="email"]');
  const passwordField= await $('input[name="password"]');
  const signInButton = await $('button');
  await emailField.waitForDisplayed({ timeout: 5000 });
  await emailField.setValue('john_admin1@admin.com');
  await passwordField.waitForDisplayed({ timeout: 5000 });
  await passwordField.setValue('Pa55word');
  await signInButton.waitForDisplayed({ timeout: 5000 });
  await signInButton.click();
  const menu = await $$('div.selectStyles__value-container');
  const speciality = menu[0];
  const clinic = menu[1];
  const EndocrOption = await $('div.selectStyles__placeholder = endocrinologist');
  const CleverlandOption = await $('div.selectStyles__single-value = Cleveland Clinic');
  const ArBut = await $$('button.styles_btn___s1BB.styles_without-border__3Vbp3.styles_primary-dark__1WnyR')
  const save1button = ArBut[0];
  const save2button = ArBut[1];

  await emailField.waitForDisplayed({ timeout: 5000 });
  await emailField.setValue('john_admin1@admin.com');
  await passwordField.waitForDisplayed({ timeout: 5000 });
  await passwordField.setValue('Pa55word');
  await signInButton.waitForDisplayed({ timeout: 5000 });
  await signInButton.click();

  await browser.url('http://46.101.234.121/user-profile/aa5058a3-3e09-4db4-b8fb-2232cc612265');
  await speciality.waitForDisplayed({timeout:5000});
  await speciality.click();
  await EndocrOption.waitForDisplayed({timeout:5000});
  await EndocrOption.click();
  await save1button.waitForDisplayed({ timeout: 5000 });
  await save1button.click();
  await clinic.waitForDisplayed({timeout:5000});
  await clinic.click();
  await CleverlandOption.waitForDisplayed({timeout:5000});
  await CleverlandOption.click();
  await save2button.waitForDisplayed({ timeout: 5000 });
  await save2button.click();

  });

xit ('Should be able to add new clinic', async function(){
await browser.url('http://46.101.234.121/clinics');
const ArBut1 = await $$('button.styles_btn___s1BB.styles_without-border__3Vbp3.styles_primary-dark__1WnyR')
const addButton = ArBut1[0];
const clinicnameField = await $('input[name="name"]');
const addressField = await $('input[name="address"]');
const menu = await $$('div.selectStyles__control');
const menustate = menu[0];
const menucity = menu[1];

const stateOption = await $('div.selectStyles__value-container=state');
const cityOption = await $('div.selectStyles__value-container=Boston,MA');


await addButton.waitForDisplayed ({ timeout: 5000 });
await addButton.click();
await clinicnameField.waitForDisplayed({ timeout: 5000 });
await clinicnameField.setValue('Elephant');
await addressField.waitForDisplayed({ timeout: 5000 });
await addressField.setValue('Kyiv Gonchara str 32');

await menustate.waitForDisplayed({ timeout: 5000 });
await menustate.click();

await stateOption.waitForDisplayed({ timeout: 5000 });
await stateOption.click();

await menucity.waitForDisplayed({ timeout: 5000 });
await menucity.click();

await cityOption.waitForDisplayed({ timeout: 5000 });
await cityOption.click();


});
});
