import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGames } from './Actions/index';
import PropTypes from 'prop-types';
import GamesList from './GamesList';

class GamePage extends Component {

    componentDidMount() {
        this.props.fetchGames();
    }
    render() {
        return (
            <div>
                <GamesList games={this.props.games} />
            </div>
        );
    }
}

GamePage.propTypes = {
    games: PropTypes.array.isRequired,
    fetchGames: PropTypes.func.isRequired,

}
const mapStateToProps = (state) => {
    return {
        games: state.games
    }
}

export default connect(mapStateToProps, { fetchGames })(GamePage);