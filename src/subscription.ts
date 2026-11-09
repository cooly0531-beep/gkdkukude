import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 531233,
  name: 'cooly的订阅',
  version: 0,
  author: 'cooly',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: 'https://github.com/cooly0531-beep/gkdkukude',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
