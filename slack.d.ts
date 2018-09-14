declare namespace slack {
  interface SlackTeam {
    id: string; // "T02Jxxxxx"
    createdBy: string; // "U02Jxxxxx"
    url: string; // "https://foobar.slack.com/"
    name: string; // "foobar"
    state: string; // "botkit"
    token: string; // "xoxb-600..."
    bot: {
      token: string; // "xoxb-600..."
      user_id: string; // "U1S2xxxxx"
      createdBy: string; // "U02Jxxxxx"
      app_token: string; // "xoxp-263..."
    };
  }

  interface SlackUser {
    id: string;
    team_id: string;
    user: string; // "skm75"
    access_token: string; // "xoxp-263..."
    scopes: string[]; // [ 'identify', 'bot', 'commands', 'users:read', 'users:read.email' ]
  }
}
