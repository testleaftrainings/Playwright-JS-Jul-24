import { expect, test } from "@playwright/test";

let sysId:any; 

test(`Test to create a new incident`, async ({request}) =>{

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
    sysId = responseBody.result.sys_id;
    console.log(`The sys_id is: ${sysId}`);

    //To get the incident number
    const inc_num = responseBody.result.number;
    console.log(`Incident number is: ${inc_num}`);
    
})

test(`Test to get a specific incident`, async ({request}) => {
    const getResponse = await request.get(`https://dev220741.service-now.com/api/now/table/incident/${sysId}`,
        {
            headers:{
                "Authorization":"Basic YWRtaW46d0gvWWQ1UXhzK0wx",
                "Content-Type":"application/json"
            }
        })

        //To get the response body
        const respBody = await getResponse.json();
        console.log(respBody);

        //To get the status code
        const apiStatusCode = getResponse.status();
        console.log(`The status code is ${apiStatusCode}`);
        
        expect(apiStatusCode, `expecting api status code to be 200`).toBe(200);
        
})

test.only(`Test to delete an incident`, async({request})=>{

   
    const delRequest = await request.delete(`https://dev220741.service-now.com/api/now/table/incident/${sysId}`,
        {
            headers:{
                 "Content-Type":"application/json",
                "Authorization": "Basic YWRtaW46d0gvWWQ1UXhzK0wx"

            }
        }
    )

    
        //To get the status code
        const apiStatusCode = delRequest.status();
        console.log(`The status code is ${apiStatusCode}`);
        //Assertion
        expect(apiStatusCode,`expecting api status code to be 204`).toBe(204)

   

})