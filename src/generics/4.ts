type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<User>): User {
  return {
    name: '',
    surname: '',
    email: '',
    password: '',
    ...initialValues,
  };
}

createOrUpdateUser({ 
  email: 'user@mail.com', 
  password: 'password123' 
});
