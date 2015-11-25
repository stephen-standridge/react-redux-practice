import {setEntries, next, vote, INITIAL_STATE} from './core.js'

export default function reducer(state = INITIAL_STATE, action){
	switch(action.type){
		case 'NEXT': return next(state)
		case 'VOTE': return state.update('vote', voteState => vote(voteState, action.entry))
		case 'SET_ENTRIES': return setEntries(state, action.entries)
		default: return state
	}
}