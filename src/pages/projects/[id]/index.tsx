import Hero from '@/components/hero/Hero'
import Marquee from '@/components/marquee/Marquee'
import type {NextPage} from 'next'
import {Box} from '@chakra-ui/react'
import {fetchAPI} from 'utils/strapi'
import Image from 'next/image'

const darkBg = '#2D3039'

const ProjectDetails: NextPage<{project: any[]}> = ({project}) => {
  console.log({project})
  return (
    <Box>
      <Box>
        <Image
          src={`https://picsum.photos/1200/600`}
          alt="project image 1"
          width="1200px"
          height="600px"
          objectFit="cover"
        />
      </Box>
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
      // populate: ['image'],
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
