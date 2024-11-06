class Helpers {
  getUsersByStatus(response, status) {
    const users = [];

    for (let i = 0; i < response.users.length; i++) {
      const element = response.users[i];
      const elementStatus = element.role.status;
      const elementDescription = element.role.description;

      if (
        elementStatus === status &&
        elementDescription != null &&
        elementDescription != ""
      ) {
        users.push(element.name);
      }
    }

    return users;
  }

  getUsersByRole(response, role, roleId) {
    const users = [];

    for (let i = 0; i < response.users.length; i++) {
      const element = response.users[i];
      const elementRole = element.role.name;
      const elementRoleId = element.role.id;
      if (elementRole === role && elementRoleId === roleId) {
        users.push(element.name);
      }
    }
    return users;
  }
  getUsersByEmailDomain(response, domain) {
    const users = [];

    for (let i = 0; i < response.users.length; i++) {
      const element = response.users[i];
      const email = element.email;
      if (email.includes("codemify")) {
        users.push(element.name);
      }
    }

    return users;
  }

  getUserBalanceByCurrency(response, currency) {
    const balances = [];

    for (let i = 0; i < response.users.length; i++) {
      const element = response.users[i];
      const elementBalance = element.balance;
      const elementCurrency = element.currency;
      if (elementCurrency === currency) {
        balances.push(element.balance);
      }
    }

    return balances;
  }
}

export default new Helpers();
