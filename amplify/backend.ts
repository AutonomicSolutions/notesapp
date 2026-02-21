import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { storage } from './storage/resource';

/**
 * @see https://docs.amplify.aws/react/build-a-backend/
 */

export const backend = defineBackend({
  auth,
  data,
  storage,
  region: 'us-east-1', 
});
