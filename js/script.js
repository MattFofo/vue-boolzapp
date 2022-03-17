
const app = new Vue({
    el: '#root',
    data: {
        indexActiveChat: 0,
        msgBarOnFocus: false,
        newMsgSent: 
            {
                textMsg: '',
                date: luxon.DateTime.now().toFormat('MM-dd-yyyy HH:mm:ss'),
                statusMsg: 'sent'
            },
        newMsgReceived: 
            {
                textMsg: 'LOL',
                date: luxon.DateTime.now().toFormat('MM-dd-yyyy HH:mm:ss'),
                statusMsg: 'received'
            },
        contacts: [
            {
                contactName: 'Michele',
                avatarImg: 'img/avatar_1.jpg',
                contactVisible: false,
                dateLastAccess: '12:00',
                chatLog: [
                    {
                        textMsg: 'hai portato fuori il cane?',
                        date: '15/03/2022 13:00',
                        statusMsg: 'sent',
                        dropdown: false
                    },
                    {
                        textMsg: 'ricordati i panni!',
                        date: '15/03/2022 13:20',
                        statusMsg: 'sent',
                        dropdown: false
                    },
                    {
                        textMsg: 'ok',
                        date: '15/03/2022 13:00',
                        statusMsg: 'received',
                        dropdown: false
                    }

                ],
            },
            {
                contactName: 'Fabio',
                avatarImg: 'img/avatar_2.jpg',
                contactVisible: false,
                dateLastAccess: '12:00',
                chatLog: [
                    {
                        textMsg: 'ciao!',
                        date: '15/03/2022 13:00',
                        statusMsg: 'sent',
                    },
                    {
                        textMsg: 'ricordati i panni!',
                        date: '15/03/2022 13:20',
                        statusMsg: 'sent',
                    },
                    {
                        textMsg: 'ok',
                        date: '15/03/2022 13:00',
                        statusMsg: 'received',
                    },
                    {
                        textMsg: 'ok',
                        date: '15/03/2022 13:00',
                        statusMsg: 'received',
                    }

                ]

            },
            {
                contactName: 'Samuele',
                contactVisible: false,
                avatarImg: 'img/avatar_3.jpg',
                dateLastAccess: '12:00',
                chatLog: [
                    {
                        textMsg: 'ci vediamo domani',
                        date: '15/03/2022 13:00',
                        statusMsg: 'sent',
                    },
                    {
                        textMsg: 'ok',
                        date: '15/03/2022 13:00',
                        statusMsg: 'received',
                    }
                ]
            },
            {
                contactName: 'Michele B.',
                avatarImg: 'img/avatar_4.jpg',
                contactVisible: true,
                dateLastAccess: '12:00',
                chatLog: [
                    {
                        textMsg: 'hai portato fuori il cane?',
                        date: '15/03/2022 13:00',
                        statusMsg: 'sent',
                    },
                    {
                        textMsg: 'ricordati i panni!',
                        date: '15/03/2022 13:20',
                        statusMsg: 'sent',
                    },
                    {
                        textMsg: 'ok',
                        date: '15/03/2022 13:00',
                        statusMsg: 'received',
                    }

                ],
            },
            {
                contactName: 'Michele C.',
                avatarImg: 'img/avatar_5.jpg',
                contactVisible: true,
                dateLastAccess: '12:00',
                chatLog: [
                    {
                        textMsg: 'hai portato fuori il cane?',
                        date: '15/03/2022 13:00',
                        statusMsg: 'sent',
                    },
                    {
                        textMsg: 'ricordati i panni!',
                        date: '15/03/2022 13:20',
                        statusMsg: 'sent',
                    },
                    {
                        textMsg: 'ok',
                        date: '15/03/2022 13:00',
                        statusMsg: 'received',
                    }

                ],
            },
            {
                contactName: 'Claudia',
                avatarImg: 'img/avatar_6.jpg',
                contactVisible: true,
                dateLastAccess: '12:00',
                chatLog: [
                    {
                        textMsg: 'hai portato fuori il cane?',
                        date: '15/03/2022 13:00',
                        statusMsg: 'sent',
                    },
                    {
                        textMsg: 'ricordati i panni!',
                        date: '15/03/2022 13:20',
                        statusMsg: 'sent',
                    },
                    {
                        textMsg: 'ok',
                        date: '15/03/2022 13:00',
                        statusMsg: 'received',
                    }

                ],
            },
            {
                contactName: 'Federico',
                avatarImg: 'img/avatar_7.jpg',
                contactVisible: true,
                dateLastAccess: '12:00',
                chatLog: [
                    {
                        textMsg: 'hai portato fuori il cane?',
                        date: '15/03/2022 13:00',
                        statusMsg: 'sent',
                    },
                    {
                        textMsg: 'ricordati i panni!',
                        date: '15/03/2022 13:20',
                        statusMsg: 'sent',
                    },
                    {
                        textMsg: 'ok',
                        date: '15/03/2022 13:00',
                        statusMsg: 'received',
                    }

                ],
            },
            {
                contactName: 'Davide',
                avatarImg: 'img/avatar_8.jpg',
                contactVisible: true,
                dateLastAccess: '12:00',
                chatLog: [
                    {
                        textMsg: 'hai portato fuori il cane?',
                        date: '15/03/2022 13:00',
                        statusMsg: 'sent',
                    },
                    {
                        textMsg: 'ricordati i panni!',
                        date: '15/03/2022 13:20',
                        statusMsg: 'sent',
                    },
                    {
                        textMsg: 'ok',
                        date: '15/03/2022 13:00',
                        statusMsg: 'received',
                    }

                ],
            },
        ]
    },
    methods: {
        sendNewMsg() {
            if (this.newMsgSent.textMsg != '') {
                this.contacts[this.indexActiveChat].chatLog.push({...this.newMsgSent});

                this.newMsgSent.textMsg = '';
                this.newMsgSent.date = this.getDateNow();
                this.receiveNewMsg();
            }
        },
        createMsgReceived() {
            this.contacts[this.indexActiveChat].chatLog.push({...this.newMsgReceived});
            this.newMsgReceived.date = this.getDateNow();
        },
        receiveNewMsg() {
            setTimeout(this.createMsgReceived, 2000)
        },

        getDateNow() {
            return luxon.DateTime.now().toFormat('MM-dd-yyyy HH:mm:ss');
        },
        msgBarNotOnFocus() {
            this.msgBarOnFocus = false;
        },
        
    },
})