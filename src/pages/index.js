import React from "react"
import { Container, FeatureImage, Content, ContentCard } from "../components"

const index = () => {
  return (
    <Container>
      <FeatureImage/>
      <Content>
        <ContentCard date="September 15, 2020" title="hello everyone" excerpt="hello again" slug="/yo" />
      </Content>
    </Container>
  )
}

export default index
