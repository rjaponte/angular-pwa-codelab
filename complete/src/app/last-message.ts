import { Message } from './message';
import { User } from './user';

export class LastMessage {
    groupId: number;
    users: User[];
    message: Message;
}


const MESSAGES: LastMessage[] = [
    {
        groupId: 1,
        message: {
            messagetext: 'This is a test message',
            timestamp: new Date('2019-01-03T11:37:00')
        },
        users: [
            {firstName: 'Ricardo', number: '8055872684', color: 'red'}
        ]
    },
    {
        groupId: 5,
        message: {
            messagetext: 'This is a test message',
            timestamp: new Date('2019-01-01T23:37:00')
        },
        users: [
            {firstName: 'Ricardo', number: '8055872684', color: 'blue'}
        ]
    },
    {
        groupId: 4,
        message: {
            messagetext: 'This is a test message',
            timestamp: new Date('2018-12-31T11:37:00')
        },
        users: [
            {firstName: 'Ricardo', number: '8055872684', color: 'green'}
        ]
    },
    {
        groupId: 3,
        message: {
            messagetext: 'This is a test message',
            timestamp: new Date('2019-01-01T11:37:00')
        },
        users: [
            {firstName: 'Ricardo', number: '8055872684', color: 'purple'}
        ]
    },
    {
        groupId: 2,
        message: {
            messagetext: 'This is a test message',
            timestamp: new Date('2019-01-02T11:37:00')
        },
        users: [
            {firstName: 'Ricardo', number: '8055872684', color: 'grey'}
        ]
    }
];

export { MESSAGES };
