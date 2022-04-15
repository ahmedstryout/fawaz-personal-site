import * as React from 'react'
import styles from '@/styles/project-details.module.css'
import type {NextPage} from 'next'
import {Box, Flex, Heading, SimpleGrid, Text} from '@chakra-ui/react'
import {fetchAPI} from 'utils/strapi'
import Image from 'next/image'
import TiltedCards from '@/components/tilted-cards/TiltedCards'

const ProjectDetails: NextPage<{project: any}> = ({project}) => {
  console.log({project})

  const parentRef = React.useRef()

  console.log(parentRef)

  // React.useEffect(() => {
  //   if (parentRef.current) {
  //     parentRef.current.getBoundingClientRect()
  //   }
  // }, [])

  return (
    <Box ref={parentRef}>
      <Flex justify={'center'}>
        <Image
          src={`https://picsum.photos/1600/600`}
          alt="project image 1"
          height={600}
          width={1600}
          className={styles.projectImage}
        />
      </Flex>

      <TextContainer>
        <StyledHeading>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </StyledHeading>
        <StyledText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit.
        </StyledText>
      </TextContainer>

      <Flex justify={'center'}>
        <Image
          src={`https://picsum.photos/1600/600`}
          alt="project image 1"
          height={600}
          width={1600}
          className={styles.projectImage}
        />
      </Flex>
      <Flex justify={'space-around'} mt={['58px']}>
        <Image
          src={`https://picsum.photos/700/600`}
          alt="project image 1"
          height={600}
          width={700}
          className={styles.projectImage}
        />

        <Image
          src={`https://picsum.photos/700/600`}
          alt="project image 1"
          height={600}
          width={700}
          className={styles.projectImage}
        />
      </Flex>

      <TextContainer>
        <StyledHeading>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </StyledHeading>
        <StyledText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit.
        </StyledText>
      </TextContainer>

      <Flex justify={'center'} x>
        <Image
          src={`https://picsum.photos/1600/600`}
          alt="project image 1"
          height={600}
          width={1600}
          className={styles.projectImage}
        />
      </Flex>

      <Heading mt={12} textAlign="center">
        More Work
      </Heading>

      <SimpleGrid columns={[1, 2]} spacing={['30px', 10]} my={12}>
        <TiltedCards work={project?.attributes} id={project?.id} />
        <TiltedCards work={project?.attributes} id={project?.id} />
      </SimpleGrid>
    </Box>
  )
}

export default ProjectDetails

export async function getStaticPaths() {
  const projects = await fetchAPI('/projects', {
    // populate: ['image'],
  })

  const paths = projects.data.map(project => ({
    params: {id: String(project.id)},
  }))

  return {
    paths,
    fallback: true, // false or 'blocking'
  }
}

export async function getStaticProps({params}) {
  let project = {
    data: [],
  }
  try {
    project = await fetchAPI(`/projects/${params.id}`, {
      populate: ['image'],
    })

    console.log(project, 'details')
  } catch (err) {
    console.error(err)
  }

  return {
    props: {
      project: project.data,
    },
    // revalidate: 1,
  }
}

// helpers
function StyledHeading(props) {
  return (
    <Heading
      fontWeight={700}
      letterSpacing="-0.03em"
      fontSize={['28px', '32px', '48px']}
      mb={['10px', '20px']}
      {...props}
    />
  )
}

function StyledText(props) {
  return (
    <Text
      fontWeight={500}
      letterSpacing="-0.02em"
      fontSize={['18px', '20px', '22px']}
      {...props}
    />
  )
}

function TextContainer(props) {
  return (
    <Box
      maxW="790px"
      w="100%"
      textAlign={'center'}
      my={['52px', '68px', '82px']}
      mx="auto"
      {...props}
    />
  )
}
