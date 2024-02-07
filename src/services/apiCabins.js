import { useMutation, useQueryClient } from "@tanstack/react-query";
import supabase, { supabaseUrl } from "./supabase";
import toast from "react-hot-toast";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }
  return data;
}

export async function createEditCabin(newCabin, id) {
  console.log(newCabin, id);
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
  //1) create cabin
  //https://fwryjlvuzwxokyrclytm.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg
  //for create and edit
  let query = supabase.from("cabins");
  //for create
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

  //for edit
  if (id) query = query.update({ ...newCabin, image: imagePath }).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    throw new Error("Cabin could not be created");
  }

  // Use the JS library to download a file.

  if (hasImagePath) return data;

  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(`${imageName}`, newCabin.image);

  //3. Delete the cabin if there was an error uploading the cabin.

  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.log(storageError);
    throw new Error(
      "Cabin image could not be uplaoded and the cabin was not created"
    );
  }
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    throw new Error("Cabin could not be deleted");
  }
  return data;
}
