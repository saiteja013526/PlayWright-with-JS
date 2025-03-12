class APIUtils {

  constructor(apiContext, loginPayload){
    this.apiContext=apiContext;
    this.loginPayload = loginPayload;
  }


  async getToken(){
    let tokendetails;

    const loginResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login", 
      {
        data: this.loginPayload
      })
      //console.log("this responce we get is:", loginResponse);

      
      //expect(loginResponse.ok()).toBeTruthy(); 

      
      const loginResponseJson = await loginResponse.json(); // imp we need to wait untill we extract the token.
      tokendetails = loginResponseJson.token;
      console.log(tokendetails);
      return tokendetails;
  }
}
module.exports = {APIUtils};