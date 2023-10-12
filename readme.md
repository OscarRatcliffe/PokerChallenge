# PokerChallenge

## Plan   
### Subroutines   
- Get highest value card
- How many cards of the same value (Works out pairs)
- Are cards all the same suite 
- Are cards values consecutive

### Ways to win
- [x] Highest value
- [x] One pair
- [x] Two pairs - Share check with one pair
- [x] 3 of a kind
- [x] Straight
- [x] Flush
- [x] Full house - Will always trigger earlier check first
- [x] 4 of a kind - Share check with 3 of a kind
- [x] Straight flush - Will trigger Flush first
- [x] Royal flush - Will trigger Flush first

## Logic plan   
- Are all the cards the same suite? 
- Are the cards values consecutive?
- Are at least 2 of the cards the same value?   

All of these will stop if met as there is no point in checking lower value wins   

- If none of these are won check through and see the highest value win (Starting from the top)
- If one wins at a higher value win count it 
- If not check card values and see who wins in card values
- Draws do not need to be checked for