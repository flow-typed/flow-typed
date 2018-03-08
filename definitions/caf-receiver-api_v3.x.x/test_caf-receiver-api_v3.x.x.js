import { PlayerManager } from "cast.framework";
import { QueueItem } from "cast.framework.messages";

const pm = new PlayerManager({});

const bs = pm.broadcastStatus(false);

const qm = pm.getQueueManager();
const item: QueueItem = qm.getCurrentItem();
item.startTime = new Date().getMilliseconds;
// $ExpectError
item.startTime = "not a number";
