let LogoContent = `
<div style="display:flex;background-image:url('images/bigwhiskeylogo.png');margin-right:auto;width:246px;height:150px;"></div>
<div style="display:flex;position:absolute;width:auto;height:auto;">
<a href="index.html"><img src="images/logo.png" class="logo"></a></div>

`;
document.querySelector('#logocontainer').insertAdjacentHTML('beforeend', LogoContent);
