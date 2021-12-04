import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { registerUser } from "../api/users";
import { storeUser } from "../auth";
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
  InputRightElement,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const Register = ({ isLoggedIn, setIsLoggedIn }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [registered, setRegistered] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const history = useHistory();
  const toast = useToast();

  const handleClick = () => {
    history.push("/");
  };

  const handleShowClick = () => setShowPassword(!showPassword);

  if (isLoggedIn && !registered)
    return (
      <div className="all-products-main-container">
        You're stilled logged in! Log out before registering as a different
        user.
      </div>
    );
  else if (isLoggedIn && registered)
    return (
      <div className="all-products-main-container">
        Account registered! Let's start pitching!
      </div>
    );

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="#eee2df"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar bg="#c97c5d" />
        <Heading color="black">Sign Up</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form
            onSubmit={async (event) => {
              event.preventDefault();
              if (password.length < 8) {
                toast({
                  title: "Password must be at least 8 characters",
                  status: "error",
                  duration: 8000,
                  isClosable: true,
                  position: "top",
                });
              }
              try {
                const results = await registerUser(userName, password);
                if (results.user) {
                  storeUser(results.token);
                  setIsLoggedIn(true);
                  setRegistered(true);
                  handleClick();
                } else console.log("register failed: ", results.error.message);
                setUserName("");
                setPassword("");
              } catch (err) {
                toast({
                  title: "Username already exists",
                  status: "error",
                  duration: 8000,
                  isClosable: true,
                  position: "top",
                });
                console.error(err);
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
                    id="userName"
                    type="text"
                    placeholder="enter username"
                    value={userName}
                    onChange={(event) => {
                      setUserName(event.target.value);
                    }}
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
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="enter password"
                    value={password}
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText textAlign="center">
                  <Link>Password must be at least 8 characters</Link>
                </FormHelperText>
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                bg="#c97c5d"
                width="full"
              >
                Register
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        Already a member?{" "}
        <Link color="#c97c5d" href="/login">
          Log In
        </Link>
      </Box>
    </Flex>
  );
};

export default Register;
