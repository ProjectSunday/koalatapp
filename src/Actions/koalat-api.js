import AWSAppSyncClient from 'aws-appsync';
import gql from 'graphql-tag';
// import { ApolloProvider } from 'react-apollo';
// import { Rehydrated } from 'aws-appsync-react'; // this needs to also be installed when working with React
import AppSyncConfig from '../aws-exports';


const API_URL = 'https://4eidvqlqhngbrfjidzatwwo7hu.appsync-api.us-east-2.amazonaws.com/graphql';
const API_KEY = 'da2-qfi34ouwwzf7vhkhliqoldrohi';

let appSyncClient;

class KoalaTApi {
    // appSyncClient = null;
    // constructor() {
    //     // this.jwtToken = '';

    //     // this.client = new AWSAppSyncClient({
    //     //     url: AppSyncConfig.aws_appsync_graphqlEndpoint,
    //     //     region: AppSyncConfig.aws_appsync_region,
    //     //     auth: {
    //     //         type: AppSyncConfig.aws_appsync_authenticationType,
    //     //         // apiKey: AppSyncConfig.apiKey,
    //     //         jwtToken: store.getState().auth.jwtToken,
    //     //     },
    //     // });
    // }

    async send(graph) {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/graphql',
                // 'Accept': 'application/json',
                'x-api-key': API_KEY,
            },
            body: JSON.stringify(graph),
        });

        if (response.status !== 200) {
            console.error('sendGraph() response:', response);  // eslint-disable-line
            throw new Error(`sendGraph() status: ${response.status}`);
        }

        const json = await response.json();
        if (json.errors) {
            console.error('sendGraph() json:', json);  // eslint-disable-line
            const e = new Error(`sendGraph() graph: ${graph}`);
            e.json = json;
            throw e;
        }

        return json;
    }

    async sendQuery(query) {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/graphql',
                // 'Accept': 'application/json',
                'x-api-key': API_KEY,
            },
            body: JSON.stringify({ query: `query ${query}` }),
        });

        if (response.status !== 200) {
            console.error('sendQuery() response:', response);  // eslint-disable-line
            throw new Error(`sendQuery() status: ${response.status}`);
        }

        const json = await response.json();
        if (json.errors) {
            console.error('sendQuery() json:', json);  // eslint-disable-line
            const e = new Error(`sendQuery() graph: ${query}`);
            e.json = json;
            throw e;
        }

        return json;
    }

    init(token) {
        appSyncClient = new AWSAppSyncClient({
            url: AppSyncConfig.aws_appsync_graphqlEndpoint,
            region: AppSyncConfig.aws_appsync_region,
            auth: {
                type: AppSyncConfig.aws_appsync_authenticationType,
                jwtToken: token,
            },
            // disableOffline: true,
        });
    }

    async query(body, token) {
        const url = AppSyncConfig.aws_appsync_graphqlEndpoint;
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/graphql',
                Authorization: token,
            },
            body: JSON.stringify({ query: 'query {test}' }),
        });

        if (response.status !== 200) {
            // console.error('Network Error in query(), response:', response);  // eslint-disable-line
            throw new Error(`sendQuery() status: ${response.status}`);
        }

        const json = await response.json();
        if (json.errors) {
            console.error('sendQuery() json:', json);  // eslint-disable-line
            const e = new Error(`sendQuery() graph: ${body}`);
            e.json = json;
            throw e;
        }
        // console.log('json', json);
        return json;
    }
}

// export const init = (token) => {
//     appSyncClient = new AWSAppSyncClient({
//         url: AppSyncConfig.aws_appsync_graphqlEndpoint,
//         region: AppSyncConfig.aws_appsync_region,
//         auth: {
//             type: AppSyncConfig.aws_appsync_authenticationType,
//             jwtToken: token,
//         },
//     });
// };

export default new KoalaTApi();
