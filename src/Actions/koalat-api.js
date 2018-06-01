var API_URL = 'https://4eidvqlqhngbrfjidzatwwo7hu.appsync-api.us-east-2.amazonaws.com/graphql';
var API_KEY = 'da2-qfi34ouwwzf7vhkhliqoldrohi'

export default class KoalaTApi {
    async sendGraph(graph) {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/graphql',
                // 'Accept': 'application/json',
                'x-api-key': API_KEY
            },
            body: JSON.stringify(graph)
        });

        if (response.status !== 200) {
            console.error('sendGraph() response:', response);  // eslint-disable-line
            throw new Error('sendGraph() status: ' + response.status);
        }

        const json = await response.json();
        if (json.errors) {
            console.error('sendGraph() json:', json);  // eslint-disable-line
            const e = new Error('sendGraph() graph: ' + graph);
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
                'x-api-key': API_KEY
            },
            body: JSON.stringify({ query: `query ${query}`})
        });

        if (response.status !== 200) {
            console.error('sendQuery() response:', response);  // eslint-disable-line
            throw new Error('sendQuery() status: ' + response.status);
        }

        const json = await response.json();
        if (json.errors) {
            console.error('sendQuery() json:', json);  // eslint-disable-line
            const e = new Error('sendQuery() graph: ' + graph);
            e.json = json;
            throw e;
        }
    
        return json;
    }
}