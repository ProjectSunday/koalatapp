import Store from 'Store';

const API_URL = process.env.API_URL || 'http://localhost:3000/graphql';

export const send2 = async (query) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
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
    return json.data;
};
