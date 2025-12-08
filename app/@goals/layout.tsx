import GlobalProvider from "../(core)/schemas/provider/GlobalProvider";
import { getGoals } from "../actions";

export default async function Layout({children}:{children:React.ReactNode}){
  const goals = await getGoals()
  return (
    <GlobalProvider goals={goals}>
      {children}
    </GlobalProvider>
  )
}