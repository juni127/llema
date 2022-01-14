import React from "react";
import { connect } from "react-redux";

import WordCell from "./WordCell";
import Tooltip from "./Tooltip";

const WordRow = ({index, activeIndex, tries, word, exists, showRules, target, response}) => {

    let tentativa = tries;
    let resposta = word;
    let indice = index;

    if(showRules){
        indice = 0;
        tentativa = [response.toUpperCase().split("")];
        resposta = target;
    }

    return (
        <div class={`d-flex justify-content-center word-row ${activeIndex==index?'active':''}`}>
            {[...Array(5)].map((_, i) => <WordCell key={i} index={i} char={tentativa[indice]?tentativa[indice][i]??'':''} correction={showRules || index < activeIndex} word={resposta.toUpperCase()}/>)}
            <Tooltip text={'A palavra não consta no banco de palavras!'} active={!exists && activeIndex == index}/>
        </div>
    );
}

const mapStateToProps = state => ({
    activeIndex: state.tries.length>0?state.tries.length-1:0,
    tries: state.tries,
    word: state.word,
    exists: state.exists,
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(WordRow);