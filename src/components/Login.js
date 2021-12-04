import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { storeUser } from "../auth";
import { loginUser } from "../api/users";
import {
  useToast,
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement
} from '@chakra-ui/react';
import { FaUserAlt, FaLock } from "react-icons/fa";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const Login = ({ setIsLoggedIn, setIsAdmin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const toast = useToast();

  const handleShowClick = () => setShowPassword(!showPassword);

  const history = useHistory();

  const handleClick = () => {
    history.push("/");
  };

  return (
    <Flex
      direction="column"
      w="100wh"
      h="100vh"
      bg="#eee2df"
      justify="center"
      align="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justify="center"
        align="center"
      >
        <Avatar bg="#c97c5d" />
        <Heading color="black">Log In</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              try {
                const results = await loginUser(username, password);
                storeUser(results.token);
                setIsLoggedIn(true);
                setIsAdmin(results.user.isAdmin);
                setUsername("");
                setPassword("");
                handleClick();
              } catch (err) {
                toast({
                  title: 'Username or password is incorrect',
                  status: 'error',
                  duration: 8000,
                  isClosable: true,
                  position: 'top'
                })
                console.log(err);
              }
            }}
          >
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />

                  <Input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter username"
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="gray.300" />}
                  />
                  <Input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText textAlign="right">
                  <Link>forgot password?</Link>
                </FormHelperText>
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                bg="#c97c5d"
                width="full"
              >
                Login
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        New to us?{" "}
        <Link color="#c97c5d" href="/register">
          Sign Up
        </Link>
      </Box>
    </Flex>


  );
};

export default Login;
