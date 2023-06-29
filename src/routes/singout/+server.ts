import { fail, redirect } from "@sveltejs/kit";
import { auth } from "$lib/server/lucia";
import type { RequestHandler } from "./$types";

export const POST: RequestHandler = async ({ locals }) => {
    const { session } = await locals.auth.validateUser();
		if (!session) return fail(401);
		await auth.invalidateSession(session.sessionId); // invalidate session
		locals.auth.setSession(null); // remove cookie
    throw redirect(302, '/');
}