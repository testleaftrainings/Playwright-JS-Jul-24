import { expect, test } from "@playwright/test";

test(`Test to calculate the response time`, async ({request}) =>{

    const startTime = performance.now();
    const response = await request.post("https://dev220741.service-now.com/api/now/table/incident",

        {
            headers:{
                "Authorization":"Basic YWRtaW46d0gvWWQ1UXhzK0wx",
                "Content-Type":"application/json"
            },

            data:{
                "short_description": "Created using Playwright API"
            }
        })

    //To get the json response
    const responseBody = await response.json();
    console.log(responseBody);

    //To get the status code
    const apiStatusCode = response.status();
    console.log(`The status code is ${apiStatusCode}`);
    
    expect(apiStatusCode, `expecting api status code to be 201`).toBe(201);
    
    //To get the sys_id
    const sysId = responseBody.result.sys_id;
    console.log(`The sys_id is: ${sysId}`);

    //To get the incident number
    const inc_num = responseBody.result.number;
    console.log(`Incident number is: ${inc_num}`);

    const endTime = performance.now();
    const responseTime = endTime - startTime;
    console.log(`Response Time is ${responseTime}`);
    
    expect(responseTime).toBeLessThan(2000);
})
