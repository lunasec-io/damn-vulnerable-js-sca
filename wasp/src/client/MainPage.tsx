import { PageLayout } from "./PageLayout"
import { ListItem } from "baseui/list"
import { DisplaySmall } from "baseui/typography"
import { Link } from "react-router-dom"

const MainPage = () => {
  return (
    <PageLayout>
      <DisplaySmall>Vulnerabilities</DisplaySmall>
      <p>A list of vulnerabilities that this application is vulnerable to:</p>
      <ListItem endEnhancer={() => <Link to={'/vulnerability/cve-2021-21315'}>Exploit!</Link>}>CVE-2021-21315</ListItem>
    </PageLayout>
  )
}
export default MainPage
