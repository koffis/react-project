let state = {
    profilePage: {
        postsData: [
            {id: 1, message: 'Hello, bitch', likes: 15},
            {id: 2, message: 'How are u?', likes: 13},
            {id: 3, message: 'Girls, lets fuck', likes: 999}
        ]
    },

    dialogsPage: {
        dialogsData: [
            {id: 1, name: 'Yarik', avatar: 'https://i.ebayimg.com/images/g/bqUAAOSwAxpdrz5d/s-l300.jpg'},
            {id: 2, name: 'Oleg', avatar: 'https://pbs.twimg.com/profile_images/872973760378404864/TkFCDPkz.jpg'},
            {
                id: 3,
                name: 'Max',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqEPsF6NJsVqXpn8KShO7Hvd4z47YQEhnCXvd9HlqXd5po3wW3&s'
            },
            {
                id: 4,
                name: 'Vova',
                avatar: 'https://stezor-img-res.s3.eu-central-1.amazonaws.com/400x0/9dd99de0-75cb-43f1-a50c-d3082022e2a8'
            },
            {
                id: 5,
                name: 'Yura',
                avatar: 'https://pbs.twimg.com/profile_images/837415478452695040/rORx8jgy_400x400.jpg'
            },
            {
                id: 6,
                name: 'Oleg Kononenko',
                avatar: 'https://pbs.twimg.com/profile_images/1015634093558697984/ZR41GPjM.jpg'
            },
            {id: 7, name: 'Andrey', avatar: 'https://pbs.twimg.com/profile_images/968698422751518720/zeP0peZp.jpg'}
        ],
        messagesData: [
            {message: 'Hi', author: 2},
            {message: 'Hello bro wtf???', author: 1},
            {message: 'Fucking dog', author: 2},
            {message: 'Good day', author: 1},
            {message: 'Idiot?', author: 2},
            {message: 'Fuck off', author: 1},
            {message: 'cp ls', author: 2},
        ]
    },

    sideBar: {
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
    }
};

export default state;