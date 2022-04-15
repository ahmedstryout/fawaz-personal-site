import Tilt from 'react-parallax-tilt'
import {Box, Heading, Text} from '@chakra-ui/react'
import {Work} from 'types'
import Link from 'next/link'
import {getStrapiURL} from '../../utils/strapi'

interface TiltedCardProps {
  work: any
  id: number
}
// https://github.com/mkosir/react-parallax-tilt#readme => refer for props

export default function TiltedCards({work, id}: TiltedCardProps) {
  return (
    <Link href={`/projects/${id}`} passHref>
      <Box>
        <Tilt tiltMaxAngleX={1} tiltMaxAngleY={1}>
          <Box
            // bg="#2D3039"
            borderRadius={'20px'}
            color={'white'}
            // px="55px"
            // py="60px"
            bgSize="100% 100%"
            height={['450px', '550px', '700px']}
            verticalAlign={'bottom'}
            position={'relative'}
            bgImage={
              work.image
                ? `url(${getStrapiURL(work.image.data.attributes.url)})`
                : ''
            }
            bgRepeat="no-repeat"
            bgPos={'center'}
          >
            <Box
              position="absolute"
              bottom={'6%'}
              left={['7%', '5%']}
              pr={['2%', 'auto']}
            >
              <Heading as="h3" fontSize={['24px', '36px']}>
                {work.name}
              </Heading>
              <Text opacity={0.6} fontSize={['16px', '22px']}>
                {work.tags}
              </Text>
            </Box>
          </Box>
        </Tilt>
      </Box>
    </Link>
  )
}
