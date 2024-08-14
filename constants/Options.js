import { faUser, faUsers, faHome, faUserFriends } from '@fortawesome/free-solid-svg-icons';


export const SelectTravlersList = [{
    id: 1,
    title: 'Solo traveler',
    description: 'Traveling alone',
    icon: faUser,
    people: '1',
}, {
    id: 2,
    title: 'Couple',
    description: 'Traveling with a partner',
    icon: faUserFriends,
    people: '2',
}, {
    id: 3,
    title: 'Family',
    description: 'Traveling with family',
    icon: faHome,
    people: '3 to 5',
}, {
    id: 4,
    title: 'Group',
    description: 'Traveling with friends',
    icon: faUsers,
    people: '6+',
}]

export const SelectBudgetOptions= [{
    id: 1,
    title: 'Budget',
    description: 'Stay conscious of cost',
    icon: faUser,
}, {
    id: 2,
    title: 'Mid-range',
    description: 'Keep cost on the average side',
    icon: faUserFriends,
}, {
    id: 3,
    title: 'Luxury',
    description: "Don't worry so much about the cost",
    icon: faHome,
}]


