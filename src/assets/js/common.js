var common = {
	addClass(el,newClass){
		var oldClass = el.className;
		var index = oldClass.split(' ').indexOf(newClass);
		if(index !== -1) return;
		if(oldClass){
			el.className = `${oldClass} ${newClass}`;
		}else{
			el.className = newClass;
		}
	},
	removeClass(el,delClass){
		var oldClass = el.className;
		var arr = oldClass.split(' ');
		var index = arr.indexOf(delClass);
		if(index===-1){
			console.log('无此class');
		}else{
			arr.splice(index, 1);
			el.className = arr.join(' ');
		}

	}
}

export default common;