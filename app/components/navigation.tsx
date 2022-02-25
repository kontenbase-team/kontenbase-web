import { FunctionComponent } from 'react'
import { Box, Button, Container, Group, Image, MediaQuery } from '@mantine/core'
import { Link } from 'remix'

import { navigationData } from '~/data'

interface NavigationProps {}

export const Navigation: FunctionComponent<NavigationProps> = () => {
  return (
    <Box
      component="nav"
      sx={(theme) => ({
        paddingTop: theme.spacing.xs,
        paddingBottom: theme.spacing.md,
      })}
    >
      <Container
        size="lg"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Group id="nav-logo" sx={{ marginRight: '3rem' }}>
          <Link to="/">
            <Image height={42} src="/images/logo-on-light.svg" />
          </Link>
        </Group>

        <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
          <Group id="nav-links">
            {navigationData.map((item) => {
              return (
                <Link key={item.to} to={item.to}>
                  {item.text}
                </Link>
              )
            })}
          </Group>
        </MediaQuery>

        <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
          <Group id="nav-auth">
            <Link to="/signin">
              <Button radius="md" variant="subtle" color="red">
                Sign In
              </Button>
            </Link>
            <Link to="/signup">
              <Button
                radius="md"
                variant="gradient"
                gradient={{ from: 'red', to: 'orange', deg: 105 }}
              >
                Sign Up for Free
              </Button>
            </Link>
          </Group>
        </MediaQuery>

        <MediaQuery largerThan="md" styles={{ display: 'none' }}>
          <Group id="nav-auth">
            <Link to="/signup">
              <Button
                radius="md"
                variant="gradient"
                gradient={{ from: 'red', to: 'orange', deg: 105 }}
              >
                Sign Up for Free
              </Button>
            </Link>
          </Group>
        </MediaQuery>
      </Container>
    </Box>
  )
}
