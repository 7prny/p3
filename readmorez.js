function summary(obj) 
	{
	summary.count = summary.count || 0;
	summary.count++;
	var b = location.href.indexOf("/search/label/") == -1 && location.href.indexOf("/search?") == -1;
	var c = location.href.indexOf("/search/label/") != -1;
	if (summary.count <= summaryConf.skip) 
		{
		return;
		
	}
	if (b && !summaryConf.showHome) 
		{
		return;
		
	}
	if (c && !summaryConf.showLabel) 
		{
		return;
		
	}
	var elem = document.getElementById(obj);
	var injuryImages = elem.getElementsByTagName("img");
	if (summaryConf.showImage) 
		{
		var blankQueue = '<img width="' + summaryConf.imgWidth + '" height="' + summaryConf.imgHeight + '"';
		if (summaryConf.imgFloat != "no") 
			{
			var character = summaryConf.imgFloat == "left" ? ' style="float:left;
			margin:0 10px 0 0"' : ' style="float:right;
			margin:0 0 0 10px"';
			blankQueue = blankQueue + character;
			
		}
		blankQueue = blankQueue + (' src="' + (injuryImages.length > 0 ? injuryImages[0].src : summaryConf.defaultThumb) + '" />');
		character = summary.strip(elem.innerHTML, summaryConf.words);
		
	}
	 else 
		{
		blankQueue = "";
		character = summary.strip(elem.innerHTML, summaryConf.wordsNoImg);
		
	}
	elem.innerHTML = blankQueue + character + "...";
	
}
summary.strip = function(tz, r) 
	{
	return tz.replace(/<.*?>/ig, "").split(/\s+/).slice(0, r - 1).join(" ");
	
};
