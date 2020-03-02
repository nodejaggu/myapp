<!DOCTYPE html>
<html lang="en">
<head>
  <title>Gamooga Implementation</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <link rel="shortcut icon" type="image/x-icon" href="./public/images/key-to-success.png">
	<!-- Google Tag Manager -->
	<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
	new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
	j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
	'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
	})(window,document,'script','dataLayer','GTM-5XB4NHH');</script>
	<!-- End Google Tag Manager -->
	<style type="text/css">
	@font-face {
    font-family: 'DINRoundOT';
    src: url("https://www.seniority.in/skin/frontend/default/blank/fonts/DINRoundOT.woff") format("woff");
    font-style: normal;
    font-stretch: normal;
}
body {
	font-family:  'DINRoundOT';
	font-size: 18px;
	color: #000000;
	font-weight: normal;
}
.boxheight{
	height: auto;
}
.pd-15{
	padding-top: 15px;
}
.pd{
	padding-top: 50px;
	padding-bottom: 50px;
}
.pd1{
	padding-top: 200px;
	
}
.nopadding {
   padding: 0 !important;
   margin: 0 !important;
}
p.text1{
	font-family: 'DINRoundOT';
	font-size: 20px;
	color: #000000;
	font-weight: normal;
	text-align: center;
	line-height: normal;
}
p.text1 span{
	font-weight: bold;
}

.bg-img{
	background: url("./public/images/Christmas-04.jpg") no-repeat center;
    -moz-background-size: cover;
    -webkit-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    width: 100%;
    overflow: hidden;
}
#login{
	background-color: #FFFFFF;
	min-height: 300px;
	margin-top: 200px;
	padding: 15px;
	border: 4px  solid #1f8b7e;
	}
#thank_you{
	background-color: #FFFFFF;
	min-height: 300px;
	margin-top: 200px;
	padding: 15px;
	border: 4px  solid #1f8b7e;
	}
.user{
	font-family: 'DINRoundOT';
	font-size: 14px;
	color: #000000;
}
.form-control{
	height: 40px;
}
.check-text{
	font-family: 'DINRoundOT';
	border-radius: 0px;
	font-size: 14px;
	
}
/* Style the submit button with a specific background color etc */
input[type=submit] {
  background-color: #99cc33;
  color: white;
  padding: 10px 50px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

/* When moving the mouse over the submit button, add a darker green color */
input[type=submit]:hover {
  background-color: #add263;
}
.png-img{
	text-align: center;
	padding-top: 100px;
	padding-bottom: 100px;
}

	</style>
	<!--<script>
			$(function(){
				$("#header").load("./views/header.html"); 
				//$("#footer").load("footer.html"); 
			});
		</script>-->
</head>
<body>
	<!-- Google Tag Manager (noscript) -->
	<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5XB4NHH"
	height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
	<!-- End Google Tag Manager (noscript) -->

<div class="container-fluid">
		<div id="header">
			<div class="topnav">
                <a class="active" href="/" style="margin-left: 50px !important;">Home</a>
                <a href="/category">Categories</a>
                <a href="/seniority">Seniority</a>
                <a href="#about">About</a>
			  </div>  
			</div>
	<div class="row">
	<div class="col-md-12 nopadding">
	<img src="./public/images/Christmas-01.jpg" class="img-responsive">
	</div>
	 
	<div class="col-md-6 col-md-offset-3 pd">
	<p class="text1">The act of giving is more than the gift. As you cross everyday streets, stumble upon faces anew,<br>
you miss out on a chance to lend a helping hand or put a smile on the faces you go past.<br>
Here’s your chance to do that in just one easy click!</p>
	<p class="text1 pd-15">For every unique and valid registration, Seniority will donate Rs.10 to HelpAge India. By simply filling a form, you can gift an evergreen smile to someone. <span>#GiftAgelessJoy.</span></p>
	</div>
	
	<div class="col-md-12 nopadding bg-img img-responsive">
		<div class="container ">
			<div class="row">
				<div class="col-md-4"></div>
				<div class="col-md-4" id="login">
					<!-- form start-->
					<form action="javascript:parent.personal_info()">
					  <div class="form-group"><!-- group 1-->
						<label class="user">Name :</label>
							<div class="input-group">
							<input id="name" name="t1" type="text" class="form-control" placeholder="Enter Name" size="42">
						  </div>
					  </div>
						
						<div class="form-group"><!-- group 1-->
						<label class="user">Email :</label>
							<div class="input-group">
							<input id="email" name="t1" type="email" class="form-control" placeholder="Enter Email" size="42">
						  </div>
					  </div>
						
						<div class="form-group"><!-- group 1-->
						<label class="user">Mobile :</label>
							<div class="input-group">
							<input id="mobile" name="t1" type="text" class="form-control" placeholder="Enter Number" size="42">
						  </div>
					  </div>
						
						  <label class="check-text">
							<input type="checkbox" checked="checked" name="remember" style="font-size: 14px"> Keep me updated with more<br>
							such campaigns & offers.
							</label>
					    
						<div class="text-center"><input type="submit" value="SUBMIT"></div>
						
					</form>
					
				</div>
				<div class="col-md-4" id="thank_you" style="display:none">
					<!-- form start-->
					<p style="text-align: center;padding-top: 100px;">  Thanks for providing your details. We will get back to you soon. </p>
					
				</div>
				<div class="col-md-4"></div>
				<div class="row text-center">
				<div class="col-md-4 col-md-offset-4 text-center">
					<div class="png-img text-center"><img src="./public/images/logo.png" class="img-responsive"></div>
				</div>
				</div>
				
			
		</div>
		<div class="row boxheight nopadding">
	
	</div>
	</div>
</div>
	
</div>

	


<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</body>
</html>
