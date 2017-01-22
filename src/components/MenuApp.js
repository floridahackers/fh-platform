import React from 'react';
import { render } from 'react-dom'; 

const menu_items = [
  {
    label: 'Home',
    subtitle: 'Landing page + links to join the community.',
    path: ''
  },
  {
    label: 'Calendar',
    subtitle: 'Crowdsourced list of events to attend.',
    path: 'calendar.html'
  },
  {
    label: 'About FH',
    subtitle: 'The ins and outs of how the community functions.',
    path: 'about.html'
  },
  // {
  //   label: 'Add an Event',
  //   subtitle: 'Find out how to add an event to the calendar.',
  //   path: 'add-event.html'
  // },
];

class MenuApp extends React.Component {
  render() {
    return (
      <div className="menu-app__wrap">
        <div className="top">
          <div className="right">
            <img src="images/logo.png" />
            <h1>Florida Hackers</h1>
          </div>
          <button 
            onClick={(e) => this.props.onClose(e)}> 
            &#10006; 
          </button>
        </div>

        <div className="bottom">
          { menu_items.map((item, i) => <MenuItem {...item} key={i} />) }
        </div>
      </div>
    );
  }
}

const MenuItem = ({label, subtitle, path}) => {
  return (
    <div>
      <a href={path} className="menu-app__item">
        <span>{label}</span>
        <p>{subtitle}</p>
      </a>
      <div className="decorator"></div>
    </div>
  );
}

var menu_trigger = document.querySelector('#menu-trigger');
var menu_container = document.createElement('div');
menu_container.classList.add('menu-app');
document.body.append(menu_container);


var closeMenu = () => {
  menu_container.classList.remove('is-active');
  document.body.classList.remove('is-menu-active');
}
var openMenu = () => {
  document.body.classList.add('is-menu-active');
  menu_container.classList.add('is-active');
}

var onClose = (event) => {
  event.preventDefault();
  closeMenu();
}
menu_trigger.addEventListener('click', (event) => {
  event.preventDefault();
  openMenu();
});

render(<MenuApp onClose={onClose} />, menu_container);

$(document).ready(function() {
  $('#header').sticky();  
  $(window).on('resize', function() {
    $('#header').sticky();  
  });
  $(window).on('scroll', function(){
    $('#header').sticky();
  });
});




