function nocontextmenu(e) { 
  return false;
}
 
document.oncontextmenu = nocontextmenu; 

document.ondragstart = ()=>{ 
  return false;
}


document.onmousedown = event=>{ 
  e = (event || window.event); 
  if (e.keyCode === 123) { 
    return false;
  } 
}


document.onkeydown = event=>{ 
  e = (event || window.event); 
  if (e.keyCode === 123 || e.ctrlKey && e.shiftKey && e.keyCode === 73 || e.ctrlKey && e.shiftKey && e.keyCode === 75) 
  { 
    return false; 
  } 
  if (event.ctrlKey && event.keyCode === 85)
  {
    return false; 
  } 
}


function addMultiEventListener(element, eventNames, listener)
{ 
  var events = eventNames.split(' '); 
  for (var i = 0, iLen = events.length; i < iLen; i++) 
  { 
    element.addEventListener(
      events[i], 
      e=>{ 
        e.preventDefault(); 
        }
    ); 
   } 
}
 
addMultiEventListener(document, 'contextmenu', 'right_click'); 
addMultiEventListener(document, 'cut copy paste print', 'copy_cut_paste_content');
addMultiEventListener(document, 'drag drop', 'image_drop');
