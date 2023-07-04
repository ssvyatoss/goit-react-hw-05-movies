import { NavLink } from "react-router-dom"

export const NavBar = () => {
    const navMap = [
        {href: '/', title: "Home"},
        {href: '/movies', title: 'Movies'}
    ]
    return (
        <nav>
            {navMap.map(link => (
                <NavLink key={link.href} to={link.href}>
                    {link.title}
                </NavLink>
            ))}
        </nav>
    )
}