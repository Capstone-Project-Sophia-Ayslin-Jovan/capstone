import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  HStack,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
} from "@chakra-ui/react";
import {
  Dropdown,
  Text as NextUIText,
  Grid,
  User as NextUIUser,
  Button,
} from "@nextui-org/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiPlusSquare,
  FiBookOpen,
} from "react-icons/fi";
import { AuthorizeContext } from "../../contexts/authUser";
import { useContext } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";

const LinkItems = [
  { name: "Home", icon: FiHome, pathname: "/Dashboard" },
  {
    name: "Create a Budget",
    icon: FiTrendingUp,
    pathname: "/Dashboard/Create-Budget",
  },
  {
    name: "Add Expense",
    icon: FiPlusSquare,
    pathname: "/Dashboard/Add-Expense",
  },
  { name: "Modules", icon: FiBookOpen, pathname: "/Dashboard/Modules" },
  { name: "Profile", icon: FiCompass, pathname: "/Dashboard/Profile" },
  { name: "Settings", icon: FiSettings },
];

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <NextUIText size={30} weight="bold">
          Literate
        </NextUIText>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} pathname={link.pathname}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, children, pathname, ...rest }) => {
  const location = useLocation();
  return (
    <Link to={pathname}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        bg={location.pathname == pathname ? "#0072f5" : ""}
        _hover={{
          bg: "#0072f5",
          color: "white",
        }}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>{" "}
    </Link>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: "flex", md: "none" }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
      >
        Literate
      </Text>

      <HStack spacing={{ base: "0", md: "6" }}>
        {/* <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell />}
        /> */}
        <Flex alignItems={"center"}>
          <UserDropdown />
        </Flex>
      </HStack>
    </Flex>
  );
};

const Dashboard = ({ display }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {display}
      </Box>
    </Box>
  );
};

export default Dashboard;

function UserDropdown() {
  const { authState, logoutUser } = useContext(AuthorizeContext);
  const handleLogout = () => {
    logoutUser();
  };
  return (
    <Grid.Container justify="flex-start" gap={2}>
      <Grid>
        <Dropdown placement="bottom-left">
          <Dropdown.Trigger>
            <NextUIUser
              bordered
              as="button"
              size="lg"
              color="primary"
              name={`${authState.user?.firstName} ${authState.user?.lastName}`}
              description={`@${authState.user?.username}`}
              src="https://static.vecteezy.com/system/resources/previews/021/548/095/non_2x/default-profile-picture-avatar-user-avatar-icon-person-icon-head-icon-profile-picture-icons-default-anonymous-user-male-and-female-businessman-photo-placeholder-social-network-avatar-portrait-free-vector.jpg"
            />
          </Dropdown.Trigger>
          <Dropdown.Menu
            color="primary"
            aria-label="User Actions"
            onAction={(key) => {
              switch (key) {
                case "profile":
                  console.log(key);
                case "logout":
                  handleLogout();
              }
            }}
          >
            <Dropdown.Item key="profile" css={{ height: "$18" }}>
              <NextUIText b color="inherit" css={{ d: "flex" }}>
                Signed in as
              </NextUIText>
              <NextUIText b color="inherit" css={{ d: "flex" }}>
                {authState.user?.email}
              </NextUIText>
            </Dropdown.Item>
            {/* <Dropdown.Item key="settings" withDivider>
              My Settings
            </Dropdown.Item>
            <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item>
            <Dropdown.Item key="analytics" withDivider>
              Analytics
            </Dropdown.Item>
            <Dropdown.Item key="system">System</Dropdown.Item>
            <Dropdown.Item key="configurations">Configurations</Dropdown.Item> */}
            <Dropdown.Item key="help_and_feedback" withDivider>
              Help & Feedback
            </Dropdown.Item>
            <Dropdown.Item key="logout" color="error" withDivider>
              Log Out
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Grid>
    </Grid.Container>
  );
}
