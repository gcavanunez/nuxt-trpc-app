import type { inferAsyncReturnType } from '@trpc/server';
import * as trpc from '@trpc/server';
import { z } from 'zod'; //  yup/superstruct/zod/myzod/custom

export const router = trpc
  .router()
  // queries and mutations...
  .query('getUsers', {
    async resolve(req) {
      // use your ORM of choice
      return [{ user_id: 1 }];
    },
  })
  .mutation('createUser', {
    // validate input with Zod
    input: z.object({ name: z.string().min(5) }),
    async resolve(req) {
      // use your ORM of choice
      return {
        success: true,
      };
    },
  });
