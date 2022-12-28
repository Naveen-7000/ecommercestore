import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
export const client = sanityClient({
    projectId:'eke75akw',
    dataset:'production',
    apiVersion:'2022-12-22',
    useCdn:true,
    token:process.env.TOKEN
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);