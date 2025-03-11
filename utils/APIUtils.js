class APIUtils {


  async getToken(){
    const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login", 
    {
      data: loginPayload
    })
    //console.log("this responce we get is:", loginResponse);

    
    expect(loginResponse.ok()).toBeTruthy(); 

    
    const loginResponseJson = await loginResponse.json(); // imp we need to wait untill we extract the token.
    tokendetails = loginResponseJson.token;
    //console.log(tokendetails);
    return tokendetails;
  }
}