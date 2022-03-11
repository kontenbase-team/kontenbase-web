import { Image, Button, Container, Group, Title, Anchor } from '@mantine/core'
import { FunctionComponent } from 'react'
import { Link } from 'remix'

import { stacksData } from '~/data'

export const HomeActionLast: FunctionComponent = () => (
  <Container
    size="xl"
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '3rem',
      gap: '3rem',
      textAlign: 'center',
    }}
  >
    <Title order={2} sx={{ maxWidth: '24ch' }}>
      Try our managed service with battle tested technology stack
    </Title>

    <Group spacing="xl" sx={{ justifyContent: 'center', maxWidth: '780px' }}>
      {stacksData.map((item) => (
        <Anchor key={item.name} href={item.url} target="_blank">
          <Image
            key={item.name}
            src={item.imageUrl}
            alt={item.name}
            fit="contain"
            height={60}
            sx={{
              filter: 'grayscale(1) contrast(0.5)',
              '&:hover': {
                filter: 'grayscale(0)',
              },
            }}
          />
        </Anchor>
      ))}
    </Group>

    <Link to="/signup">
      <Button
        size="lg"
        radius="md"
        variant="gradient"
        gradient={{ from: 'red', to: 'orange', deg: 105 }}
      >
        Sign Up for Free
      </Button>
    </Link>
  </Container>
)
