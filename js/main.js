document.getElementById('comingUpContent') .style.display = 'none';
document.getElementById('pastEventsContent') .style.display = 'none';

function hidePanels(){
document.getElementById('comingUpContent') .style.display = 'none';
document.getElementById('pastEventsContent') .style.display = 'none';
document.getElementById('eventsWeekContent') .style.display = 'none';
}


function showComingUp(){
hidePanels();
document.getElementById('comingUpContent').style.display = 'block';
}

function showEventsPast(){
hidePanels();
document.getElementById('pastEventsContent').style.display = 'block';
}

function showEvents(){
hidePanels();
document.getElementById('eventsWeekContent').style.display = 'block';
}
