import { ReactElement } from "react"
import { ItemContainer } from "./style";

interface IItems {
  icon?: ReactElement;
  description?: string;
}

export function Items({icon, description}: IItems) {
  return (
    <ItemContainer>
      {icon}

      <p>{description}</p>
    </ItemContainer>
  )
}