import './index.css';
import React from 'react';
import { connect } from 'react-redux';
import sha256 from 'crypto-js/sha256';
import Base64 from 'crypto-js/enc-base64';

const EndViewer = ({tries, word}) => {
    const emojiSwitcher = {
        yellow: "🟨",
        green: "🟩",
        red: "🟥"
    };

    const coppyToClipboard = () => {
        let text = `Eu acertei a palavra ${Base64.stringify(sha256(word)).substring(0, 8)} com ${tries.length} tentativas!\n\n\n`;
        tries.forEach(element => {
            element.forEach((char, index) => {
                console.log((char == word.toUpperCase()[index]?
                    emojiSwitcher.green:(
                        word.toUpperCase().includes(char)?
                            emojiSwitcher.yellow:emojiSwitcher.red
                )));
                text = text.concat(char == word.toUpperCase()[index]?
                    emojiSwitcher.green:(
                        word.toUpperCase().includes(char)?
                            emojiSwitcher.yellow:emojiSwitcher.red
                ));
            });
            text = text.concat("\n");
        });
        text = text.concat("Jogue você também em http://localhost:3000!");
        console.log(text);
        navigator.clipboard.writeText(text)
            .then(() => alert("success"))
            .catch(err => alert(err));
    }

    return tries[tries.length - 2].join("") == word.toUpperCase()?(
        <div class="row justify-content-center align-items-center end-container">
            <div class="col-10 d-flex flex-column align-items-center end-main">
                <h2>Fim de jogo!</h2>
                <div class="divider"></div>
                <span>
                    Você acertou a palavra com apenas {tries.length - 1} tentativas!
                </span>
                <span>&nbsp;</span>
                {       
                tries.map(element => <span>{
                        element.map((char, index) =>
                            char == word.toUpperCase()[index]?
                                emojiSwitcher.green:(
                                    word.toUpperCase().includes(char)?
                                        emojiSwitcher.yellow:emojiSwitcher.red
                            )
                        )
                    }</span>)}
                <span>&nbsp;</span>
                <span>
                    Compartilhe seu resultado com seus amigos enquanto espera a próxima palavra.
                </span>
                <span>&nbsp;</span>
                <div class="divider"></div>
                <button class="" onClick={coppyToClipboard}>
                    COPIAR RESULTADO
                </button>
                <button class="" onClick={() => window.location.reload()}>
                    FECHAR
                </button>
            </div>
        </div>
    ):(
        <div class="row justify-content-center align-items-center end-container">
            <div class="col-10 d-flex flex-column align-items-center end-main">
                <h2>Fim de jogo!</h2>
                <div class="divider"></div>
                <span>
                    Você perdeu :(
                </span>
                <button class="" >
                    TENTAR NOVAMENTE
                </button>
                <button class="" onClick={() => window.location.reload()}>
                    FECHAR
                </button>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    tries: state.tries,
    word: state.word,
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(EndViewer);