export interface SideBarItems {
    name: string;
    dropdown: boolean;
    hasDropDown: boolean;
    routerName?: string;
    subItems?: SideBarSubItems[];

}

export interface SideBarSubItems {
    name: string;
    routerName: string;
}

