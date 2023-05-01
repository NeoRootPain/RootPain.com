let LeftMenuContent = `
		<div class="navbarcontainer">
		<div class="navigationbar" style="background-image:url('images/sidemenus/navigationbarred.png');"></div>
		<a href="index.html">
			<img src="images/buttons/navbarhomebutton.png" class="button"></a>
		<a href="blogmain.html">
			<img src="images/buttons/navbarblogbutton.png" class="button" style="margin-top:-1px;"></a>
		<a href="downloadsmain.html">
			<img src="images/buttons/navbardownloadsbutton.png" class="button" style="margin-top:-1px;"></a>
		<a href="artmain.html">
			<img src="images/buttons/navbarartbutton.png" class="button" style="margin-top:-1px;"></a>
		<a href="fanartmain.html">
			<img src="images/buttons/navbarfanartbutton.png" class="button" style="margin-top:-1px;"></a>
		<a href="links.html">
			<img src="images/buttons/navbarlinksbutton.png" class="button" style="margin-top:-1px;"></a>
		<a href="donate.html">
			<img src="images/buttons/navbardonatebutton.png" class="button" style="margin-top:-1px;"></a>
		<a href="comissions.html">
			<img src="images/buttons/navbarcomissionsbutton.png" class="button" style="margin-top:-1px;"></a>
		<a href="guestbook.html">
			<img src="images/buttons/navbarguestbookbutton.png" class="button" style="margin-top:-1px;"></a>
		<a href="changelog.html">
			<img src="images/buttons/navbarchangelogbutton.png" class="button" style="margin-top:-1px;"></a>
		<a href="https://junessai.github.io/Old-JuneSSai.net-Archive/">
			<img src="images/buttons/navbaroldsitebutton.png" class="button" style="margin-top:-1px;"></a>
		<a href="about.html">
			<img src="images/buttons/navbaraboutbutton.png" class="button" style="margin-top:-1px;"></a>
		<div class="handlebarside" style="background-image:url('images/sidemenus/handlebarsidered.png');"></div>
		</div>

		<div class="affbarcontainer">
			<div class="affiliatesbar" style="background-image:url('images/sidemenus/affiliatesbarred.png');"></div>
		<a href="https://gameslime.com/">
			<img src="images/buttons/gameslimebutton.png" class="button"></a>
		<a href="https://sagerankov.com/">
			<img src="images/buttons/staggernightbutton.png" class="button"></a>
		<a href="https://qmaury.com/">
			<img src="images/buttons/qmaurybutton.png" class="button" style="margin-top:-1px;"></a>
		<a href="https://www.storkinspork.com/">
			<img src="images/buttons/storkinsporkbutton.png" class="button" style="margin-top:-1px;"></a>
		<a href="links.html">
			<img src="images/buttons/morebutton.png" class="button" style="margin-top:-1px;"></a>
		<div class="handlebarside" style="background-image:url('images/sidemenus/handlebarsidered.png');"></div>
		</div>

		<div class="socialsbarcontainer">
			<div class="socialsbar" style="background-image:url('images/sidemenus/socialsbarred.png');"></div>
			<a href="https://junessai.newgrounds.com/">
				<img src="images/buttons/newgroundsbutton.png" class="button"></a>
			<a href="https://discord.gg/tYxjnQBpxm" target="_blank">
				<img src="images/buttons/discordbutton.png" class="button" style="margin-top:-1px;"></a>
			<div class="handlebarside" style="background-image:url('images/sidemenus/handlebarsidered.png');"></div>
		</div>
`;
document.querySelector('#leftmenu').insertAdjacentHTML('beforeend', LeftMenuContent);
