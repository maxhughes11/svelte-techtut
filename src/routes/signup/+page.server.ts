import prisma from "$lib/prisma";
import { fail, redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";
import type { User_role } from "@prisma/client";
import type { Cookies } from "@sveltejs/kit";

export const actions =  {



    default: async ({ request, cookies }) => {
        const data = await request.formData();
        let email = data.get("email") as string;
        let password = data.get("password") as string;
        let role = data.get("role") as User_role;
        let name = data.get("name") as string;
        let contact = data.get("contact") as string;



        const newUser = await prisma.user.create({
            data: {
                email: email,
                password: password,
                role: role,
                name: name,
                contactNumber: contact,
                permissionLevel: "New user"
            }
        })                                            

        cookies.set("user", JSON.stringify(newUser), {path: "/"})
        redirect(303, "/")
    }
} satisfies Actions