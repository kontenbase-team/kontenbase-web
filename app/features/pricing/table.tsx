import {
  Box,
  Button,
  Container,
  SimpleGrid,
  Title,
  Text,
  Group,
  useMantineTheme,
  useMantineColorScheme,
} from '@mantine/core'
import { FunctionComponent, useState } from 'react'
import { Link } from 'remix'

import { Icon } from '~/components'
import { pricingData, pricingFeaturesData } from '~/data'

type TCurrency = 'USD' | 'IDR'

interface PricingTableProps {}

interface PricingTableResponsiveProps {
  currency: TCurrency
}

export const PricingTable: FunctionComponent<PricingTableProps> = () => {
  // eslint-disable-next-line unused-imports/no-unused-vars
  const [currency, setCurrency] = useState<TCurrency>('USD')

  const changeCurrency = () => {
    if (currency === 'USD') {
      setCurrency('IDR')
    } else {
      setCurrency('USD')
    }
  }

  return (
    <Container
      size="xl"
      sx={{
        marginTop: '5rem',
        marginBottom: '5rem',
      }}
    >
      <Button variant="outline" radius="md" onClick={changeCurrency}>
        Switch USD/IDR
      </Button>

      <PricingTableResponsive currency={currency} />
    </Container>
  )
}

export const PricingTableResponsive: FunctionComponent<
  PricingTableResponsiveProps
> = ({ currency }) => {
  const theme = useMantineTheme()
  const { colorScheme } = useMantineColorScheme()
  const isDark = colorScheme === 'dark'

  const backgroundFirst = isDark ? theme.colors.gray[9] : theme.colors.gray[1]
  const backgroundSecond = isDark ? theme.colors.gray[8] : theme.white

  return (
    <SimpleGrid
      spacing={0}
      cols={5}
      sx={{
        marginBottom: '1rem',
      }}
    >
      <Box>
        <Box sx={{ height: 220 }} />
        {pricingFeaturesData.map((item) => (
          <Group key={item.name}>
            {item.icon ? (
              <Group
                sx={{
                  width: '100%',
                  padding: '1rem',
                  background: backgroundFirst,
                }}
              >
                <Text component="span" color="red">
                  <Icon name={item.icon} />
                </Text>
                <Text
                  component="span"
                  sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}
                >
                  {item.name}
                </Text>
              </Group>
            ) : (
              <Box
                sx={{
                  width: '100%',
                  padding: '1rem',
                  background: backgroundSecond,
                }}
              >
                <Text component="span" sx={{ fontWeight: 'bold' }}>
                  {item.name}
                </Text>
              </Box>
            )}
          </Group>
        ))}
      </Box>

      {pricingData.map((plan) => (
        <Group key={plan.name} direction="column" spacing={0}>
          <Group direction="column" spacing="xs" sx={{ height: 220 }}>
            <Title order={4}>{plan?.name}</Title>
            <Group spacing={5}>
              <Text
                component="span"
                sx={{ fontWeight: 'bold', fontSize: '1.5rem' }}
              >
                {currency === 'USD' ? '$' : 'Rp '}
                {plan?.price[currency]}
              </Text>
              <span>/project/month</span>
            </Group>
            <Text>{plan.info}</Text>
            <Link to={plan.button.to}>
              <Button radius="md">{plan.button.text}</Button>
            </Link>
          </Group>

          {plan.features.map((item) => (
            <Box
              key={item}
              sx={{
                width: '100%',
                padding: '1rem 0',
                background: item ? backgroundSecond : backgroundFirst,
              }}
            >
              {item ? (
                <span>{item}</span>
              ) : (
                <Text component="span" sx={{ opacity: 0 }}>
                  -
                </Text>
              )}
            </Box>
          ))}

          <Box sx={{ marginTop: '1rem' }}>
            <Link to={plan.button.to}>
              <Button radius="md">{plan.button.text}</Button>
            </Link>
          </Box>
        </Group>
      ))}
    </SimpleGrid>
  )
}
