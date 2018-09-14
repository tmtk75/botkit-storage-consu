import { Storage, User, Channel, Team } from "botkit";

declare module "botkit-storage-consul" {
  interface Config {
    consul_url: string;
  }

  export function ConsulStorage(
    conf: Config
  ): {
    users: Storage<User>;
    channels: Storage<Channel>;
    teams: Storage<Team>;
  };
}
