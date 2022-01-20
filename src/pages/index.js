import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  FormHelperText,
} from "@chakra-ui/react"
import React from "react"
import { Box, Text } from "@chakra-ui/react"
import { Link, graphql, useStaticQuery } from "gatsby"

function IndexPage() {
  const data = useStaticQuery(graphql`
    query {
      googlePomodoriSheet {
        task1
      }
    }
  `)

  return (
    <Box p={8}>
      <Box p={8}>
        <Text fontSize="xl">Hi, what's the plan Today ? </Text>
      </Box>

      <Box p={8}>
        <FormControl>
          <FormLabel htmlFor="text">Task 1</FormLabel>
          <Input id="email" type="text" />
          <FormHelperText>
            One thing that should be done, no matter what{" "}
          </FormHelperText>
        </FormControl>
      </Box>
      <Box p={8}>
        <FormControl>
          <FormLabel htmlFor="text">Task 2</FormLabel>
          <Input id="email" type="text" />
          <FormHelperText>
            Somthing really important to get id done
          </FormHelperText>
        </FormControl>
      </Box>
      <Box p={8}>
        <FormControl>
          <FormLabel htmlFor="text">Task 3</FormLabel>
          <Input id="email" type="text" />
          <FormHelperText>Something fairly important</FormHelperText>
        </FormControl>
      </Box>
    </Box>
  )
}

export default IndexPage
