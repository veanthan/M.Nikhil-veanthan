import React, { useState } from 'react'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import MobileStepper from '@mui/material/MobileStepper'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'
const websiteUIs = [
  {
    label: 'New Bank Building',
    imgPath: 'https://example.com/new-bank-website-ui.jpg',
    website: 'https://www.newbank.com',
  },
  {
    label: 'Renovated Bank Interior',
    imgPath: 'https://example.com/renovated-bank-website-ui.jpg',
    website: 'https://www.renovatedbank.com',
  },
  {
    label: 'Online Banking Services',
    imgPath: 'https://example.com/online-banking-website-ui.jpg',
    website: 'https://www.onlinebanking.com',
  },
  {
    label: 'Friendly Customer Service',
    imgPath: 'https://example.com/friendly-customer-service-website-ui.jpg',
    website: 'https://www.friendlybank.com',
  },
]

function Slider() {
  const theme = useTheme()
  const [activeStep, setActiveStep] = useState(0)
  const maxSteps = websiteUIs.length

  const handleNext = () => {
    setActiveStep((prevActiveStep) =>
      prevActiveStep === maxSteps - 1 ? 0 : prevActiveStep + 1
    )
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) =>
      prevActiveStep === 0 ? maxSteps - 1 : prevActiveStep - 1
    )
  }

  return (
    <Box
      sx={{
        maxWidth: 620,
        flexGrow: 1,
        overflow: 'hidden',
        borderRadius: '20px',
        paddingLeft: '50px',
        paddingTop: '50px',
      }}
    >
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: '#2196F3', // Blue color
          borderTopLeftRadius: '20px',
          borderTopRightRadius: '20px',
        }}
      >
        <Typography sx={{ color: '#FFFFFF' }}>
          {websiteUIs[activeStep].label}
        </Typography>
      </Paper>
      <Box
        sx={{
          height: 255,
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          borderBottomLeftRadius: '20px',
          borderBottomRightRadius: '20px',
        }}
      >
        {websiteUIs.map((step, index) => (
          <div
            key={step.label}
            style={{
              display: index === activeStep ? 'block' : 'none',
              width: '100%',
            }}
          >
            <a href={step.website} target="_blank" rel="noopener noreferrer">
              <img
                src={step.imgPath}
                alt={step.label}
                style={{
                  height: '100%',
                  width: '100%',
                  objectFit: 'cover',
                }}
              />
            </a>
          </div>
        ))}
      </Box>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} sx={{ color: '#2196F3' }}>
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} sx={{ color: '#2196F3' }}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  )
}

export default Slider
