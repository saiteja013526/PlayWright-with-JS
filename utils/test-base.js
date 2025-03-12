const base = require('@playwright/test');
//import {test as base } from '@playwright/test';


exports.customtest = base.test.extend(
  {

    testData : {
      name : "sai teja",
      username: "test@123qwe.com",
      password : "Test@123",
      cvv : "123"
    } 

  }
)

