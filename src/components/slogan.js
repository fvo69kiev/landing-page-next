/** @jsx jsx */
import {jsx,  Box, Text, Heading } from 'theme-ui'

export default function Slogan({ title, slogan, isWhite, bgAdvant }) {
  return (
    <Box sx={{variant: 'slogan'}}>
      <Text
        as='p'
        sx={{
          variant: 'slogan.subTitle',
          color: isWhite ? 'white' : 'primary',
          opacity: isWhite ? 0.7 : 1,
          backgroundColor: bgAdvant ? 'white' : '',
          padding: bgAdvant ? '3px 10px' : '',
          borderRadius: bgAdvant ? '3px' : '',
          boxShadow: bgAdvant ? '0px 0px 10px 5px rgba(154, 63, 0, 1)' : '',
        }}
      >
          {slogan}
      </Text>
      <Heading
        as='h2'
        sx={{
          variant: 'slogan.title',
          color: isWhite ? 'white' : 'heading',
        }}
      >
          {title}
      </Heading>
    </Box>
  )
}