import { firebaseUrl } from '../../config/api';

import { queryFaves } from '../../config/models';
import { formatSessionData } from '../../lib/dataFormatHelpers';

const GET_FAVES_LOADING = 'GET_FAVES_LOADING';
const GET_FAVES_ERROR = 'GET_FAVES_ERROR';
const GET_FAVES = 'GET_FAVES';

const getFavesLoading = () => ({ type: GET_FAVES_LOADING });
const getFavesError = ( error ) => ({ type: GET_FAVES_ERROR, payload: error });
const getFaves = ( faves, faveIds ) => ({ type: GET_FAVES, payload: { favedSessions: faves, faveIds: faveIds } });

export const _fetchFaves = ( ) => ( dispatch ) => {
  dispatch( getFavesLoading() );
  const faveIds = queryFaves();

  return fetch( `${firebaseUrl}/sessions.json` )
    .then( response => response.json() )
    .then( sessions => sessions.filter( session =>  {
      if( faveIds.includes( session.session_id ) ) {
        return session;
      }
    }))
    .then( filteredSessions => dispatch( getFaves( filteredSessions, faveIds ) ) )
    .catch( error => dispatch( getFavesError( error ) ) )
}

// REDUCER

export default function reducer( state = {
  isLoading: false,
  error: ''
}, action) {
  switch( action.type ) {
    case GET_FAVES_LOADING: {
      return Object.assign({}, state, {
        isLoading: true,
        error: ''
      })
    }
    case GET_FAVES_ERROR: {
      return Object.assign({}, state, {
        isLoading: false,
        error: action.payload
      })
    }
    case GET_FAVES: {
      const formattedSessions = formatSessionData( action.payload.favedSessions );

      return Object.assign({}, state, {
        isLoading: false,
        favedSessions: formattedSessions,
        faveIds: action.payload.faveIds
      });
    }
    default: {
      return state;
    }
  }
}
