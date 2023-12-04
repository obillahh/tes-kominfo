import { Box, Text } from "@chakra-ui/react";

const BeritasCard = ({berita}) => {
    const {judul, gambar, tanggal} = berita;
    const imageUrl = gambar.data[0].attributes.formats.thumbnail.url;

    return (
        <Box backgroundImage={`url(${imageUrl})`} width={300} height={250} alignItems={"end"}>
            <Text fontSize={24} fontWeight={600}>{judul}</Text>
            <Text fontSize={14} fontWeight={500} opacity={0.8}>{tanggal}</Text>
        </Box>
    );
}

export default BeritasCard;