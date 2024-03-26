import prisma from "$lib/prisma";
import type { User } from "@prisma/client";
import type { PageServerLoad } from "./$types";

export const load = (async ({cookies}) => {

    const response = await prisma.recall.findMany({
        include: { User: false }
    });

    let user = cookies.get("user") as string;
    let currentUser = JSON.parse(user) as User;
    
    return {feed: response, user: currentUser};
    }) satisfies PageServerLoad;