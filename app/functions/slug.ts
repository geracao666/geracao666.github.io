import slugify from "slugify";

export default function slug(str: string) {
  return slugify(str, {
    lower: true,
    trim: true
  })
}