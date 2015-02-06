jQuery(document).ready(function ($) {
	function playlistreload() {
		/*
		$("#onair #playlist").load('http://www.wrek.org/wp-content/scripts/recent.php');
		$("#onair #stream-show").load('http://www.wrek.org/wp-content/scripts/now_playing_show.php');
		$("#onair #stream-song").load('http://www.wrek.org/wp-content/scripts/now_playing_song.php');
		$("#hd2 #stream-song").load('http://www.wrek.org/wp-content/scripts/now_playing_song_hd2.php');
		*/
		//testing:
		$("#onair #stream-show").html("<a href=\"http://www.wrek.org/shows/blocks\" target=\"_blank\">Rock, Rhythm, and Roll</a>")
		$("#onair #stream-song").html("<a href=\"http://www.wrek.org/playlist\" target=\"_blank\">\"The Purple Bottle\" by Animal Collective</a>")

	}
	playlistreload();
	setInterval(playlistreload, 60000);
});