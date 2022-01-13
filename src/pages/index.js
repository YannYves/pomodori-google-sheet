// src/pages/index.js
import React from "react"
import { Box, Text } from "@chakra-ui/react"
import { Link, graphql, useStaticQuery } from "gatsby"

function IndexPage() {
  const data = graphql`
    query {
      googlePomodoriSheet {
        task1
      }
    }
  `

  return (
    <Box p={8}>
      <Text fontSize="xl">Hello World</Text>
    </Box>
  )
}

export default IndexPage
