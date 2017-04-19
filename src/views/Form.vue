<template lang="html">
  <section>
    <form netlify>
  <div id="comment_form">

	<div>
		<input type="text" name="name" id="name" value="" placeholder="Name">
	</div>
	<div>
		<input type="email" name="email" id="email" value="" placeholder="Email">
	</div>
	<div>
		<input type="url" name="website" id="website" value="" placeholder="Website URL">
	</div>
	<div>
		<textarea rows="10" name="comment" id="comment" placeholder="Comment"></textarea>
	</div>
	<div>
		<input type="submit" name="submit" value="Add Comment">
	</div>

</div>
</form>
</section>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>

body {
	font-family: 'Lucida Grande', 'Helvetica Neue', sans-serif;
	font-size: 13px;
}

#comment_form input, #comment_form textarea {
	border: 4px solid rgba(0,0,0,0.1);
	padding: 8px 10px;

	-webkit-border-radius: 5px;
	-moz-border-radius: 5px;
	border-radius: 5px;

	outline: 0;
}

#comment_form textarea {
	width: 350px;
}

#comment_form input[type="submit"] {
	cursor: pointer;
	background: -webkit-linear-gradient(top, #efefef, #ddd);
	background: -moz-linear-gradient(top, #efefef, #ddd);
	background: -ms-linear-gradient(top, #efefef, #ddd);
	background: -o-linear-gradient(top, #efefef, #ddd);
	background: linear-gradient(top, #efefef, #ddd);
	color: #333;
	text-shadow: 0px 1px 1px rgba(255,255,255,1);
	border: 1px solid #ccc;
}

#comment_form input[type="submit"]:hover {
	background: -webkit-linear-gradient(top, #eee, #ccc);
	background: -moz-linear-gradient(top, #eee, #ccc);
	background: -ms-linear-gradient(top, #eee, #ccc);
	background: -o-linear-gradient(top, #eee, #ccc);
	background: linear-gradient(top, #eee, #ccc);
	border: 1px solid #bbb;
}

#comment_form input[type="submit"]:active {
	background: -webkit-linear-gradient(top, #ddd, #aaa);
	background: -moz-linear-gradient(top, #ddd, #aaa);
	background: -ms-linear-gradient(top, #ddd, #aaa);
	background: -o-linear-gradient(top, #ddd, #aaa);
	background: linear-gradient(top, #ddd, #aaa);
	border: 1px solid #999;
}

#comment_form div {
	margin-bottom: 8px;
}
</style>
