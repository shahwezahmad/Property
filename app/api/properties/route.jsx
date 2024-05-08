import connectDB from "@/config/database";
import Property from "@/models/Property";

export const GET = async (request) => {
  try {
    await connectDB();
    const properties = await Property.find({});
    return new Response(JSON.stringify(properties), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", { status: 400 });
  }
};

export const POST = (request) => {
  try {
    return new Response({ message: "Success" }, { status: 200 });
  } catch (error) {
    return new Response("Failed", { status: 500 });
  }
};
