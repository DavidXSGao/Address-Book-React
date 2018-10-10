import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, MemoryRouter } from 'react-router-dom';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { SimpleList } from './ContactList';

configure({ adapter: new Adapter() });


describe("ContactList", () => {
    let props;
    let mountContactList;
    const ContactListComponent = () => {
        if (mountContactList) {
            return mount(
                <MemoryRouter>
                    <SimpleList {...props} />
                </MemoryRouter>
            );
        } else {
            return (
                <MemoryRouter>
                    <SimpleList {...props} />
                </MemoryRouter>
            );
        }
    };

    beforeEach(() => {
        props = {
            contacts: [{
                "id": 0,
                "name": "Bruce Wayne",
                "email": "bruce.wayne@wayneenterprises.com",
                "gender": "male",
                "country": "Canada",
                "postalCode": "M1S 4A1"
            },
            {
                "id": 1,
                "name": "Clark Kent",
                "email": "clark.kent@dailyplanet.com",
                "gender": "male",
                "country": "Canada",
                "postalCode": "M1S 4A2"
            },
            {
                "id": 2,
                "name": "Peter Parker",
                "email": "peter.parker@gmail.com",
                "gender": "male",
                "country": "Canada",
                "postalCode": "M1S 4A3"
            },
            {
                "id": 3,
                "name": "Tony Stark",
                "email": "tony.stark@starkindustries.com",
                "gender": "male",
                "country": "Canada",
                "postalCode": "M1S 4A4"
            }],
            classes: {},
            t: () => 'mock translate text',
            children: []
        };
        mountContactList = true;
    });

    it('renders without crashing', () => {
        mountContactList = false;
        shallow(ContactListComponent());
    });

    it('renders 4 ListItems when given 4 contacts', () => {
        const ListItems = ContactListComponent().find("ListItem");
        expect(ListItems.length).toEqual(4);
    });
});
