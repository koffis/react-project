let initialState = {
    onlineFriends: [
        {
            id: 2,
            name: 'Oleg',
            avatar: 'https://pbs.twimg.com/profile_images/872973760378404864/TkFCDPkz.jpg',
            onlineStatus: 1
        },
        {
            id: 3,
            name: 'Max',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqEPsF6NJsVqXpn8KShO7Hvd4z47YQEhnCXvd9HlqXd5po3wW3&s',
            onlineStatus: 1
        },
        {
            id: 4,
            name: 'Vova',
            avatar: 'https://stezor-img-res.s3.eu-central-1.amazonaws.com/400x0/9dd99de0-75cb-43f1-a50c-d3082022e2a8',
            onlineStatus: 0
        },
        {
            id: 5,
            name: 'Yura',
            avatar: 'https://pbs.twimg.com/profile_images/837415478452695040/rORx8jgy_400x400.jpg',
            onlineStatus: 1
        },
        {
            id: 6,
            name: 'Oleg Kononenko',
            avatar: 'https://pbs.twimg.com/profile_images/1015634093558697984/ZR41GPjM.jpg',
            onlineStatus: 0
        }
    ]
};

const sideBarReducer = (state = initialState, action) => {

    return state;
};

export default sideBarReducer;