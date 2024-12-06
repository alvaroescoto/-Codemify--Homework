class Helpers {
  getUsersByAge(response, ageMin, ageMax) {
    const users = [];
    for (let i = 0; i < response.users.length; i++) {
        const element = response.users[i];
        if (element.age >= ageMin && element.age <= ageMax) {
          users.push(element.name);

    
      }
    }

    return users;
  }

  getUsersByRole(response, role) {
    const users = [];

    for (let i = 0; i < response.users.length; i++) {
      const element = response.users[i];
      if (element.role === role) {
        users.push(element.name);
      }
    }
    return users;
  }

  getUsersByCountry(response, country) {
    const users = [];

    for (let i = 0; i < response.users.length; i++) {
      const element = response.users[i];
      if (element.country === country) {
        users.push(element.name);
      }
    }
    return users;
  }

  getUsersByBalance(response, minBalance, maxBalance) {
    let users = [];

    for (let i = 0; i < response.users.length; i++) {
      const element = response.users[i];
      if (element.balance >= minBalance && element.balance <= maxBalance) {
        users.push(element.name);
      }
    }
    return users;
  }
}

export default new Helpers();
