arr = $('.comment_item');
for(i=0; i < arr.length; i++) 
	$(arr[i]).children('.comment_body').children('.info').children('.clear ').before(
		'<div>'+
			'<a href=\"javascript:$(\'#'+arr[i].id+'\').children(\'.reply_comments\').hide();\"'+
			'alt=\"Свернуть комментарии\">[-]</a>' +
			'<a href=\"javascript:$(\'#'+arr[i].id+'\').children(\'.reply_comments\').show();\"'+
			'alt=\"Развернуть комментарии\">[+]</a>'+
			'</div>'
	);