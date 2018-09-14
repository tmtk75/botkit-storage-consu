# README
A storage for [botkit](https://github.com/howdyai/botkit) as [consul](https://github.com/hashicorp/consul) backend.

```
import * as botkit from "botkit";
import { ConsulStorage } from "botkit-storage-consul";

botkit.slackbot({
  storage: ConsulStorage({consul_url: process.env.CONSUL_URL}),
  ...
```
