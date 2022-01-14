import './index.css'
import React from 'react';

import WordRow from '../WordViewer/src/WordRow';

const RulesViewer = props => {

    const [showRules, setShowRules] = React.useState(false);

    return showRules?(
        <>
            <button class="rules-btn" onClick={()=>setShowRules(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-question" viewBox="0 0 16 16">
                    <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
                </svg>
            </button>
            <div class="d-flex justify-content-center align-items-center rules-container">
                <div class="col-11 col-sm-10 col-md-8 col-lg-6 d-flex flex-column align-items-center rules-main">
                    <h1>COMO JOGAR</h1>
                    <div>
                        Todos os dias, uma nova palavra aparecerá no Palavreado para você adivinhar.
                        Você terá 6 tentativas. Cada uma delas deve ser uma palavra que exista.
                        Acentos e cedilha são ignorados, tanto nas tentativas, quanto na resposta.
                        Após enviar uma tentativa, a cor das letras mudará para indicar o quão perto você está da resposta.
                    </div>
                    <div class="divider"></div>
                    <div class="d-flex flex-column" width="100%">
                        Se uma letra ficar verde, ela está presente na palavra e na posição correta (verde).
                        <WordRow showRules={true} target="verde" response="verde"/>
                        Se uma letra ficar amarela, ela está presente na palavra, mas na posição errada (aureo).
                        <WordRow showRules={true} target="aureo" response="aoreu"/>
                        Se uma letra ficar vermelha, ela não está presente na palavra (rubro).
                        <WordRow showRules={true} target="rubro" response="ribre"/>
                    </div>
                    <div class="divider"></div>
                    <div class="d-flex flex-column align-items-center">
                        <span>Criado por <a href="https://github.com/juni127" target="_blank">Reinaldo A. Junior</a></span>
                        <span><a href="https://www.gabtoschi.com/letreco/" target="_blank">Mais uma</a> versão brasileira não-oficial do <a href="https://www.powerlanguage.co.uk/wordle/" target="_blank">Wordle</a></span>
                    </div>
                    <button class="close-button" onClick={()=>setShowRules(false)}>FECHAR</button>
                </div>
            </div>
        </>
    ):<button class="rules-btn" onClick={()=>setShowRules(true)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-question" viewBox="0 0 16 16">
            <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
        </svg>
    </button>;
};

export default RulesViewer;