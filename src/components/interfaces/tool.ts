import React from "react";

type IconSVGProps = React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> & React.RefAttributes<SVGSVGElement>
type IconProps = IconSVGProps & {
      title?: string
      titleId?: string
 }

export interface ToolItem {
    type: string,
    component: object,
    icon: React.FC<IconProps>,
    page?: string
}