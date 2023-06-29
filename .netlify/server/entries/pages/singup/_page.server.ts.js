import { f as fail, r as redirect } from "../../../chunks/index.js";
import { a as auth } from "../../../chunks/lucia.js";
const actions = {
  default: async ({ request, locals }) => {
    const form = await request.formData();
    const username = form.get("username");
    const password = form.get("password");
    if (typeof username !== "string" || typeof password !== "string") {
      return fail(400);
    }
    try {
      const user = await auth.createUser({
        primaryKey: {
          providerId: "username",
          providerUserId: username,
          password
        },
        attributes: {
          username
        }
      });
      const session = await auth.createSession(user.userId);
      locals.auth.setSession(session);
    } catch {
      return fail(400);
    }
  }
};
const load = async ({ locals }) => {
  const { session } = await locals.auth.validateUser();
  if (session)
    throw redirect(302, "/");
  return {};
};
export {
  actions,
  load
};
