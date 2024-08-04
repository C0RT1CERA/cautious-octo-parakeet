import Link from 'next/link';

const Links = () => {
    const links = [
        {
            title: "Homepage",
            path: "/",
        },
        {
            title: "About",
            path: "/about",
        },
        {
            title: "Contact",
            path: "/contact",
        },
        {
            title: "Blog",
            path: "/blog",
        },
    ];

    return (
        <div className="flex items-center gap-[4vw]">
            {links.map((link) => (
                <Link href={link.path} key={link.title}>
                    <ul className="flex items-center gap-[4vw] text-gray-900">
                    
                    <li>
                        <p className='hover:text-gray-500'>{link.title}</p>    
                    </li>
                
                    </ul>
                    </Link>
            ))}
        </div>
    );
}

export default Links;
