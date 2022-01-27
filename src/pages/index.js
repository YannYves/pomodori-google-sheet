import {
  FormControl,
  Button,
  FormLabel,
  FormErrorMessage,
  Input,
  FormHelperText,
} from "@chakra-ui/react"
import React, { useState } from "react"
import { Box, Text } from "@chakra-ui/react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { axiosCall } from "../utils/api-utils"

function IndexPage() {
  const [email, setEmail] = useState("")
  const [task1, setTask1] = useState("")
  const [task2, setTask2] = useState("")
  const [task3, setTask3] = useState("")
  const baseUrl = process.env.PUBLIC_BASE_URL

  const googleSheetData = useStaticQuery(graphql`
    query {
      googlePomodoriSheet {
        task1
      }
    }
  `)

  let token = "TBD"

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const handleClick = async e => {
    axiosCall("post", baseUrl, { task1, task2, task3 })
  }

  return (
    <Box p={8}>
      <Box p={8}>
        <Text fontSize="xl">Hi, what's the plan Today ? </Text>
      </Box>

      <Box p={8}>
        <FormControl>
          <FormLabel htmlFor="text">Task 1</FormLabel>
          <Input
            id="email"
            type="text"
            onChange={e => setTask1(e.target.value)}
          />

          <FormHelperText>
            One thing that should be done, no matter what{" "}
          </FormHelperText>
        </FormControl>
      </Box>
      <Box p={8}>
        <FormControl>
          <FormLabel htmlFor="text">Task 2</FormLabel>
          <Input
            id="email"
            type="text"
            onChange={e => setTask2(e.target.value)}
          />
          <FormHelperText>
            Somthing really important to get id done
          </FormHelperText>
        </FormControl>
      </Box>
      <Box p={8}>
        <FormControl>
          <FormLabel htmlFor="text">Task 3</FormLabel>
          <Input
            id="email"
            type="text"
            onChange={e => setTask3(e.target.value)}
          />
          <FormHelperText>Something fairly important</FormHelperText>
          <Button colorScheme="blue" onClick={handleClick}>
            Update
          </Button>
        </FormControl>
      </Box>
    </Box>
  )
}

export default IndexPage
