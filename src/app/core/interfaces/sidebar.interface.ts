export interface SidebarOption {
  title: string;
  path: string;
  sub_options?: SidebarOption[];
  icon: string;
  atributes?: any;
}
