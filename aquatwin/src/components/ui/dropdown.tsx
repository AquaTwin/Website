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


const Dropdown = () => {
    return (
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger> <Menu/> </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem>Problem Statement</DropdownMenuItem>
                    <DropdownMenuItem>Our Solution</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Contact us</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

        </div>
    )
}

export default Dropdown
