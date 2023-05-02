$(function(){
		iod=$('.modal-body img');
		mtk=$('.modal-dialog')
 	for (var i=0;i<iod.length;i++)
{ 
    
    img_w=iod[i].naturalWidth+32+'px';
	console.log(img_w);
    // mtk[i].style.;
    $('div.modal-dialog').eq(i).css('min-width',img_w);
}

   
});
