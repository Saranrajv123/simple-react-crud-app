import React from 'react';
import PropTypes from 'prop-types';

const GamesList = ({ games }) => {
    const empytMessage = (
        <p>There is no game collection in your account</p>
    )

    const gamesList = (
        <p>GamesLists</p>
    )
    return (
        <div>
            {games.length === 0 ? empytMessage : gamesList}
        </div>
    );
};

GamesList.propTypes = {
    games: PropTypes.array.isRequired
}

export default GamesList;