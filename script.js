$('.prettyprint').each(function() {
	if ($(this).prev('.bs-docs-example').length) {
		// fetch & encode html
		var html = $('<div/>').text($(this).prev('.bs-docs-example').html()).html();
		// find number of space/tabs on first line (minus line break)
		var count = html.match(/^(\s+)/)[0].length - 1;
		// replace tabs/spaces on each lines
		var regex = new RegExp('\\n\\s{'+count+'}', 'g');
		var code = html.replace(regex, '\n').trim();
		// other cleanup
		code = code.replace(/=""/g,'');
		$(this).html(code);
	}
});