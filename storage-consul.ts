import * as url from "url";
import * as consul from "consul";

export function newConsulStore(config: {
  consul_url: string;
  kv_root?: string;
}) {
  const { hostname, port } = url.parse(config.consul_url || "http://localhost:8500");
  const conf = Object.assign({ kv_root: "botkit/slack" }, config);
  const c = consul({ promisify: true, host: hostname, port });
  const root = conf.kv_root;

  return {
    teams: {
      get: function(team_id: string, cb: any) {
        c.kv.get(`${root}/teams/${team_id}`, (err, data: any, res) => {
          // console.log("teams.get:data:", data);
          // console.log("teams.get:res:", res);
          if (!data) {
            cb(null, null);
            return;
          }
          cb(null, JSON.parse(data.Value));
        });
      },
      save: function(team_data: slack.SlackTeam, cb: any) {
        // console.log("teams.save:", team_data);
        c.kv.set(
          `${root}/teams/${team_data.id}`,
          JSON.stringify(team_data),
          (err, data) => {
            // console.log("teams.save:", err, data);
            cb(null, data);
          }
        );
      },
      delete: function(team_id: string, cb: any) {
        cb(null, null);
        throw new Error(
          `consul store doesn't support teams.delete: ${team_id}`
        );
      },
      all: function(cb: any) {
        cb(null, null);
        throw new Error(`consul store doesn't support teams.all`);
      }
    },
    users: {
      get: function(user_id: string, cb: any) {
        c.kv.get(`${root}/users/${user_id}`, (err, data: any, res) => {
          if (!data) {
            cb(null, null);
            return;
          }
          cb(null, JSON.parse(data.Value));
        });
      },
      save: function(user: slack.SlackUser, cb: any) {
        c.kv.set(
          `${root}/users/${user.id}`,
          JSON.stringify(user),
          (err, data) => {
            // console.log("users.save:", err, data);
            cb(null, data);
          }
        );
      },
      delete: function(user_id: string, cb: any) {
        cb(null, null);
        throw new Error(
          `consul store doesn't support users.delete: ${user_id}`
        );
      },
      all: function(cb: any) {
        cb(null, null);
        throw new Error(`consul store doesn't support users.all`);
      }
    },
    channels: {
      get: function(channel_id: string, cb: any) {
        cb(null, null);
        throw new Error(
          `consul store doesn't support channels.get: ${channel_id}`
        );
      },
      save: function(channel: any, cb: any) {
        cb(null, null);
        throw new Error(
          `consul store doesn't support channels.all: ${channel.id}`
        );
      },
      delete: function(channel_id: string, cb: any) {
        cb(null, null);
        throw new Error(
          `consul store doesn't support channels.delete: ${channel_id}`
        );
      },
      all: function(cb: any) {
        cb(null, null);
        throw new Error(`consul store doesn't support channels.all`);
      }
    }
  };
}
