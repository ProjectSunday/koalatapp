import Store from 'Store';
import { KoalaApi } from 'Actions';

export const getLeaderboard = async () => {
    const data = await KoalaApi.send('query { leaderboard { firstName lastName points } }');
    const { leaderboard } = data;
    Store.dispatch({
        type: 'LEADERBOARD_SET',
        leaderboard,
    });
};
