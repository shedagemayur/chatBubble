let chats = [
    { id: 1, message: 'Hi', self: 1 },
    { id: 2, message: 'Buddy', self: 1 },
    { id: 3, message: 'How are you?', self: 1 },
    { id: 4, message: 'Hello', self: 0 },
    { id: 5, message: 'Brother!!!', self: 0 },
    { id: 6, message: 'I am good!', self: 0 },
    { id: 7, message: 'Oops', self: 1 },
    { id: 8, message: 'Where are you?', self: 1 },
    { id: 9, message: 'US', self: 0 },
    { id: 10, message: 'Bla bla..', self: 0 },
    { id: 11, message: 'Getting error Exceeded quota for verifying passwords.', self: 0 },
    { id: 12, message: 'ok', self: 0 },
    { id: 8, message: 'Where are you?', self: 1 },
    { id: 11, message: 'Getting error Exceeded quota for verifying passwords.', self: 1 },
    { id: 9, message: 'US', self: 0 },
    { id: 10, message: 'Bla bla..', self: 0 },
    { id: 12, message: 'ok', self: 0 },
    { id: 12, message: 'Nice to see you', self: 1 },
    { id: 12, message: 'Me to', self: 0 },
    { id: 12, message: 'Nice buddy', self: 0 }
];

(function(chats){
    let chatbox = document.getElementById('chatbox');

    chats.forEach(function(incoming, index){
        var chatSelf = 0;

        let chatmessagebox = createNode('div', {
            class: 'chat-message-box',
            id: 'chat_message_'+incoming.id
        });
        let chatboxcontent = createNode('div', {
            class: 'chat-box-content'
        });
        let message = createNode('div', {
            id: 'message_'+incoming.id
        });

        var messageType = incoming.hasOwnProperty('self') && incoming.self == 1 ? ' chat-self': ' chat-nonself';

        chatboxcontent.className += messageType;
        var lastchild = document.querySelectorAll('.chat-message-box:last-child');
        if(lastchild.length == 1) {
            if(document.querySelectorAll('.chat-message-box:last-child')[0].children[0].classList[1] == messageType.trim()) {
                chatSelf = 1;
                document.querySelectorAll('.chat-message-box:last-child')[0].children[0].classList.remove('bottom');
            }
        }
        if(lastchild.length == 0 || !chatSelf) {
            chat_msg_grp = 'grp_'+incoming.id +'_'+ new Date().getTime();
            chatboxcontent.className += ' top bottom';
        }else{
            chat_msg_grp = lastchild[0].children[0].getAttribute('grp');
            chatboxcontent.className += ' bottom';
        }
        chatboxcontent.setAttribute('grp', chat_msg_grp);

        message.append(incoming.message);
        chatboxcontent.appendChild(message);
        chatmessagebox.appendChild(chatboxcontent);
        chatbox.appendChild(chatmessagebox);
    });

    function createNode(node, attributes){
        const el = document.createElement(node);
        for(let key in attributes){
            el.setAttribute(key, attributes[key]);
        }
        return el;
    }
})(chats);