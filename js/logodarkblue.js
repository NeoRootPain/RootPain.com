let LogoContent = `
<div style="display:flex;background-image:url('images/logos/bigwhiskeylogodarkblue.gif');margin-left:655px;width:281px;height:150px;"></div>
<div style="display:flex;position:absolute;width:306px;height:78px;">
<a href="index.html"><img src="images/logos/logodarkblue.png" class="logo"></a></div>

`;
document.querySelector('#logocontainer').insertAdjacentHTML('beforeend', LogoContent);
