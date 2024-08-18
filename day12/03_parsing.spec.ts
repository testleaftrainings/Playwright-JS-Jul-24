import { expect, test } from "@playwright/test";

test(`Test to parse the response`, async ({request}) =>{

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
    const responseBody = await response.text();
    console.log(`Text format: ${responseBody}`);

    const parsedJSON = JSON.parse(responseBody);
    console.log(parsedJSON);

})
