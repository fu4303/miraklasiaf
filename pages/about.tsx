import { useColorModeValue, Heading, Text, Stack } from '@chakra-ui/react'
import { Page } from '@/components/common'

export default function AboutPage() {
  const secondaryColor = useColorModeValue('gray.700', 'gray.400')

  return (
    <Page title="About | Faisal Karim" canonical="/about">
      <Stack spacing={8} justifyContent="center" alignItems="flex-start">
        <Stack direction="column" justify="flex-start" align="flex-start" spacing={4}>
          <Heading letterSpacing="tight" as="h1" size="2xl">
            About Me
          </Heading>
          <Text color={secondaryColor}>
            Hi, I'm Alec living in Charlottesville, Virginia.  A jack of all trades, master of some.
          </Text>
          <Text color={secondaryColor}>
            I grew up in small-town Free Union, Virginia before attending the University of Virginia in nearby Charlottesville. I spend my trying to understand
            why and how things work.
          </Text>
        </Stack>
      </Stack>
    </Page>
  )
}
