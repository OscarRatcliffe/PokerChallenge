# PokerChallenge

## Plan   
### Subroutines   
- Get highest value card
- How many cards of the same value (Works out pairs)
- Are cards all the same suite 
- Are cards values consecutive

#### Get highest value
Lookup card values in object and get highest value one - pick last in sorted list

#### How many cards of the same value?
2D array with the list of found cards and how many times they have come up  
Check through and remove anything from the array that only shows up once

#### Are all cards the same suite
Check value of 1st and 5th card and see if they are same suite

#### Are card values consecutive
Use lookup obj and sorted list then itterate through and throw error if one of the cards has skipped a number (Then check for aces at end)

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
- Create 2D array containing each game, players hand and then each card in the format NNSS (Number:Suite)
- Sort array first by suite and then by number (Start with ace at front)
- Are all the cards the same suite? 
- Are the cards values consecutive?
- Are at least 2 of the cards the same value?   

All of these will stop if met as there is no point in checking lower value wins   

- If none of these are won check through and see the highest value win (Starting from the top)
- If one wins at a higher value win count it 
- If not check card values and see who wins in card values
- Draws do not need to be checked for