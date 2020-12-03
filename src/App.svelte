<script>

function animate() {
	console.log('animating...');
}
	
</script>

<main>
	<div class="page-container">
	  <div class="phone">
		<div class="screen"></div>
	  </div>
	</div>
</main>

<style type="text/scss">

.page-container {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	width: 100%;
}

.phone {
	display: flex;
	justify-content: center;
	align-items: center;
  	position: relative;
	margin: 0 auto;
	width: 220px;
	height: 450px;
    border-radius: 35px;
    box-shadow: inset 6px -6px 15px rgba(145,160,180,.45), -10px 30px 40px rgba(118,146,180,.18);
    top: auto;
    left: -30px;
    z-index: auto;
    background: linear-gradient(to bottom left,#f3f8fb,#e5ebf2);
    opacity: 1;
    transition: none;
    pointer-events: auto;
	transition: transform 0.1s ease-out;
  	//transform: matrix3d(.830503,.0167194,0,.00110922,.0915284,.835769,0,.0000440454,0,0,1,0,59,90,0,1);
}

.screen {
    width: 200px;
    height: 354px;
	border-radius: 12px;
	background-image: url("../assets/test.gif");
	background-position: center;
	background-size: contain;
	background-repeat: no-repeat;
    box-shadow: -1px 1px 4px rgba(107,124,147,.5);
    transition: opacity 1s ease;
    transform-origin: 0 0;
    overflow: hidden;
    will-change: transform;
	//transform: matrix3d(.5973395145971294,.01568918980316438,0,.00006432768215272425,.02390394939549776,.5315124761457759,0,-.00003167869727711868,0,0,1,0,649,51,0,1);
}
</style>