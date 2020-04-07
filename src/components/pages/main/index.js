import React, { Component } from 'react';
import api from '../../../services/api';

import './styles.css';

export default class Main extends Component {
    state = {
        characters: []
    };

    componentDidMount() {
        this.loadCharacters();
    }

    loadCharacters = async () => {
        const response = await api.get('/');

        this.setState({ characters: response.data.data })
        
    }

    render() {
        return (
            <div className='characters-list'>
                {this.state.characters.map(character => (
                    <article key={character.char_id}>
                        <div className='character-image'>
                            <img src={character.img} alt="breaking-bad" />  
                            </div>  
                        <strong>{character.name}</strong>  
                        <p>Birthday: {character.birthday}</p> 
                        <p>Occupation: {character.occupation[0]}</p>
                        <p>Nickname: {character.nickname}</p>
                        <p>Status:</p>
                        <p className="alertSpoiler">Spoiler alert!! Pass cursor down here to unlock ;)</p>
                        <p className="spoiler">{character.status}</p>
                    </article>
                ))}
            </div>
        )
}
}
