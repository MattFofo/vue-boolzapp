const app = new Vue({
    el: '#root',
    data: {
        contacts: [
            {
                contactName: 'Michele',
                activeChat: true,
                dateLastAccess: 'Ultimo accesso oggi alle 12:00',
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
                activeChat: false,
                dateLastAccess: 'Ultimo accesso oggi alle 12:00',
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

            }
        ]
    }
})