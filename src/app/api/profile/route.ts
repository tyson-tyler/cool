// profile.ts (or profile.js)
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/vendor/db";
import { NextResponse } from "next/server";
import getCurrentUser from "@/actions/getCurrentUser";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "PUT") {
    return res.status(405).end(); // Method Not Allowed
  }
  const currentUser = await getCurrentUser();

  const { name, handle, imageSrc } = req.body; // Assuming the request body contains the updated profile data

  try {
    const updatedProfile = await prisma.channel.update({
      where: { userId: currentUser?.id }, // Update the profile of the authenticated user
      data: {
        name,
        handle,
        imageSrc,
        // Add other profile fields here as needed
      },
    });
    return res.status(200).json(updatedProfile);
  } catch (error) {
    console.error("Error updating profile:", error);
    return res.status(500).end(); // Internal Server Error
  }
}
