"use client"
import React from 'react'
import {
    Navbar,
    Button,
    Spacer,
    Modal,
    Text,
    Input,
    Row,
    Checkbox,
  } from "@nextui-org/react";

const BudgetLanding = ({handleNextStep, handlePreviousStep}) => {
  return (
    <div>
        <Text>
            Budgeting is the process of creating a financial plan to allocate and manage your income, expenses, and savings. 
            It involves estimating your income sources and setting limits on how much you will spend on various categories of 
            expenses, such as housing, transportation, food, entertainment, and savings.
        </Text>
        <Button onPress={handleNextStep}>
            Start Budgeting
        </Button>
    </div>
  )
}

export default BudgetLanding