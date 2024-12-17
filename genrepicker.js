// Step 0: Reset variables in case the user reloads the page.
var secondaryChoice = "";
var thirdChoice = "";
var recommendation = "";

// Step 1: Ask user's age range choice
const ageRangeChoice = prompt("Type the number of the age range you would like to read: 1. Adult 2. Young Adult");

// Step 2: Create a second-level variable
// var secondaryChoice;
if (ageRangeChoice == 1) {
secondaryChoice = prompt("Type the number of the genre you want to read: 11. Mystery 12. Romance 13. Dystopian 14. Dark Academia 15. Fantasy");        
} else if (ageRangeChoice == 2) {
secondaryChoice = prompt("Type number of genre you want: 21. Mystery 22. Romance 23. Dystopian 24. Dark Academia 25. Fantasy");
} else {
secondaryChoice = "You are still weak and lack discipline.";
}


// Step 3: Create a third-level choice if required
// var thirdChoice;
// var recommendation;
if (secondaryChoice == 12) {  // Romance
thirdChoice = prompt("Type the number of the subgenre you want: 121. Dark Romance 122. Sad Romance 123. Cute Romance");
} else if (secondaryChoice == 13) {  // Dystopian
thirdChoice = prompt("Type number of plot you want: 131. Destroying the truth 132. Altering the truth");
} else if (secondaryChoice == 15) {  // Fantasy
thirdChoice = prompt("Type number of the level you want to read: 151. easy 152. medium 153. hard");
} else if (secondaryChoice == 21) {  // YA Mystery
thirdChoice = prompt("Type number of subplot you want: 211. Solving closed case 212. Solving your own mystery");
} else if (secondaryChoice == 22) {  // YA Romance
thirdChoice = prompt("type number of romance trope you want: 221. Friends to lovers 222. Academic Rivals to Lovers 223. Enemies to Lovers 224. Forbidden Love 225. Falls for Wrong Person");
} else if (secondaryChoice == 23) {  // YA Dystopian
thirdChoice = prompt("type number of conflict you want: 231. mass murder competition 232. avoiding brutal murder 233. disobeying abusive government");
} else if (secondaryChoice == 24) {  // YA Dark Academy
thirdChoice = prompt("type number of job you prefer: 241. Journalist 242. Architect");
} else if (secondaryChoice == 25) {  // YA Fantasy
thirdChoice = prompt("type number of plot you want: 251. destroying abusive government 252. living without powers 253. helping evil villain");
} else {
    thirdChoice = "You are still weak and lack discipline.";
}

// Step 4: based on thirdChoices, set recommendations.
if (secondaryChoice == 11) {  // Mystery
recommendation = "You should read Bullet Train by Kotaro Isaka.";
} else if (secondaryChoice == 14) {  // Dark Acadamia
recommendation = "You should read Babel by R.F. Kuang.";
} else if (thirdChoice == 121) {  		// Dark Romance
recommendation = "You should read Butcher & Blackbird by Brynne Weaver";
} else if (thirdChoice == 122) { 	// Sad Romance
recommendation = "You should read The Dead Romantics by Ashley Poston";
} else if (thirdChoice == 123) {         // Cute Romance
    recommendation = "You should read Check & Mate by Ali Hazelwood";
} else if (thirdChoice == 131) {         // Destroying the truth
    recommendation = "You should read Farenheit 451 by Ray Bradbury";
} else if (thirdChoice == 132) {         // Altering the truth
    recommendation = "You should read 1984 by George Orwell";
} else if (thirdChoice == 151) {         // easy
    recommendation = "You should read A Court of Thornes and Roses by Sarah J. Maas";
} else if (thirdChoice == 152) {         // medium
    recommendation = "You should read Fourth Wing by Rebecca Yarros";
} else if (thirdChoice == 153) {         // hard
    recommendation = "You should read A Game of Thrones: A Song of Ice and Fire";
} else if (thirdChoice == 211) {         // Solving closed case
    recommendation = "You should read A Good Girl's Guide to Murder by Holly Jackson";
} else if (thirdChoice == 212) {         // Solving your own mystery
    recommendation = "You should read The Inheritance Games by Jennifer Lynn Barnes";
} else if (thirdChoice == 221) {         // Friends to lovers
    recommendation = "You should read If He Had Been with Me by Laura Nowlin";
} else if (thirdChoice == 222) {         // Academic Rivals to Lovers
    recommendation = "You should read I Hope This Doesn't Find You by Ann Liang";
} else if (thirdChoice == 223) {         // Enemies to Lovers
    recommendation = "You should read The Cruel Prince by Holly Black";
} else if (thirdChoice == 224) {         // Forbidden Love
    recommendation = "You should read XOXO by Axie Oh";
} else if (thirdChoice == 225) {         // Falls for Wrong Person
    recommendation = "You should read The Girl Who Fell Beneath the Sea by Axie Oh";
} else if (thirdChoice == 231) {         // mass murder competition
    recommendation = "You should read Battle Royale by Koushun Takami";
} else if (thirdChoice == 232) {         // avoiding brutal murder
    recommendation = "You should read #MMurderTrending by Gretchen McNeil";
} else if (thirdChoice == 233) {         // disobeying abusive government
    recommendation = "You should read Shatter Me by Tahereh Mafi";
} else if (thirdChoice == 241) {         // Journalist
    recommendation = "You should read Divine Rivals by Rebecca Ross";
} else if (thirdChoice == 242) {         // Architect
    recommendation = "You should read A Study in Drowning by Ava Reid";
} else if (thirdChoice == 251) {         // destroying abusive government
    recommendation = "You should read War Hour by Lauren Loscig";
} else if (thirdChoice == 252) {         // living without powers
    recommendation = "You should read Powerless by Lauren Roberts";
} else if (thirdChoice == 253) {         // helping evil villain
    recommendation = "You should read Assistant to the Villain by Hannah Nicole Maehrer";
}


// Debugging piece
if (ageRangeChoice == 1) {
message1 = "You chose Adult";
} else if (ageRangeChoice == 2) {
message1 = "You chose Young Adult";
} else {
message1 = "You are weak and lack discipline.";
}

// Display the result in the HTML
document.getElementById("showage").innerText = message1;
document.getElementById("secondaryChoice").innerText = secondaryChoice;
document.getElementById("thirdChoice").innerText = thirdChoice;
document.getElementById("recommendation").innerText = recommendation;