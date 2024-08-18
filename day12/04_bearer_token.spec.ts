import { test } from "@playwright/test";

let accessToken:any;
let instUrl:any;
let id:any;

test(`To generate the access token`, async ({request}) => {

    const url = "https://login.salesforce.com/services/oauth2/token";
    const clientID = "3MVG9pRzvMkjMb6lZlt3YjDQwe.HYIl3TLqTtN5gSZd0eu9FRMgGrFBgIMG9NBBttWHlmR.RKvAXyY4xeyZFu";
    const clientSecret = "2CD9BC047B2EB6DD92C77BF005DDDBCEE46E155237749F3764367B1E58B56F64";
    const username = "ranjini.r@testleaf.com";
    const password = "Testleaf@123";
    const grantType = "password";

    const generatingToken = await request.post(url,
        {
            headers:{
                "Content-Type":"application/x-www-form-urlencoded",
                "Connection":"keep-alive"
            },

            form:{
                "grant_type":grantType,
                "client_id":clientID,
                "client_secret":clientSecret,
                "username":username,
                "password":password
            }
        })

        const generatingTokenJSON = await generatingToken.json();
        console.log(generatingTokenJSON);

        //Access Token
        accessToken = generatingTokenJSON.access_token;
        console.log(`Access token generated: ${accessToken}`);
        
        //Instance Url
        instUrl = generatingTokenJSON.instance_url;
        console.log(`Instance url: ${instUrl}`);
        
})

test(`Test to create a new opportunity`, async ({request}) => {
    const oppUrl = `${instUrl}/services/data/v58.0/sobjects/Opportunity`;
    const opportunity = await request.post(oppUrl,
        {
            headers:{
                "Authorization":`Bearer ${accessToken}`,
                "Content-Type":"application/json"
            },

            data:{
                "CloseDate" : "2024-10-22",
                "StageName" : "Prospecting",
                "Name" : "Created using Playwright API",
            }
        })

        const opp_response = await opportunity.json();
        console.log(opp_response);

        //To get the opportunity id
        id = opp_response.id;
        console.log(`Opportunity id is: ${id}`);       
        
})

test(`Test to get the created opportunity`, async ({request}) => {
    const oppUrl = `${instUrl}/services/data/v58.0/sobjects/Opportunity/${id}`;
    const opportunity = await request.get(oppUrl,
        {
            headers:{
                "Authorization":`Bearer ${accessToken}`,
                "Content-Type":"application/json"
            },   
        })

        const opp_response = await opportunity.json();
        console.log(opp_response);
          
        
})