# project1
Project 1 Memory Game

## User Stories
I want to click a card, have it turn over, then click another card, have it turn over.  If they match, they should stay open.  If they don’t match, they should close after a couple of seconds.  
I want to keep opening and closing until I find all the matches.
I want to know how much time it took me to complete and how many moves it took. 
I want to click a button and get a fresh deck of cards whenever I decide.
I want to be able to select the level of difficulty.  More difficult = less time before the mis-matches turn back over.
I want to be able to select a theme/set of images for the back side of the cards.
I’d like to be able to select a theme for the cards.

## Feature Wish Lists

###Bronze
- 4x4 grid
- Click start to start the game
- Click a card, it turns over
- Click another card, it turns over
- If the cards match, they stay open.
- If they don’t match, they close after a short time
- When I get all the matches, I win
- Click reset to restart the game with a reshuffled deck of cards

###Silver
- Time the game and show how long it takes to find all the matches.
- Count the number of guesses it takes to find all the matches.
- Select a theme for the back of the card
- Select a theme for the front of the card

###Gold
- Select n x n grid size
- Select user
- Save history
- Import my own photos

##Self-Assessment
I actually did this twice, once by hard-coding everything, then reworking it 
to use jQuery/javascript.  I had the hard-coded version mostly working when I decided to re-do it.  I thought it would be 
easier to convert than it was. That was probably a bad idea, it ate up a lot of time. I learned a fair amount doing it that 
way, though.

The first/obvious concern is that it doesn't look like much.  I was more concerned with functionality than 
appearance, and didn't start thinking about appearance until Wednesday, which was probably another mistake.  
HTML positioning is not a particular strength of mine, and I need to work on it. This was complicated because the card 
flipping requires a certain positioning structure (I stole it from a guy on the internet and I'm not 100% sure I understand
it, but it more or less works); I had the positioning look good with flex boxes, but I couldn't get the card 
flipping to work in the flex positioning structure.  I think that if I had made another layer of div abstraction 
I may have been able to get it to work.  

It's also a little sensitive.  The start/restart logic is a little off and I should probably completely rethink/revise 
it.  It doesn't shuffle the cards when you click start or reset, and I want it to, but for some reason when I had it do 
that the card flipping wouldn't work.  It also goes nuts if you accidentally click something while it's holding unmatched
cards open before turning them back over.  
work withtin
