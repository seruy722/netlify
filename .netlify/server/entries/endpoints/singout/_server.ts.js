import { f as fail, r as redirect } from "../../../chunks/index.js";
import { a as auth } from "../../../chunks/lucia.js";
const POST = async ({ locals }) => {
  const { session } = await locals.auth.validateUser();
  console.log("session_out", session);
  if (!session)
    return fail(401);
  await auth.invalidateSession(session.sessionId);
  locals.auth.setSession(null);
  throw redirect(302, "/");
};
export {
  POST
};
