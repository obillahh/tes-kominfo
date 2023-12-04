import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Navbar from "../components/Navbar";
import { Box, Flex, Heading, Text, SimpleGrid, Spinner, Center, Image, Container, Link } from "@chakra-ui/react";
import { fetchProductsRequest, fetchProductsSuccess, fetchProductsFailure } from '../redux/product/slice';
import ProductCard from "../components/ProductComponent";
import axios from "axios";
import { ENDPOINT_API_GET_LIST_PRODUCT } from "../constants/api";
import Hero from "../assets/images/banner.png"
import Agenda from "../assets/images/agenda.png"
import Pendataan from "../assets/images/pendataan.png"
import Koperasi from "../assets/images/koperasi.png"
import Galeri from "../assets/images/Galeri.png"
import Konsultasi from "../assets/images/Konsultasi.png"
import Klinik from "../assets/images/Klinik.png"
import Selayang from "../assets/images/selayang.png"
import Rectangle from "../assets/images/Rectangle.png"
import { fetchBeritasFailure, fetchBeritasRequest, fetchBeritasSuccess } from "../redux/beritas/sliceBeritas";
import BeritasCard from "../components/BeritasCard";
import Youtube from "../assets/images/yt.png"
import Video1 from "../assets/images/video1.png"
import Infografis from "../assets/images/infografis.png"
import Produk from "../assets/images/produk.png"
import Foto from "../assets/images/foto.png"
import Footer from "../assets/images/footer.png"


export default function Home() {
  const dispatch = useDispatch();
  const { list: beritas, loading: beritasLoading, error: beritasError } = useSelector((state) => state.beritasReducer) || {};

  useEffect(() => {

    const fetchBeritas = async () => {
      dispatch(fetchBeritasRequest());
      try {
        const response = await axios.get("https://diskopukm.palembang.go.id/api/beritas?sort[0]=tanggal%3Adesc&pagination[pageSize]=9&populate=*");
        dispatch(fetchBeritasSuccess(response.data));
      } catch (error) {
        console.error("Error fetching beritas:", error);
        dispatch(fetchBeritasFailure(error.message));
      }
    };

    fetchBeritas();
  }, [dispatch]);

  return (
    <>
      <Navbar />
      {/* Hero */}
      <Box h="90vh" backgroundImage={Hero} backgroundSize={"cover"}>
        <Flex justifyContent={"space-between"} alignItems={"end"} h="100%" maxW={"800px"} mx={"auto"} p={4}>
          <Box maxW={"450px"}>
            <Heading as={"h2"} textAlign={"left"} color={"white"} fontWeight={700} fontSize={40}>
              Dinas Koperasi & UKM
            </Heading>
            <Text mt={2} mb={8} color={"white"} fontSize={16} fontWeight={500}>
              Dinas Koperasi dan Usaha Kecil Menengah
            </Text>
          </Box>
        </Flex>
      </Box>
			{/* Welcome */}
			<Box mt={12} h={"130vh"} backgroundColor={"white"} >
				<Text align={"center"} fontWeight={700} fontSize={24} mb={12}>Cari Berdasarkan</Text>
				<Flex justify={"space-between"} maxW={"800px"} mx={"auto"}>
					<Box w={100} justifyContent={"center"} p={4}>
						<Box w={100}>
							<Image src={Agenda} align={"center"} mb={6}/>
						</Box>
						<Text align={"center"} fontWeight={600} fontSize={14}>Agenda Pelatihan</Text>
					</Box>
					<Box w={110} justifyContent={"center"} p={4}>
						<Box w={100} justifyContent={"center"}>
							<Image src={Pendataan} align={"center"} mb={5}/>
						</Box>
						<Text align={"center"} fontWeight={600} fontSize={14}>Pendataan UMKM</Text>
					</Box>
					<Box w={120} justifyContent={"center"} p={4}>
						<Box w={100}>
							<Image src={Koperasi} align={"center"} mb={6}/>
						</Box>
						<Text align={"center"} fontWeight={600} fontSize={14}>Pendataan Koperasi</Text>
					</Box>
					<Box w={100} justifyContent={"center"} p={4}>
						<Box w={100}>
							<Image src={Galeri} align={"center"} mb={10}/>
						</Box>
						<Text align={"center"} fontWeight={600} fontSize={14}>Galeri</Text>
					</Box>
					<Box w={110} justifyContent={"center"} p={4}>
						<Box w={100}>
							<Image src={Konsultasi} align={"center"} mb={5}/>
						</Box>
						<Text align={"center"} fontWeight={600} fontSize={14}>Konsultasi UMKM</Text>
					</Box>
					<Box w={120} justifyContent={"center"} p={4}>
						<Box w={100}>
							<Image src={Klinik} align={"center"} mb={6}/>
						</Box>
						<Text align={"center"} fontWeight={600} fontSize={14}>Konsultasi Klinik Koperasi</Text>
					</Box>
				</Flex>
				<Flex mt={10} justifyContent={"center"} alignItems={"center"}>
					<Image src={Selayang} width={400} mr={10}/>
					<Box maxW={400}>
						<Text color={'#016ABF'} mb={2}>Selayang Pandang</Text>
						<Text fontSize={30} fontWeight={700} mb={2}>Selamat Datang di Dinas PPKUKM Kota Palembang</Text>
						<Text >ida berenang di Sungai Musi
									Selamat datang di web PPKUKM Kota Palembang
									Semoga dapat memberikan informasi
									Kita wujudkan visi Palembang Emas Darussalam 2023
									"Pengelolaan Keuangan & Aset Daerah yang Akuntabel menuju Opini Laporan Keuangan WTP"
						</Text>
					</Box>
				</Flex>
			</Box>
			<Box backgroundColor={'#F2F3F7'} h={'60vh'} w={'100%'}>
				<Flex maxW={900} mx={'auto'} p={8} alignItems={"center"}>
					<Image src={Rectangle} height={6} mr={2} />
					<Text fontSize={24} fontWeight={700}>Berita PPKUKM</Text>
				</Flex>
					{beritasLoading && <Center h="100%"><Spinner size="xl" /></Center>}
					{beritasError && <Text color="red.500">Error: {beritasError}</Text>}
					{beritas && beritas.length > 0 && (
					<Flex justifyContent="space-between" flexWrap="wrap">
						{beritas.slice(0, 3).map((berita) => (
							<Box key={berita.id} width={{ base: "100%", md: "48%", lg: "30%" }} mb={4}>
								<BeritasCard berita={berita} />
							</Box>
						))}
				</Flex>
				)}
			</Box>
			<Box h={'120vh'} w={'100%'}>
				<Flex maxW={900} mx={'auto'} p={8} alignItems={"center"}>
					<Image src={Rectangle} height={6} mr={2} />
					<Text fontSize={24} fontWeight={700}>Video UMKM</Text>
				</Flex >
				<Flex maxW={900} justify={"start"} mx={'auto'} pl={8}>
					<Box maxW={600}>
						<Box>
							<Flex justify={"center"}
									width={500}
									height={200}
									style={{
										backgroundImage: `url(${Video1})`,
										backgroundSize: 'cover',
										backgroundPosition: 'center', // Optional: adjust the position based on your preference
								}}>
								<Center>
									<Image src={Youtube} />
								</Center>
							</Flex>
							<Text mt={2} fontWeight={600} fontSize={12}>Wawako Memantau Pendistribusian Bantuan dari Yayasan Budha Tzu Chi di Rumah...</Text>
							<Text fontSize={12}>Selasa, 21 Februari 2022</Text>
						</Box>
						<Flex>
							<Box>
								<Flex justify={"center"}
										width={240}
										height={150}
										style={{
											backgroundImage: `url(${Video1})`,
											backgroundSize: 'cover',
											backgroundPosition: 'center', // Optional: adjust the position based on your preference
									}}>
									<Center>
										<Image src={Youtube} />
									</Center>
								</Flex>
								<Text mt={2} fontWeight={600} fontSize={8}>PPS Himpun Rp44M, Walikota Palembang Himbau Masyarakat...</Text>
								<Text fontSize={12}>Selasa, 21 Februari 2022</Text>
							</Box>
							<Box ml={2}>
								<Flex justify={"center"}
										width={250}
										height={150}
										style={{
											backgroundImage: `url(${Video1})`,
											backgroundSize: 'cover',
											backgroundPosition: 'center', // Optional: adjust the position based on your preference
									}}>
									<Center>
										<Image src={Youtube} />
									</Center>
								</Flex>
								<Text mt={2} fontWeight={600} fontSize={8}>PPS Himpun Rp44M, Walikota Palembang Himbau Masyarakat...</Text>
								<Text fontSize={12}>Selasa, 21 Februari 2022</Text>
							</Box>
						</Flex>
					</Box>
					<Box ml={2}>
						<Flex maxW={600} mx={'auto'} ml={2} alignItems={"center"} justify={"space-between"}>
							<Flex alignItems={"center"}>
								<Image src={Rectangle} height={6} mr={2} />
								<Text fontSize={24} fontWeight={700}>Infografis</Text>
							</Flex>
							<Flex ml={20}>
								<Link>Lihat Lainnya</Link>
							</Flex>
						</Flex >
						<Flex ml={4} mt={4}>
							<Image src={Infografis} w={120}/>
							<Box ml={6}>
								<Text fontWeight={700}>Selamat Hari Raya Nyepi 2022</Text>
								<Text mt={2}>Kamis, 3 Maret 2022</Text>
							</Box>
						</Flex>
						<Flex ml={4} mt={4}>
							<Image src={Infografis} w={120}/>
							<Box ml={6}>
								<Text fontWeight={700}>Selamat Hari Raya Nyepi 2022</Text>
								<Text mt={2}>Kamis, 3 Maret 2022</Text>
							</Box>
						</Flex>
						<Flex ml={4} mt={4}>
							<Image src={Infografis} w={120}/>
							<Box ml={6}>
								<Text fontWeight={700}>Selamat Hari Raya Nyepi 2022</Text>
								<Text mt={2}>Kamis, 3 Maret 2022</Text>
							</Box>
						</Flex>
					</Box>
				</Flex>
			</Box>
			<Box h={'70vh'} >
				<Flex maxW={900} mx={'auto'} p={8} alignItems={"center"} justify={"space-between"}>
					<Flex align={"center"}>
						<Image src={Rectangle} height={6} mr={2} />
						<Text fontSize={24} fontWeight={700}>Produk UMKM</Text>
					</Flex>
					<Link>Selengkapnya</Link>
				</Flex >
				<Flex maxW='100%' alignItems={"center"} justify={"center"} >
					<Box maxW="200" borderWidth="1px" borderRadius="lg" overflow="hidden" mr={2}>
						<Image src={Produk} width={200}/>
						<Box pt="6" pl={2} pb={6} >
							<Text fontWeight="bold" fontSize="lg" mb="1">
								Makanan Ringan
							</Text>
							<Text color="gray.500">Rp 10.000</Text>
							<Flex align={"center"} mt={4}>
								<Image src={Foto} height={6} mr={2} />
								<Text fontSize={12}>soniaverina99</Text>
							</Flex>
						</Box>
					</Box>
					<Box maxW="200" borderWidth="1px" borderRadius="lg" overflow="hidden" mr={2}>
						<Image src={Produk} width={200}/>
						<Box pt="6" pl={2} pb={6}>
							<Text fontWeight="bold" fontSize="lg" mb="1">
								Makanan Ringan
							</Text>
							<Text color="gray.500">Rp 10.000</Text>
							<Flex align={"center"} mt={4}>
								<Image src={Foto} height={6} mr={2} />
								<Text fontSize={12}>soniaverina99</Text>
							</Flex>
						</Box>
					</Box>
					<Box maxW="200" borderWidth="1px" borderRadius="lg" overflow="hidden" mr={2}>
						<Image src={Produk} width={200}/>
						<Box pt="6" pl={2} pb={6}>
							<Text fontWeight="bold" fontSize="lg" mb="1">
								Makanan Ringan
							</Text>
							<Text color="gray.500">Rp 10.000</Text>
							<Flex align={"center"} mt={4}>
								<Image src={Foto} height={6} mr={2} />
								<Text fontSize={12}>soniaverina99</Text>
							</Flex>
						</Box>
					</Box>
					<Box maxW="200" borderWidth="1px" borderRadius="lg" overflow="hidden">
						<Image src={Produk} width={200}/>
						<Box pt="6" pl={2} pb={6}>
							<Text fontWeight="bold" fontSize="lg" mb="1">
								Makanan Ringan
							</Text>
							<Text color="gray.500">Rp 10.000</Text>
							<Flex align={"center"} mt={4}>
								<Image src={Foto} height={6} mr={2} />
								<Text fontSize={12}>soniaverina99</Text>
							</Flex>
						</Box>
					</Box>
				</Flex>
			</Box>
			<Flex h={'80vh'} w={'100%'} p={8} backgroundImage={Footer} mt={10} backgroundColor={'blue'}>
				<Flex maxW={900}>
					<Box></Box>
				</Flex>
			</Flex>
    </>
  );
}
