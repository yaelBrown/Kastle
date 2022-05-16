import nextSession from "next-session";

const getSession = nextSession();

class Session {
  constructor() {
    this.something = "something";
  }

  // Don't need to do this if you are using JWT.
}

module.exports = Session;
