import { defineBackend } from '@aws-amplify/backend';
import { auth } from '../amplify part 2/auth/resource';
import { data } from '../amplify part 2/data/resource';

/**
 * @see https://docs.amplify.aws/react/build-a-backend/ to add storage, functions, and more
 */
defineBackend({
  auth,
  data,
});
