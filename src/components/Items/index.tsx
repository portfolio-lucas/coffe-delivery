import { ReactElement } from "react"
import { BoxItem, ItemContainer } from "./style";

interface IItems {
  icon?: ReactElement;
  description?: string;
}

export function Items({icon, description}: IItems) {
  return (
    <ItemContainer>
      <BoxItem>
        {icon}
      </BoxItem>

      <p>{description}</p>
    </ItemContainer>
  )
}