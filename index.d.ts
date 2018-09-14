import { Storage, User, Channel, Team } from "botkit";

declare module "botkit-storage-consul" {
  interface Config {
    consul_url?: string; // "http://localhost:8500"
    kv_root?: string; // "botkit/slack"
  }

  export function ConsulStorage(
    conf: Config
  ): {
    users: Storage<User>;
    channels: Storage<Channel>;
    teams: Storage<Team>;
  };
}
