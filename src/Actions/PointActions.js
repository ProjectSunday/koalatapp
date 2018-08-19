import Store from 'Store';
import { KoalaApi } from 'Actions';

export const getLeaderboard = async () => {
    const data = await KoalaApi.send('query { leaderboard { givenName familyName points } }');
    const { leaderboard } = data;
    Store.dispatch({
        type: 'LEADERBOARD_SET',
        leaderboard,
    });
};


const getScore = async () => {
    const data = await KoalaApi.send('query { getScore { score } }');
    const { score } = data.getScore;
    Store.dispatch({
        type: 'USER_SET',
        user: { score: 2 },
    });
};
