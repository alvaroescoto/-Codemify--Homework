class Helpers {
  filterMatchesByLocationAndStatus(response) {
    let users = [];

    for (let i = 0; i < response.matches.length; i++) {
      const element = response.matches[i];
      const elementLocation = element.locationlvl1;
      const elementStatus = element.status;

      if (elementLocation === "Germany" && elementStatus === "canceled") {
        users.push(element.matchId);
      }
    }

    return users;
  }

  filterMatchesByCoatingAndShower(response) {
    let result = [];

    for (let i = 0; i < response.matches.length; i++) {
      const element = response.matches[i];
      const elementCoating = element.matchInfo.coating;
      const elementShower = element.matchInfo.isShower;
      if (elementCoating === "Main.artificialGrass" && elementShower === true) {
        result.push(element.matchId);
      }
    }

    return result;
  }

  filterMatchesByLocationAndPrice(response) {
    let result = [];

    for (let i = 0; i < response.matches.length; i++) {
      const element = response.matches[i];
      const elementLocation1 = element.locationlvl2;
      const elementPrice = element.price;

      if (elementLocation1 === "Berlin" && elementPrice > 0) {
        result.push(element.matchId);
      }
    }
    return result;
  }

  filterMatchesByCreatorFeeAndStatus(response) {
    let result = [];

    for (let i = 0; i < response.matches.length; i++) {
      const element = response.matches[i];
      const elementCreatorFee = element.creatorFeePerPlayer;
      const elementStatus = element.status;
      if (elementCreatorFee > 3 && elementStatus === "canceled") {
        result.push(element.matchId);
      }
    }

    return result;
  }

  filterMatchesByCoveringAndDressingRoom(response) {
    let result = [];

    for (let i = 0; i < response.matches.length; i++) {
      const element = response.matches[i];
      const elementCovering = element.matchInfo.covering;
      const elementDressingRoom = element.matchInfo.isDressingRoom;
      if (
        elementCovering === "Main.onTheStreet" &&
        elementDressingRoom === true
      ) {
        result.push(element.matchId);
      }
    }
    return result;
  }
}

export default new Helpers();
