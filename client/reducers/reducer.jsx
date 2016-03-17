import { combineReducers } from 'redux'
import $ from 'jquery';

const CurrentVideo = (state = "a", action) => {
  switch (action.type) {
    case 'CHANGE_VIDEO':
    console.log(action.value);
      return action.value
    default:
      return state;
  }
}

const VideoList = (state = {}, action) => {
	var newstate = Object.assign({},state);
	switch (action.type) {
		case 'RECEIEVED_VIDEOS':
			console.log("from reducer: ",action.videos);
			newstate.videos = action.videos;
			return newstate;
		default:
			return newstate;	
	}
}

const VideoAppHandler = combineReducers({
  currentVideo: CurrentVideo,
  videos:VideoList
});

export default VideoAppHandler;