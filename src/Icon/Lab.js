import React from 'react';
import {TString} from '../prop_types';
import Base from './Base';

const Lab = (props) => {
  return (
    <Base {...props}>
      <path d="M10.63 10.61h2.67v2.67h-2.67z"/>
      <path d="M23.89 12c0-1.87-2.1-3.21-5-4 .79-2.93.68-5.41-.93-6.34S14.11 1.83 12 4C9.82 1.83 7.62.69 6 1.62S4.28 5 5.07 8c-2.94.78-5 2.12-5 4s2.09 3.2 5 4c-.1.4-.2.8-.27 1.17-.63 3.33.31 4.65 1.21 5.17a2.51 2.51 0 0 0 1.25.33c1.42 0 3.08-1.06 4.71-2.69 1.63 1.63 3.3 2.69 4.71 2.69a2.52 2.52 0 0 0 1.26-.33c.9-.52 1.84-1.84 1.21-5.17-.07-.37-.17-.77-.28-1.17 2.93-.85 5.02-2.19 5.02-4zM12 7a1.46 1.46 0 0 1 .16.19h-.31zm1.61 2.22c.28.43.56.88.84 1.37s.52.94.76 1.41c-.24.46-.49.92-.76 1.41s-.56.93-.84 1.36H10.4c-.28-.43-.56-.88-.84-1.36s-.56-1-.8-1.41a29.247 29.247 0 0 1 1.6-2.78h1.6c.6 0 1.09-.07 1.61-.05zM5.67 14C3.29 13.41 2 12.52 2 12s1.26-1.47 3.64-2.1c.26.69.55 1.39.88 2.09-.3.66-.6 1.36-.85 2.01zM7 3.34a.58.58 0 0 1 .28-.06c.65 0 1.88.68 3.35 2.17-.47.55-.93 1.17-1.37 1.81-.77.06-1.53.16-2.26.28-.64-2.37-.5-3.91 0-4.2zm.73 10.88l.07.13.08.13h-.24zm-.1-4.77h.25l-.08.13-.07.14c-.04-.12-.07-.2-.1-.27zM7 20.55c-.37-.21-.6-1.26-.26-3.07.07-.37.16-.74.27-1.13.72.13 1.48.22 2.25.29.44.63.9 1.23 1.37 1.8-1.73 1.75-3.14 2.4-3.63 2.11zM12 17l-.15-.2h.31zm5 3.6c-.49.29-1.9-.36-3.63-2.11.47-.57.93-1.17 1.37-1.8.77-.07 1.52-.16 2.25-.29.1.39.2.76.27 1.13.27 1.76.04 2.81-.33 3.02zm-.8-6.2l.07-.13.09.23h-.24zm-.08-4.94h.25c0 .07-.07.15-.1.23s-.05-.09-.07-.14zm.87-1.87c-.72-.12-1.48-.22-2.25-.28-.44-.64-.9-1.25-1.37-1.81C14.77 4 16 3.28 16.64 3.28a.6.6 0 0 1 .29.06c.5.29.64 1.83-.01 4.2zM18.26 14c-.26-.69-.55-1.39-.88-2.1.32-.7.62-1.4.87-2.09 2.39.63 3.65 1.52 3.65 2.1s-1.26 1.5-3.64 2.09z"/>
      <path fill="none" d="M.1.07h23.86v23.86H.1z"/>
    </Base>
  );
};

Lab.propTypes = {
  color: TString,
};

export default Lab;
