import { NextApiRequest, NextApiResponse } from 'next';

const posts = [
    {
        postId: 1,
        imageSrc: "/Images/hero/Hero.png", heading: "The Perfect Summer Dress", ShortDescription: "Discover the latest trends in summer dresses and find your perfect style for this season.", href: '/artical/{ID}'
    },
    {
        postId: 2,
        imageSrc: "/Images/hero/Hero.png", heading: "The Perfect Summer Dress", ShortDescription: "Discover the latest trends in summer dresses and find your perfect style for this season.", href: '/artical/{ID}'
    },
    {
        postId: 3,
        imageSrc: "/Images/hero/Hero.png", heading: "The Perfect Summer Dress", ShortDescription: "Discover the latest trends in summer dresses and find your perfect style for this season.", href: '/artical/{ID}'
    },
    {
        postId: 4,
        imageSrc: "/Images/hero/Hero.png", heading: "The Perfect Summer Dress", ShortDescription: "Discover the latest trends in summer dresses and find your perfect style for this season.", href: '/artical/{ID}'
    },
    {
        postId: 5,
        imageSrc: "/Images/hero/Hero.png", heading: "The Perfect Summer Dress", ShortDescription: "Discover the latest trends in summer dresses and find your perfect style for this season.", href: '/artical/{ID}'
    },

]

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse) {
    res.status(200).json(posts);
}
