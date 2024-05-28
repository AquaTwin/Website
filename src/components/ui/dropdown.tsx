import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { NavLink } from '@/components/ui/navlinks'


const Dropdown = ({links}: {links: NavLink[]}) => {
    return (
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger> <Menu/> </DropdownMenuTrigger>
                <DropdownMenuContent>
                {links.map((link, index) => (
                    <DropdownMenuItem key={index}>
                    <Link href={link.href}>
                        {link.text}
                    </Link>
                        </DropdownMenuItem>
                ))}
                </DropdownMenuContent>
            </DropdownMenu>

        </div>
    )
}

export default Dropdown
