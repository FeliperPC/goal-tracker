import { ReactNode } from "react";

export default function StatusCard(
  {children} : {children:ReactNode}
){
  return (
    <div>{children}</div>
  )
}