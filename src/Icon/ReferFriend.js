import React from 'react';
import {TString} from '../prop_types';
import Base from './Base';

const ReferFriend = (props) => {
  return (
    <Base {...props}>
      <path d="M21.59 2.28A1.5 1.5 0 0 0 20 2.6L.09 22.49H22.5V3.65a1.49 1.49 0 0 0-.91-1.37zM20.5 20.49H4.91L20.5 4.9z"/>
      <path d="M12.46 20c1.07 0 1.32-.56 1.33-.58a.12.12 0 0 0-.09-.17.17.17 0 0 0-.2.07s-.2.41-1 .41-1-.39-1-.41a.16.16 0 0 0-.2-.07.12.12 0 0 0-.09.17s.2.58 1.25.58zM10.15 18.82h.08a.57.57 0 0 0 .54-.58v-1.89a.57.57 0 0 0-.54-.58h-.08a.56.56 0 0 0-.53.58v1.89a.56.56 0 0 0 .53.58zM14.75 18.82h.08a.57.57 0 0 0 .54-.58v-1.89a.57.57 0 0 0-.54-.58h-.08a.56.56 0 0 0-.53.58v1.89a.56.56 0 0 0 .53.58zM2.5 9.46h2.73v2.73a1 1 0 1 0 2 0V9.46H10a1 1 0 0 0 0-2H7.23V4.73a1 1 0 1 0-2 0v2.73H2.5a1 1 0 0 0 0 2z"/>
      <path fill="none" d="M0-.01h24v24H0z"/>
    </Base>
  );
};

ReferFriend.propTypes = {
  color: TString,
};

export default ReferFriend;
