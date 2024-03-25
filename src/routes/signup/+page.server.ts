import prisma from "$lib/prisma";
import { fail } from "@sveltejs/kit";
import type { Actions } from "./$types";
import type { User_role } from "@prisma/client";

export const actions =  {



    signup: async ({ request }) => {
        const data = await request.formData();
        let email = data.get("email") as string;
        let password = data.get("password") as string;
        let role = data.get("role") as User_role;
        let name = data.get("name") as string;
        let contact = data.get("contact") as string;



        await prisma.user.create({
            data: {
                email: email,
                password: password,
                role: role,
                name: name,
                contactNumber: contact,
                permissionLevel: "New user"
            }
        })
    }
} satisfies Actions