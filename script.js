function sumbitAction(form) {
	var story = document.getElementById("Story");
	var game = document.getElementById("Game");
	var game2 = document.getElementById("Game2");
	var person = document.getElementById("personaz");
	var predmet = document.getElementById("predmet");

	story.innerHTML = form.nameInput.value;
	game.innerHTML = form.whatGame.value;
	game2.innerHTML = form.whatGame.value;
	person.innerHTML = form.Person.value;
	predmet.innerHTML = form.predmety.value;
}