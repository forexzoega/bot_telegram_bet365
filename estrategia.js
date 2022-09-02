async function jogosNaoEmpatados(team1, score1, team2, score2){
    let t1 = team1
    let s1 = score1
    let t2 = team2
    let s2 = score2
    let resultado;

    if( s1 != s2 ) {
        resultado = (t1 + ' x ' + t2 + ' => Jogo NÃO Empatado '+ s1 + 'X' + s2)
    }
    return resultado
}

 async function muitosGols(team1, score1, team2, score2){
    let t1 = team1
    let s1 = score1
    let t2 = team2 
    let s2 = score2
    let resultado;
    if( (Number(s1) + Number(s2)) > 3 ){
        resultado =  (t1+ ' x ' + t2 + ' = '+ s1 +' x '+s2)
    } 
    return resultado
}



export { jogosNaoEmpatados, muitosGols }