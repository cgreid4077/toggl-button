/*jslint indent: 2 */
/*global $: false, document: false, togglbutton: false*/
'use strict';

togglbutton.render('#task:not(.toggl)', {observe: true}, function (elem) {
  var link,
    description = $('.title', elem).textContent,
    project = $('.project', elem).textContent;
    
  link = togglbuton.createTimerLink({
    className: 'taskworld',
    description: description,
    projectName: project
  });
  
  $('.link-list').appendChild(link);
});