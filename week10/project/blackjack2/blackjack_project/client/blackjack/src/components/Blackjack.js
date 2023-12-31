import React from 'react';
import Cards from './Cards';
import Instructions from './Instructions';

const Blackjack = ({playerHand, dealerHand, result, handleDeal, handleStick, handleTwist, buttons, user}) => {
    
    const playerNode = playerHand.map((card) => {
        return <Cards card={card}/>

    })
    const dealerNode = dealerHand.map((card) => {
        return <Cards card={card} />
    })
    
    return ( 
        <>
        <Instructions/>
        <button onClick={handleDeal}>Deal </button>
         <button onClick={handleStick} disabled = {buttons}>Stick</button>
         <button onClick={handleTwist} disabled = {buttons} >Twist</button>

        <h1>{user.name}</h1>
         {playerNode}

         {result}


         <h1>Dealer</h1>
         {dealerNode}


        </>
     );
}
export default Blackjack;