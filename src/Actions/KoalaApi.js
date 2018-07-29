// import gql from 'graphql-tag';

import config from 'config';
import Store from 'Store';

const ENDPOINT = config.AWS_APPSYNC_GRAPHQL_ENDPOINT;

export const send = async (query) => {
    const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/graphql',
            Authorization: Store.getState().user.jwtToken,
        },
        body: JSON.stringify({ query }),
    });

    if (response.status !== 200) {
        // console.error('Network Error in query(), response:', response);  // eslint-disable-line
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
};
