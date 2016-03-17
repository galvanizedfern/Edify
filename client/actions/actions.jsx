import $ from 'jquery';

export const changeCurrentVideo = (value) => {
  return {
    type: 'CHANGE_VIDEO',
    value: value
  };
};

export const requestVideoList = () => {
  return {
    type: 'REQUEST_VIDEOS',
  };
};

export const receivedVideoList = (videos) => {
  return {
    type: 'RECEIEVED_VIDEOS',
    videos:videos
  };
};

export const videoFetch = () => {
	return(dispatch) => {
		dispatch(requestVideoList());
		$.get('/fetch')
		.then((response) => 
			{
				console.log("from action: ",response);
				dispatch(receivedVideoList(response));
			});
	}
};


