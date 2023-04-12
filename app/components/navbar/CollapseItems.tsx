'use client';

interface MenuItemProps {
    onClick: ()=> void;
    label: string;
}


const CollapseItems: React.FC<MenuItemProps> = ({
    onClick,
    label
}) => {
    return ( 
        <div
            onClick={onClick}
            className="
            px-4
            py-3
            hover:bg-slate-200
            transition
            font-semibold
            "
        >
            {label}
        </div>
     );
}
 
export default CollapseItems;