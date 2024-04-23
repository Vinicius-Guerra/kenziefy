import { z } from "zod";
import { albumSchema, albumPayloadCreateSchema } from "../schemas";

type Album = z.infer<typeof albumSchema>;
type AlbumPayloadCreate = z.infer<typeof albumPayloadCreateSchema>;

export { Album, AlbumPayloadCreate };
