import {combineReducers} from 'redux';



const songReducers = () => {
    return [ {title: "Scrubs", duration: "4:03"}, {title: "Whast's going on", duration: "2:05"},
        {title: "Jimi is cominmg", duration: "3:01"}, {title: "bumboks", duration: "2:51"}];

};

const selectedSongReducer  = (selectedSong = null, action) =>
{
    if(action.type === "SELECTED_SONG")
    {
        return action.payload;
    }

    return selectedSong;
};


export default combineReducers({
    songs: songReducers,
    selectedSong: selectedSongReducer,
})
