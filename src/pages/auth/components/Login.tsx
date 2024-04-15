import React from "react";
import {
  Flex,
  Box,
  Text,
  Image,
  Input,
  Stack,
  InputGroup,
  InputRightElement,
  InputLeftElement,
  Checkbox,
  HStack,
  Button,
  Divider,
  useBreakpointValue,
  Link,
} from "@chakra-ui/react";
import { CoverBg, Facebook, Google } from "../../../assets/images";
import { Lock, Email, UserIcon, Eye, EyeOff } from "../../../assets/svg";
import { APP_ROUTES } from "../../../config/APP_ROUTES";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const showCoverImage = useBreakpointValue({ base: false, md: true });
  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubscribe = () => {
    console.log("Subscribe");
    navigate(APP_ROUTES.AUTH.REGISTER);
  };

  return (
    <Flex w="full" h="full" flexDirection={{ base: "column", md: "row" }}>
      {showCoverImage && (
        <Box flex={{ base: "none", md: "full" }}>
          <Image
            h={{ base: "50vh", md: "100vh" }}
            src={CoverBg}
            alt="cover"
            objectFit="contain"
          />
        </Box>
      )}
      <Box flex={1}>
        <Flex justifyContent="center" alignItems="center" h="full">
          <Box
            w={{ base: "90%", md: "auto" }}
            px={{ base: "15px", md: "0" }}
            mt="50px"
          >
            <Text
              fontSize={{ base: "18px", md: "24px" }}
              fontWeight="bold"
              mb="4"
            >
              Sign In to your an account
            </Text>
            <Box py="30px" w={{ base: "auto", md: "500px" }}>
              <Stack spacing={6}>
                <InputGroup size={"lg"}>
                  <InputLeftElement>
                    <Email fill={"#94A3B8"} />
                  </InputLeftElement>
                  <Input
                    type="email"
                    placeholder="email"
                    color="#94A3B8"
                    textColor="black"
                    borderColor={"#E2E8F0"}
                    borderWidth="2px"
                    borderRadius="12px"
                  />
                </InputGroup>
                <InputGroup size={"lg"}>
                  <InputRightElement onClick={handleShowPassword}>
                    {showPassword ? (
                      <Eye fill={"#94A3B8"} />
                    ) : (
                      <EyeOff fill={"#94A3B8"} />
                    )}
                  </InputRightElement>
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="password"
                    color="#94A3B8"
                    textColor="black"
                    borderColor={"#E2E8F0"}
                    borderWidth="2px"
                    borderRadius="12px"
                  />
                  <InputLeftElement>
                    <Lock fill={"#94A3B8"} />
                  </InputLeftElement>
                </InputGroup>
              </Stack>
              <HStack
                mt="24px"
                spacing={2}
                alignContent="center"
                justifyContent="space-between"
              >
                <Box display={"flex"}>
                  <Checkbox size={"lg"} />
                  <Text ml="12px">Remember me</Text>
                </Box>

                <Link
                  onClick={() => navigate(APP_ROUTES.AUTH.FORGOT_PASSWORD)}
                  fontWeight={"900"}
                  color="#2563EB"
                >
                  Forgot Password
                </Link>
              </HStack>
              <Button
                size={"lg"}
                borderRadius="12px"
                w="full"
                mt="30px"
                bg="#2563EB"
                color="white"
                type="submit"
                //onClick={handleSubscribe}
                _hover={{ backgroundColor: "none" }}
              >
                Sign in
              </Button>

              <Box position="relative" padding="10">
                <Divider />
                <Flex
                  justifyContent="center"
                  alignItems="center"
                  w="full"
                  bg="white"
                  px="4"
                >
                  <Text>or sign up with</Text>
                </Flex>
              </Box>
              <HStack
                mt="10px"
                spacing={{ base: "30px", md: "30px" }}
                justify="center"
              >
                <Flex
                  w="full"
                  maxW={{ base: "200px", md: "none" }}
                  borderRadius="12px"
                  borderColor="#E2E8F0"
                  borderWidth="2px"
                  alignItems="center"
                  justifyContent="center"
                  p="12px"
                  cursor="pointer"
                >
                  <Image src={Google} alt="google" />
                  <Link
                    _hover={{ textUnderlineOffset: "none" }}
                    href="https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Ftakeout.google.com%2F%3Fhl%3Dfr&followup=https%3A%2F%2Ftakeout.google.com%2F%3Fhl%3Dfr&hl=fr&ifkv=ARZ0qKIhkRJ0Z1hsuobID6C_Zp57EVdSApalgMObqtt3rylpDZVrffuwLcsxJg8gZc468Mkphj_ggA&osid=1&passive=1209600&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S537503603%3A1713139994752889&theme=mn&ddm=0"
                    ml="10px"
                  >
                    Google
                  </Link>
                </Flex>
                <Flex
                  w="full"
                  maxW={{ base: "200px", md: "none" }}
                  borderRadius="12px"
                  borderColor="#E2E8F0"
                  borderWidth="2px"
                  alignItems="center"
                  justifyContent="center"
                  p="12px"
                  cursor="pointer"
                >
                  <Image src={Facebook} alt="facebook" />
                  <Link
                    _hover={{ textUnderlineOffset: "none" }}
                    href="https://www.facebook.com/login.php"
                    ml="10px"
                  >
                    Facebook
                  </Link>
                </Flex>
              </HStack>
              <Text textAlign="center" mt="30px">
                Don't have an account?{" "}
                <span style={{ color: "#2563EB", fontWeight: "bold" }}>
                  <Link onClick={handleSubscribe}>Sign Up</Link>
                </span>
              </Text>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Login;
