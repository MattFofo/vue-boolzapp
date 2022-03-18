
const app = new Vue({
    el: '#root',
    data: {
        indexActiveChat: 0,
        msgBarOnFocus: false,
        searchContact: '',
        newMsgSent: 
            {
                textMsg: '',
                date: luxon.DateTime.now().toFormat('MM/dd/yyyy HH:mm:ss'),
                statusMsg: 'sent',
                dropdownActive: false
            },
        newMsgReceived: 
            {
                textMsg: 'LOL',
                date: luxon.DateTime.now().toFormat('MM/dd/yyyy HH:mm:ss'),
                statusMsg: 'received',
                dropdownActive: false
            },
        contacts: [
            {
                contactName: 'Michele',
                avatarImg: 'img/avatar_1.jpg',
                contactVisible: true,
                dateLastAccess: '12:00',
                chatLog: [
                    {
                        textMsg: 'hai portato fuori il cane?',
                        date: '15/03/2022 13:00',
                        statusMsg: 'sent',
                        dropdownActive: false
                    },
                    {
                        textMsg: 'ricordati i panni!',
                        date: '15/03/2022 13:20',
                        statusMsg: 'sent',
                        dropdownActive: false
                    },
                    {
                        textMsg: 'sicuro',
                        date: '15/03/2022 13:00',
                        statusMsg: 'received',
                        dropdownActive: false
                    }

                ],
            },
            {
                contactName: 'Fabio',
                avatarImg: 'img/avatar_2.jpg',
                contactVisible: true,
                dateLastAccess: '12:00',
                chatLog: [
                    {
                        textMsg: 'ciao!',
                        date: '15/03/2022 13:00',
                        statusMsg: 'sent',
                        dropdownActive: false
                        
                    },
                    {
                        textMsg: 'ci vediamo sta sera?',
                        date: '15/03/2022 13:20',
                        statusMsg: 'sent',
                        dropdownActive: false
                        
                    },
                    {
                        textMsg: 'va bene',
                        date: '15/03/2022 13:00',
                        statusMsg: 'received',
                        dropdownActive: false
                        
                    },
                    {
                        textMsg: 'dove?',
                        date: '15/03/2022 13:00',
                        statusMsg: 'received',
                        dropdownActive: false
                        
                    }

                ]

            },
            {
                contactName: 'Samuele',
                contactVisible: true,
                avatarImg: 'img/avatar_3.jpg',
                dateLastAccess: '12:00',
                chatLog: [
                    {
                        textMsg: 'ci vediamo domani, cerca di essere puntuale che se perdiamo il treno è un casino',
                        date: '15/03/2022 13:00',
                        statusMsg: 'sent',
                        dropdownActive: false
                    },
                    {
                        textMsg: 'tranquillo',
                        date: '15/03/2022 13:00',
                        statusMsg: 'received',
                        dropdownActive: false
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
                        textMsg: `hai finito l'esercizio js?`,
                        date: '15/03/2022 13:00',
                        statusMsg: 'sent',
                        dropdownActive: false
                    },
                    {
                        textMsg: 'ti ricordi che è da consegare domani si?',
                        date: '15/03/2022 13:20',
                        statusMsg: 'sent',
                        dropdownActive: false
                    },
                    {
                        textMsg: 'honolulu sto arrivando',
                        date: '15/03/2022 13:00',
                        statusMsg: 'received',
                        dropdownActive: false
                    },
                    {
                        textMsg: 'bella',
                        date: '15/03/2022 13:20',
                        statusMsg: 'sent',
                        dropdownActive: false
                    },

                ],
            },
            {
                contactName: 'Michele C.',
                avatarImg: 'img/avatar_5.jpg',
                contactVisible: true,
                dateLastAccess: '12:00',
                chatLog: [
                    {
                        textMsg: 'cerca di non fare tardi',
                        date: '15/03/2022 13:00',
                        statusMsg: 'received',
                        dropdownActive: false
                    },
                    {
                        textMsg: 'farò il possibile',
                        date: '15/03/2022 13:00',
                        statusMsg: 'sent',
                        dropdownActive: false
                    },
                    {
                        textMsg: 'hai preso tutto?',
                        date: '15/03/2022 13:20',
                        statusMsg: 'sent',
                        dropdownActive: false
                    },
                    {
                        textMsg: 'yep',
                        date: '15/03/2022 13:00',
                        statusMsg: 'received',
                        dropdownActive: false
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
                        dropdownActive: false
                    },
                    {
                        textMsg: 'ricordati i panni!',
                        date: '15/03/2022 13:20',
                        statusMsg: 'sent',
                        dropdownActive: false
                    },
                    {
                        textMsg: 'ok',
                        date: '15/03/2022 13:00',
                        statusMsg: 'received',
                        dropdownActive: false
                    },
                    {
                        textMsg: 'hai portato fuori il cane?',
                        date: '15/03/2022 13:00',
                        statusMsg: 'sent',
                        dropdownActive: false
                    },
                    {
                        textMsg: 'ricordati i panni!',
                        date: '15/03/2022 13:20',
                        statusMsg: 'sent',
                        dropdownActive: false
                    },
                    {
                        textMsg: 'ok',
                        date: '15/03/2022 13:00',
                        statusMsg: 'received',
                        dropdownActive: false
                    },
                    {
                        textMsg: 'ci vediamo domani, cerca di essere puntuale che se perdiamo il treno è un casino',
                        date: '15/03/2022 13:00',
                        statusMsg: 'sent',
                        dropdownActive: false
                    },
                    {
                        textMsg: 'tranquillo',
                        date: '15/03/2022 13:00',
                        statusMsg: 'received',
                        dropdownActive: false
                    },
                    {
                        textMsg: 'hai portato fuori il cane?',
                        date: '15/03/2022 13:00',
                        statusMsg: 'sent',
                        dropdownActive: false
                    },
                    {
                        textMsg: 'ricordati i panni!',
                        date: '15/03/2022 13:20',
                        statusMsg: 'sent',
                        dropdownActive: false
                    },
                    {
                        textMsg: 'sicuro',
                        date: '15/03/2022 13:00',
                        statusMsg: 'received',
                        dropdownActive: false
                    },
                    {
                        textMsg: 'cerca di non fare tardi',
                        date: '15/03/2022 13:00',
                        statusMsg: 'received',
                        dropdownActive: false
                    },
                    {
                        textMsg: 'farò il possibile',
                        date: '15/03/2022 13:00',
                        statusMsg: 'sent',
                        dropdownActive: false
                    },
                    {
                        textMsg: 'hai preso tutto?',
                        date: '15/03/2022 13:20',
                        statusMsg: 'sent',
                        dropdownActive: false
                    },
                    {
                        textMsg: 'yep',
                        date: '15/03/2022 13:00',
                        statusMsg: 'received',
                        dropdownActive: false
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
                        dropdownActive: false
                    },
                    {
                        textMsg: 'ricordati i panni!',
                        date: '15/03/2022 13:20',
                        statusMsg: 'sent',
                        dropdownActive: false
                    },
                    {
                        textMsg: 'ok',
                        date: '15/03/2022 13:00',
                        statusMsg: 'received',
                        dropdownActive: false
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
                        dropdownActive: false
                    },
                    {
                        textMsg: 'ricordati i panni!',
                        date: '15/03/2022 13:20',
                        statusMsg: 'sent',
                        dropdownActive: false
                    },
                    {
                        textMsg: 'ok',
                        date: '15/03/2022 13:00',
                        statusMsg: 'received',
                        dropdownActive: false
                    }

                ],
            },
        ]
    },
    methods: {
        sendNewMsg() {
            if (this.newMsgSent.textMsg.trim() != '') {
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
            setTimeout(this.createMsgReceived, 2000);
        },

        getDateNow() {
            return luxon.DateTime.now().toFormat('MM/dd/yyyy HH:mm:ss');
        },
        deleteMsg(indexActiveChat, index) {
            this.contacts[indexActiveChat].chatLog.splice([index], 1);


        },
        searchingContact() {
            this.contacts.forEach(contact => { 
                if (contact.contactName.toLowerCase().includes(this.searchContact.toLowerCase())) {
                    contact.contactVisible = true;
                    
                }else {
                    contact.contactVisible = false;

                }    
            });           
        },       
    }
})

