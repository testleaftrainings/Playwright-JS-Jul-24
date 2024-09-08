//axios -js library for calling any RESTful API
import axios from "axios";

const url = "https://project-practise.atlassian.net/rest/api/2/issue/";
const username = "subraja.sivathanu@qeagle.com";
//const apiKey = "ATATT3xFfGF0LprVmX_vOJWJRVm_B_9tKHIvFrpcr1o0ZMwitM-NPbknapo_v1OhZSj4u2uerhRVdBotmN5IljD_iqRZCHGuHHbqbtwl-yqBoCYJtDRiFPinEwlv20-arETJJkRgqlkkSteSRdvUk_lvZixh4j6CC9MDYiAtoeAifS9OnoimgzM=27DE5211";
const projectId = "SAL";

async function createJiraIssue(summary:string, description:string) {
    const issueRequestJson = {
        "fields": {
        "project": {
            "key": projectId
        },
        "summary": summary,
        "description": description,
        "issuetype": {
            "name": "Bug"
         }
        }
    }

    //Send the Post request
    await axios.post(url, issueRequestJson, {
        // auth: {
        //     username: username,
        //     password: apiKey
        // },
        headers: {
            'Content-Type': 'application/json'
        }
    })

    console.log(`The API request is successful`);
}

export{createJiraIssue}