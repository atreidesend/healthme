import React from 'react';
import Menu from './menu.jsx';

const iconTypeMap = {'activity': 'directions_run',
                     'daily': 'brightness_4',
                     'feeling': 'mood',
                     'meal': 'local_pizza'};

const Journal = ({entries}) => (
  <div className="journal-container shadow">
    <div className="journal-header">
      <span className="journal-header-title">Recent journal entries...</span>
      <button id="new-journal-button" className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab">
        <i className="material-icons">add</i>
      </button>
      {renderMenu()}
    </div>
    <ul className="mdl-list journal-list">
      {entries.map((entry, i) => <JournalEntry entry={entry} key={`jrn${i}`}/>)}
    </ul>
  </div>
);

const renderMenu = () => {
  var children = [
    <li key="daily" className="mdl-menu__item journal-new-menu-item">New Daily</li>,
    <li key="feeling" className="mdl-menu__item journal-new-menu-item">New Feeling</li>,
    <li key="meal" className="mdl-menu__item journal-new-menu-item">New Meal</li>,
    <li key="activity" className="mdl-menu__item journal-new-menu-item">New Activity</li>,
  ];
  return <Menu className="journal-new-menu" children={children} ripple={true} target={'new-journal-button'} />
}

const JournalEntry = ({entry}) => (
  <li className="mdl-list__item mdl-list__item--three-line journal-entry">
    <span className="mdl-list__item-primary-content">
      <i className="material-icons mdl-list__item-avatar">{iconTypeMap[entry.type]}</i>
      <span>{entry.type}</span>
      <span className="mdl-list__item-text-body">
        {entry.desc}
      </span>
    </span>
    <span className="mdl-list__item-secondary-content">
      {entry.date}
    </span>
  </li>
);

export default Journal;