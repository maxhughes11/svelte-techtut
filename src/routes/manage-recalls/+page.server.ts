import prisma from "$lib/prisma";
import type { PageServerLoad } from "./$types";

export const load = (async () => {

    const response = await prisma.recall.findMany({
        include: { User: false }
    });
    
    return {feed: response};
    }) satisfies PageServerLoad;