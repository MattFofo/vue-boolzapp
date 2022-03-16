const app = new Vue({
    el: '#root',
    data: {
        indexActiveChat: 0,
        newMsgSent: 
            {
                textMsg: '',
                date: '',
                statusMsg: 'sent'
            },
        contacts: [
            {
                contactName: 'Michele',
                avatarImg: 'img/avatar_1.jpg',
                activeChat: true,
                dateLastAccess: '12:00',
                chatLog: [
                    {
                        textMsg: 'hai portato fuori il cane?',
                        date: '15/03/2022 13:00',
                        statusMsg: 'sent'
                    },
                    {
                        textMsg: 'ricordati i panni!',
                        date: '15/03/2022 13:20',
                        statusMsg: 'sent'
                    },
                    {
                        textMsg: 'ok',
                        date: '15/03/2022 13:00',
                        statusMsg: 'received'
                    }

                ]
            },
            {
                contactName: 'Fabio',
                avatarImg: 'img/avatar_2.jpg',
                activeChat: false,
                dateLastAccess: '12:00',
                chatLog: [
                    {
                        textMsg: 'ciao!',
                        date: '15/03/2022 13:00',
                        statusMsg: 'sent'
                    },
                    {
                        textMsg: 'ricordati i panni!',
                        date: '15/03/2022 13:20',
                        statusMsg: 'sent'
                    },
                    {
                        textMsg: 'ok',
                        date: '15/03/2022 13:00',
                        statusMsg: 'received'
                    },
                    {
                        textMsg: 'ok',
                        date: '15/03/2022 13:00',
                        statusMsg: 'received'
                    }

                ]

            },
            {
                contactName: 'Sara',
                activeChat: false,
                avatarImg: 'img/avatar_3.jpg',
                dateLastAccess: '12:00',
                chatLog: [
                    {
                        textMsg: 'ci vediamo domani',
                        date: '15/03/2022 13:00',
                        statusMsg: 'sent'
                    },
                    {
                        textMsg: 'ok',
                        date: '15/03/2022 13:00',
                        statusMsg: 'received'
                    }
                ]
            }
        ]
    },
    methods: {
        sendNewMsg() {
            if (this.newMsgSent.textMsg != '') {
                this.contacts[this.indexActiveChat].chatLog.push({...this.newMsgSent});

                this.newMsgSent.textMsg = '';
            }
        }
    }
})