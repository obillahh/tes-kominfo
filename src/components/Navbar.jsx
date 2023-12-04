import { Flex, Heading, Button, Link as RouterLink, Image, Box, Text } from "@chakra-ui/react";
import Logo from '../assets/images/Palembang.png';
import { Link } from "react-router-dom";

export default function Navbar() {
    return(
        <Flex zIndex={2} p={4} align="center" justify="space-around" bg="white" position={"sticky"} top={0}>
					<Flex align={"center"}>
						<Heading as="h1" size="lg" > 
							<Image src={Logo} alt="logo" width="50px" />
						</Heading>
						<Box ml={4}>
							<Text fontSize={'20px'} fontWeight={'bold'} color={'#016ABF'}>Koperasi</Text>
							<Text fontSize={'14px'} color={'black'}>Kota Palembang</Text>
						</Box>
					</Flex>
        	<Flex align="center" >
						<RouterLink as={Link} to="/" color="black" textDecoration="none" >
						Home
						</RouterLink>
						<RouterLink as={Link} to="/product" color="black" textDecoration="none" >
							Profil
						</RouterLink>
						<RouterLink as={Link} to="/berita" color="black" textDecoration="none" >
							Berita
						</RouterLink>
						<RouterLink as={Link} to="/bidang" color="black" textDecoration="none" >
							Bidang
						</RouterLink>
						<RouterLink as={Link} to="/galeri" color="black" textDecoration="none" >
							Galeri
						</RouterLink>
						<RouterLink as={Link} to="/survey" color="black" textDecoration="none" >
							Survey Kepuasan
						</RouterLink>
						<RouterLink as={Link} to="/informasi" color="black" textDecoration="none" >
							Informasi
						</RouterLink>
          </Flex>
        </Flex>
    )
}