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
      <ListItem endEnhancer={() => <Link to={'/vulnerability/cve-2013-4660'}>Exploit!</Link>}>CVE-2013-4660</ListItem>
      <ListItem endEnhancer={() => <Link to={'/vulnerability/cve-2022-36067'}>Exploit!</Link>}>CVE-2022-36067</ListItem>
      <ListItem endEnhancer={() => <Link to={'/vulnerability/cve-2019-5786'}>Exploit!</Link>}>CVE-2019-5786</ListItem>
      <ListItem endEnhancer={() => <Link to={'/vulnerability/cve-2020-11023'}>Exploit!</Link>}>CVE-2020-11023</ListItem>
    </PageLayout>
  )
}
export default MainPage
