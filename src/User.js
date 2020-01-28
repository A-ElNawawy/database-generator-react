import React from 'react';

class User {
  constructor(id, name, email){
    this.id = id;
    this.name = name;
    this.email = email;
  }
}

const user1 = new User(1,'ahmed','ee@gmail.com');
const user2 = new User(2,'merna','mm@gmail.com');
const users = [user1, user2];


export const User;