function slideChange(sliderID, slideDirection){
    var currentSlider=document.getElementById(sliderID);
    var slides=currentSlider.getElementsByClassName('slider_slide');
    for (var i=0; i<slides.length; i++){
        if(slides[i].classList.contains('slider_slide_active')){
            slides[i].classList.remove('slider_slide_active');
            slides[i].classList.add('slider_slide_inactive');
            if (slideDirection=='left'){
                if(i==0){i=slides.length-1;} else{i--;}
            }
            else{
                if(i==slides.length-1) {i=0;} else{i++}
            }
            slides[i].classList.remove('slider_slide_inactive');
            slides[i].classList.add('slider_slide_active');
            break;
        }
    }
}
function ChangeByTime(sliderID){
    var currentSlider=document.getElementById(sliderID);
    var slides=currentSlider.getElementsByClassName('slider_slide');
    for (var i=0; i<slides.length; i++){
        if(slides[i].classList.contains('slider_slide_active')){
            slides[i].classList.remove('slider_slide_active');
            slides[i].classList.add('slider_slide_inactive');
            if(i==slides.length-1) {i=0;} else{i++};
            slides[i].classList.remove('slider_slide_inactive');
            slides[i].classList.add('slider_slide_active');
            break;
        }
    }
}
function CallChanges(sliderID){
    setInterval(function(){ChangeByTime(sliderID);},4000)
}

function chpok(id){
    elem = document.getElementById(id); 
    state = elem.style.display; 
    if (state =='') elem.style.display='none'; 
    else elem.style.display=''; 
}

function Enable(id){
    elem = document.getElementById(id); 
    elem.style.display='none'; 
}
function form_data_ver()
{
	var t1 = document.forms.Form.t1.value;
	var t2 = document.forms.Form.t2.value;
    var fv = false;
	if (t1 != '' && t2 != '' ){
		fv = true;
	}
	else if (t1 == ''&& t2 != ''){
		style = document.createElement('link');
        style.rel   = 'stylesheet';
        style.type  = 'text/css';
        style.href  = "./Alter1.css";
        document.head.appendChild(style);
    }  
    else if (t2 == ''&& t1 != ''){
        style = document.createElement('link');
        style.rel   = 'stylesheet';
        style.type  = 'text/css';
        style.href  = "./Alter2.css";
        document.head.appendChild(style);
    }
    else{
        style = document.createElement('link');
        style.rel   = 'stylesheet';
        style.type  = 'text/css';
        style.href  = "./Alter3.css";
        document.head.appendChild(style);
    }
	return fv;
}