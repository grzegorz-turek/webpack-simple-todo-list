import React from 'react';
import style from './Title.css';

const Title = props =>
    <div className={style.TitleFromating}>
      <h1>ToDo List</h1>
      <p>You've got {props.propsNoOfItems} item(s) on your list</p>
    </div>

export default Title;