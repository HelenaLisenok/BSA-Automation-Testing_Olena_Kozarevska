class LoginPage{
    constructor(){
        this.emailField='input[name="email"]';
        this.passwordField='input[name="password"]';
        this.signInButton='button';
        this.menu='div.selectStyles__value-container';
        this.EndocrOption='div.selectStyles__placeholder=endocrinologist';
        this.CleverlandOption='div.selectStyles__single-value=Cleveland Clinic';
        this.ArBut='button.styles_btn___s1BB.styles_without-border__3Vbp3.styles_primary-dark__1WnyR';
        this.ArBut1='button.styles_btn___s1BB.styles_without-border__3Vbp3.styles_primary-dark__1WnyR';
        this.clinicnameField='input[name="name"]';
        this.addressField='input[name="address"]';
        this.menu='div.selectStyles__control';
        this.stateOption='div.selectStyles__value-container=state';
        this.cityOption='div.selectStyles__value-container=Boston,MA';       
    }
    async log_in(){

            const  emailField = await $(this.usernameField);
            const passwordField = await $(this.passwordField);
            const signInButton = await $(this.signInButton);
        
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
        
    }
    async selectSpeciality(speciality){
      const menu = await $$(this.menu);
      const speciality1 = menu[0];
      await speciality1.waitForDisplayed({ timeout: 5000 });
      await speciality1.click;
      if (speciality==='endocrinologist'){
        const EndocrOption=await $(this.EndocrOption);
        await EndocrOption.waitForDisplayed({ timeout: 5000 });
        await EndocrOption.click();
      }
      else if (speciality==='dentist'){
        const DentistOption=await $(this.DentistOption);
        await DentistOption.waitForDisplayed({ timeout: 5000 });
        await DentistOption.click();
      }
      else if (speciality==='surgeon'){
        const SurgeonOption=await $(this.SurgeonOption);
        await SurgeonOption.waitForDisplayed({ timeout: 5000 });
        await SurgeonOption.click();
      } 
      else if (speciality==='dermatologist'){
        const DermatolOption=await $(this.DermatolOption);
        await DermatolOption.waitForDisplayed({ timeout: 5000 });
        await DermatolOption.click();
      }
      
    }
}