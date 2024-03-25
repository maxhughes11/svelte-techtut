import prisma from "$lib/prisma";
import { redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";
import { User_role } from "@prisma/client";

export const actions = {
    login: async ({ request }) => {
        const data = await request.formData();
        let email = data.get("email") as string;
        let password = data.get("password") as string;




        const result = await prisma.user.findUnique({
            where: {email: email, password: password}
        })

        if (result?.role == User_role.Manager)
        {
            redirect(303, "/manage-recalls")
        }
    }
} satisfies Actions