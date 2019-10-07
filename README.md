# chatBubble

The chat bubble style like facebook with message grouping.
You just need to passed the array of object to the closure function to get result.
For eg.,

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

