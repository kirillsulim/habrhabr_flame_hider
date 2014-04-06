arr = $('.comment_item');
for(i=0; i < arr.length; i++) {
	$(arr[i]).children('.comment_body').children('.info').children('.clear ').before(
		'<div style="padding-top: 3px;text-decoration: none;">'+
			'<a href=\"javascript:$(\'#'+arr[i].id+'\').children(\'.reply_comments\').hide();' + 
			'$(\'#'+arr[i].id+'\').css(\'margin-bottom\',\'20px\');' +
			'$(\'#'+arr[i].id+'_hide\').hide();' +
			'$(\'#'+arr[i].id+'_show\').show();\" ' +
			'id="'+ arr[i].id +'_hide" ' +
			'style="text-decoration: none;margin-left: 5px;">[-]</a>' +
			'<a href=\"javascript:$(\'#'+arr[i].id+'\').children(\'.reply_comments\').show();' +
			'$(\'#'+arr[i].id+'\').css(\'margin-bottom\',\'0px\');' +
			'$(\'#'+arr[i].id+'_hide\').show();' +
			'$(\'#'+arr[i].id+'_show\').hide();\" ' +
			'id="'+ arr[i].id +'_show" ' +
			'style="text-decoration: none;margin-left: 5px; display: none;">[+]</a>' +
		'</div>'
	);
}